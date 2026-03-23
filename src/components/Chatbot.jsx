import React, { useState, useEffect, useRef } from "react";
import { Bot, X, Loader2, Send } from "lucide-react";

export default function Chatbot({ t, lang }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([{ text: t.chat.welcome, sender: "bot" }]);
  }, [lang, t.chat.welcome]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputMsg.trim() || isTyping) return;

    const userText = inputMsg;
    const newMessages = [...messages, { text: userText, sender: "user" }];
    setMessages(newMessages);
    setInputMsg("");
    setIsTyping(true);

    const apiKey = ""; // API key populated by environment
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

    const systemPrompt = `You are the official AI Assistant for PetraX Trading Department. 
    YOUR SOLE PURPOSE is to answer questions regarding PetraX's industrial supplies, smart maintenance tools, and operational solutions for the Saudi market based ONLY on the following context.
    
    CRITICAL INSTRUCTION: If a user asks about anything unrelated to industrial supplies, predictive maintenance, safety equipment, or Oil & Gas components, you MUST politely decline to answer and steer them back to our industrial services.

    Context about PetraX Trading Department: 
    We drive industrial transformation across Saudi Arabia. We are a strategic partner for Advanced Technical Consumables and Intelligent Maintenance Solutions.
    Core Areas:
    1. Predictive Maintenance (PdM): Portable vibration pens, data loggers, advanced asset health monitoring.
    2. Inspection & NDT: Ultrasonic thickness gauges, industrial borescopes.
    3. Precision Fastening: Digital torque wrenches, API standard studs & nuts.
    4. Safety & Environment: Portable gas detectors, explosion-proof gear.
    5. Oil & Gas Specific: API 6A Wellhead Gate Valves, sealants.
    Industries Served: Oil & Gas, Petrochemical, Manufacturing, Power Generation, Mining, Water Treatment.
    Vision: Aligned with Saudi Vision 2030 to maximize asset uptime and operational efficiency.

    Tone: Professional, premium, concise, helpful.
    Language: ALWAYS answer in the language the user speaks (English or Arabic). Be very concise (1-3 short sentences max).`;

    let apiMessages = newMessages.map((m) => ({
      role: m.sender === "bot" ? "model" : "user",
      parts: [{ text: m.text }],
    }));

    if (apiMessages.length > 0 && apiMessages[0].role === "model") {
      apiMessages.shift();
    }

    const payload = {
      contents: apiMessages,
      systemInstruction: { parts: [{ text: systemPrompt }] },
    };

    const fetchWithBackoff = async (retries = 5, delay = 1000) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("API Error");
        return await response.json();
      } catch (error) {
        if (retries > 0) {
          await new Promise((res) => setTimeout(res, delay));
          return fetchWithBackoff(retries - 1, delay * 2);
        }
        throw error;
      }
    };

    try {
      if (!apiKey) {
        // Mock response if no API key
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: "API key is missing. This is a mock response.",
              sender: "bot",
            },
          ]);
          setIsTyping(false);
        }, 1000);
        return;
      }
      const result = await fetchWithBackoff();
      const botReply = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (botReply) {
        setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
      } else {
        setMessages((prev) => [...prev, { text: t.chat.error, sender: "bot" }]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { text: t.chat.error, sender: "bot" }]);
    } finally {
      if (apiKey) setIsTyping(false);
    }
  };

  return (
    <div
      className={`fixed bottom-6 ${lang === "ar" ? "left-6" : "right-6"} z-50 flex flex-col items-end`}
    >
      {/* Chat Window */}
      <div
        className={`bg-white border border-gray-200 rounded-2xl w-[340px] sm:w-96 shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right mb-4 flex flex-col ${chatOpen ? "scale-100 opacity-100 h-[500px]" : "scale-0 opacity-0 h-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-blue-900 to-blue-950 p-4 flex justify-between items-center border-b border-blue-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#111827] rounded-full"></div>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{t.chat.title}</h4>
              <span className="text-xs text-blue-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>{" "}
                {t.chat.online}
              </span>
            </div>
          </div>
          <button
            onClick={() => setChatOpen(false)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="grow overflow-y-auto p-4 flex flex-col gap-4 bg-gray-50 no-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user" ? `bg-blue-600 text-white ${lang === "ar" ? "rounded-tl-none" : "rounded-tr-none"}` : `bg-white border border-gray-200 text-gray-800 ${lang === "ar" ? "rounded-tr-none" : "rounded-tl-none"} shadow-sm`}`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div
                className={`max-w-[80%] p-3 rounded-2xl bg-white text-blue-600 ${lang === "ar" ? "rounded-tr-none" : "rounded-tl-none"} border border-gray-200 shadow-sm flex items-center gap-2 text-xs`}
              >
                <Loader2 className="w-4 h-4 animate-spin" /> {t.chat.typing}
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              disabled={isTyping}
              placeholder={t.chat.placeholder}
              className="grow bg-gray-100 text-gray-800 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
              dir="auto"
            />
            <button
              type="submit"
              disabled={isTyping || !inputMsg.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-4 rounded-lg transition-colors flex items-center justify-center shrink-0"
              aria-label={t.chat.send}
            >
              <Send
                className={`w-5 h-5 ${lang === "ar" ? "rotate-180" : ""}`}
              />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className={`w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-110 hover:bg-blue-500 transition-all duration-300 z-50 ${chatOpen ? "rotate-90 opacity-0 pointer-events-none absolute" : "rotate-0 opacity-100"}`}
      >
        <Bot className="w-8 h-8" />
      </button>
    </div>
  );
}
