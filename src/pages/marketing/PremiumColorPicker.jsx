import React from 'react';

const PremiumColorPicker = ({ t, value, onChange }) => {
  const presets = ['#1A1AFA', '#FF3366', '#00E676', '#FFD54F', '#9C27B0', '#000000', '#FFFFFF'];
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-300">{t.marketing.forms.colorPicker}</label>
      <div className="flex gap-3 items-center flex-wrap">
        {presets.map(c => (
          <button
            key={c} type="button" onClick={() => onChange(c)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${value === c ? 'border-[#1A1AFA] scale-110' : 'border-transparent'}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-2 rounded-lg mt-2 max-w-[200px]">
        <input type="color" value={value || '#1A1AFA'} onChange={(e) => onChange(e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0" />
        <input type="text" value={(value || '#1A1AFA').toUpperCase()} onChange={(e) => onChange(e.target.value)} className="bg-transparent text-white font-mono text-sm focus:outline-none uppercase w-full" placeholder="#000000" />
      </div>
    </div>
  );
};

export default PremiumColorPicker;
