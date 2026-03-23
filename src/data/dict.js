import { 
  Palette, Sparkles, TrendingUp, Code, Smartphone, BarChart3, Target, Zap, Layers 
} from 'lucide-react';

const dict = {
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      about: "About",
      marketing: "Marketing",
      products: "Products",
      industries: "Industries",
      solutions: "Solutions",
      contact: "Contact",
      lang: "عربي",
      servicesDiv: "Services Division",
      getInTouch: "Get in Touch",
    },
    hero: {
      tag: "Pioneering Industrial Excellence",
      title: "Driving Industrial Transformation Across",
      titleHighlight: "Saudi Arabia",
      subtitle:
        "Your Strategic Partner for Advanced Technical Consumables and Intelligent Maintenance Solutions. Empowering Vision 2030.",
      cta1: "Discover Solutions",
      cta2: "Explore Catalog",
    },
    values: [
      { title: "Unrivaled Expertise", desc: "Tailored to Saudi demands" },
      { title: "Premium Quality", desc: "Sourced globally" },
      { title: "Operational Efficiency", desc: "Maximize productivity" },
      { title: "Local Partnership", desc: "Invested in Vision 2030" },
    ],
    dashboard: {
      title: "Live Operations Dashboard",
      subtitle: "Real-time facility metrics",
    },
    about: {
      title: "Forging the Future of Saudi Industry",
      subtitle:
        "Our Legacy of Excellence, Visionary Leadership, and Dedication to the Kingdom's Industrial Advancement.",
      p1: "PetraX Trading Department is intrinsically linked with the industrial evolution of Saudi Arabia. Established with a profound understanding of the Kingdom's strategic economic objectives, we deliver solutions that are technically superior and culturally resonant.",
      p2: "We believe true partnership involves a shared vision for progress. PetraX is more than a supplier; we are a strategic enabler empowering clients to optimize operations and achieve sustainable advantages.",
      visionTitle: "Vision",
      visionDesc:
        "To be the preeminent provider of industrial solutions in Saudi Arabia.",
      missionTitle: "Mission",
      missionDesc:
        "Empower enterprises by maximizing asset uptime across critical sectors.",
    },
    products: {
      title: "Precision Engineered Solutions",
      subtitle:
        "A Comprehensive Catalog of High-Performance Technical Consumables and Smart Tools.",
      items: [
        {
          title: "Inspection & NDT",
          desc: "Advanced tools for non-destructive testing and thorough asset examination.",
        },
        {
          title: "Predictive Maintenance",
          desc: "Cutting-edge devices to anticipate failures and optimize schedules.",
        },
        {
          title: "Safety & Environmental",
          desc: "Critical equipment to ensure personnel safety and regulatory compliance.",
        },
        {
          title: "Precision Fastening",
          desc: "High-accuracy tools and components for secure and reliable connections.",
        },
        {
          title: "Oil & Gas Specific",
          desc: "Specialized API-certified products for the demanding energy sector.",
        },
        {
          title: "Industrial Monitoring",
          desc: "Devices for energy efficiency and complex process control.",
        },
      ],
      reqSpecs: "Request Specs",
    },
    industries: {
      title: "Empowering Economic Pillars",
      subtitle:
        "Tailored Industrial Solutions Driving Growth Across the Kingdom's Core Sectors.",
      items: [
        "Oil & Gas",
        "Petrochemical",
        "Manufacturing",
        "Power Gen",
        "Mining",
        "Water Treatment",
      ],
    },
    solutions: {
      title: "Integrated Solutions",
      subtitle:
        "Optimizing Performance, Enhancing Safety, and Ensuring Reliability.",
      items: [
        {
          title: "Predictive Maintenance (PdM)",
          desc: "Minimizing unplanned downtime and extending equipment lifespan through advanced asset health monitoring and data-driven insights.",
        },
        {
          title: "Asset Integrity Management",
          desc: "Ensuring fitness for purpose throughout the asset lifecycle, preventing catastrophic failures and ensuring strict regulatory compliance.",
        },
        {
          title: "Operational Safety Compliance",
          desc: "Protecting personnel, preventing accidents, and adhering to environmental regulations in the most hazardous industrial environments.",
        },
      ],
    },
    contact: {
      title: "Connect with PetraX",
      subtitle:
        "Your gateway to industrial excellence. We're ready to provide expert support.",
      hq: "Headquarters",
      hqDesc: "King Abdullah Financial District, Riyadh, Saudi Arabia",
      phone: "Phone",
      email: "Email",
      formTitle: "Send Us a Message",
      labels: {
        name: "Full Name",
        company: "Company Name",
        email: "Email Address",
        dept: "Department",
        msg: "Message",
      },
      placeholders: {
        name: "John Doe",
        company: "Industrial Corp",
        email: "contact@example.com",
        msg: "How can we help optimize your operations?",
      },
      submit: "Submit Inquiry",
      depts: [
        "Trading / Supply",
        "Services Division",
        "Technical Support",
        "Partnership",
      ],
    },
    footer: {
      desc: "Pioneering Industrial Excellence. Empowering Saudi Arabia's Future through advanced technical solutions.",
      visitDiv: "Visit Services Division",
      privacy: "Privacy",
      terms: "Terms",
      rights: "© 2026 PetraX Trading Department. All rights reserved.",
      vision: "Aligned with Saudi Vision 2030",
    },
    chat: {
      title: "PetraX AI Assistant",
      online: "Online",
      welcome:
        "Hello! I am the PetraX AI Assistant. Ask me anything about our industrial supplies, predictive maintenance tools, or our services for the Saudi market.",
      placeholder: "Type your message...",
      send: "Send",
      error: "Connection error. Please try again.",
      typing: "PetraX AI is thinking...",
    },
    marketing: {
      nav: { about: 'Philosophy', services: 'Capabilities', approach: 'Approach', contact: 'Contact' },
      hero: {
        badge: 'Advanced Marketing Systems',
        title1: 'We Build Systems',
        title2: 'That Scale Empires.',
        subtitle: 'Operating at the intersection of marketing strategy, creative direction, and digital growth to help businesses dominate emerging markets.',
        ctaPrimary: 'Initialize Project',
        ctaSecondary: 'Discover Our Approach'
      },
      about: {
        title: 'Not Just Campaigns. Ecosystems.',
        text1: 'We approach marketing as a complete system rather than isolated campaigns. By deeply understanding customer psychology and buying behavior, we design full customer journeys from first impression to revenue generation.',
        text2: 'Combining advanced visual branding with AI-powered content pipelines, we accelerate creative production and build clear offers that convert attention into real business growth.',
        stats: [
          { label: 'Strategic Focus', value: '100%' },
          { label: 'Growth Mindset', value: '∞' },
          { label: 'Market Reach', value: 'MENA' }
        ]
      },
      services: {
        title: 'Our Capabilities',
        subtitle: 'Select one or multiple capabilities to build your custom marketing infrastructure.',
        items: [
          { id: 'branding', icon: Palette, title: 'Branding & Identity', desc: 'Visual storytelling and art direction systems.', color: 'from-blue-600 to-indigo-600' },
          { id: 'ai_content', icon: Sparkles, title: 'AI Content Creation', desc: 'Cinematic visuals and automated content pipelines.', color: 'from-purple-600 to-pink-600' },
          { id: 'growth', icon: TrendingUp, title: 'Growth Hacking', desc: 'Rapid validation and non-traditional scaling strategies.', color: 'from-emerald-600 to-teal-600' },
          { id: 'web', icon: Code, title: 'Digital Infrastructure', desc: 'High-performance funnels and digital architectures.', color: 'from-orange-600 to-red-600' },
          { id: 'social', icon: Smartphone, title: 'Social Ecosystems', desc: 'Algorithm optimization and audience monetization.', color: 'from-cyan-600 to-blue-600' },
          { id: 'strategy', icon: BarChart3, title: 'Marketing Strategy', desc: 'Full customer journey design and offer creation.', color: 'from-yellow-600 to-orange-600' },
        ]
      },
      approach: {
        title: 'The PetraX Methodology',
        steps: [
          { icon: Target, title: 'Strategic Blueprint', desc: 'We analyze market dynamics and map out the entire customer journey to establish a clear conversion path.' },
          { icon: Palette, title: 'Creative Art Direction', desc: 'We craft high-impact visual identities and cinematic content that elevate brand perception and demand attention.' },
          { icon: Zap, title: 'AI & Tech Integration', desc: 'Utilizing AI tools and robust digital infrastructure to accelerate production and ensure seamless user experiences.' },
          { icon: Layers, title: 'Ecosystem Scaling', desc: 'We deploy growth hacking strategies to multiply revenue streams and build long-term digital assets.' }
        ]
      },
      forms: {
        title: 'Project Initialization',
        subtitle: 'Tell us about your business. Contact details are required; specific project details are optional but recommended.',
        contactDetails: '1. Contact Details (Required)',
        name: 'Full Name',
        email: 'Work Email',
        company: 'Company / Brand Name',
        phone: 'Phone Number',
        serviceSelection: '2. Select Capabilities Needed',
        intakeDetails: '3. Project Intake (Optional)',
        submit: 'Submit Request',
        cancel: 'Cancel',
        colorPicker: 'Brand Color Preference',
        webFeatures: 'Required Digital Features',
        socialPlatforms: 'Target Platforms',
        generalNotes: 'Additional Project Context'
      },
      chat: {
        title: 'PetraX AI Assistant',
        placeholder: 'Ask about our marketing systems...',
        intro: 'Hello. I am the PetraX AI. How can I assist you with your marketing strategy today?'
      }
    }
  },
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      marketing: "التسويق",
      products: "المنتجات",
      industries: "القطاعات",
      solutions: "الحلول",
      contact: "اتصل بنا",
      lang: "English",
      servicesDiv: "قسم الخدمات",
      getInTouch: "تواصل معنا",
    },
    hero: {
      tag: "رواد التميز الصناعي",
      title: "قيادة التحول الصناعي في جميع أنحاء",
      titleHighlight: "المملكة العربية السعودية",
      subtitle:
        "شريكك الاستراتيجي للمواد الاستهلاكية الفنية المتقدمة وحلول الصيانة الذكية. تمكين رؤية 2030.",
      cta1: "اكتشف حلولنا",
      cta2: "تصفح المنتجات",
    },
    values: [
      { title: "خبرة لا تضاهى", desc: "مصممة لتلبية المتطلبات السعودية" },
      { title: "جودة ممتازة", desc: "من أفضل المصادر العالمية" },
      { title: "الكفاءة التشغيلية", desc: "زيادة الإنتاجية للحد الأقصى" },
      { title: "شراكة محلية", desc: "مستثمرون في رؤية 2030" },
    ],
    dashboard: {
      title: "لوحة قياس العمليات المباشرة",
      subtitle: "مقاييس المنشأة في الوقت الفعلي",
    },
    about: {
      title: "صياغة مستقبل الصناعة السعودية",
      subtitle:
        "إرثنا من التميز، والقيادة الحكيمة، والتفاني في التقدم الصناعي للمملكة.",
      p1: "يرتبط قسم التجارة في PetraX ارتباطاً وثيقاً بالتطور الصناعي في المملكة العربية السعودية. لقد تأسسنا بفهم عميق للأهداف الاقتصادية الاستراتيجية للمملكة، ونقدم حلولاً متفوقة تقنياً.",
      p2: "نحن نؤمن بأن الشراكة الحقيقية تنطوي على رؤية مشتركة للتقدم. PetraX هي أكثر من مجرد مورد؛ نحن مُمكّن استراتيجي نُمكّن عملائنا من تحسين العمليات وتحقيق مزايا مستدامة.",
      visionTitle: "رؤيتنا",
      visionDesc:
        "أن نكون المزود الأبرز للحلول الصناعية في المملكة العربية السعودية.",
      missionTitle: "رسالتنا",
      missionDesc:
        "تمكين المؤسسات من خلال زيادة وقت تشغيل الأصول عبر القطاعات الحيوية.",
    },
    products: {
      title: "حلول هندسية دقيقة",
      subtitle:
        "كتالوج شامل للمواد الاستهلاكية الفنية عالية الأداء والأدوات الذكية.",
      items: [
        {
          title: "الفحص والاختبار غير الإتلافي",
          desc: "أدوات متقدمة للاختبار غير الإتلافي وفحص الأصول بدقة.",
        },
        {
          title: "الصيانة التنبؤية",
          desc: "أجهزة متطورة لتوقع الأعطال وتحسين الجداول الزمنية.",
        },
        {
          title: "السلامة والبيئة",
          desc: "معدات بالغة الأهمية لضمان سلامة الموظفين والامتثال التنظيمي.",
        },
        {
          title: "الربط الدقيق",
          desc: "أدوات ومكونات عالية الدقة لعمليات ربط آمنة وموثوقة.",
        },
        {
          title: "معدات النفط والغاز",
          desc: "منتجات معتمدة من API لقطاع الطاقة عالي المتطلبات.",
        },
        {
          title: "المراقبة الصناعية",
          desc: "أجهزة لزيادة كفاءة الطاقة والتحكم في العمليات المعقدة.",
        },
      ],
      reqSpecs: "اطلب المواصفات",
    },
    industries: {
      title: "تمكين الركائز الاقتصادية",
      subtitle:
        "حلول صناعية مخصصة تدفع عجلة النمو عبر القطاعات الأساسية للمملكة.",
      items: [
        "النفط والغاز",
        "البتروكيماويات",
        "التصنيع",
        "توليد الطاقة",
        "التعدين",
        "معالجة المياه",
      ],
    },
    solutions: {
      title: "حلول متكاملة",
      subtitle: "تحسين الأداء، تعزيز السلامة، وضمان الموثوقية.",
      items: [
        {
          title: "الصيانة التنبؤية (PdM)",
          desc: "تقليل فترات التوقف غير المخطط لها وإطالة عمر المعدات من خلال مراقبة صحة الأصول المتقدمة والرؤى المستندة إلى البيانات.",
        },
        {
          title: "إدارة سلامة الأصول",
          desc: "ضمان الملاءمة للغرض طوال دورة حياة الأصل، ومنع الأعطال الكارثية وضمان الامتثال التنظيمي الصارم.",
        },
        {
          title: "الامتثال لسلامة العمليات",
          desc: "حماية الموظفين ومنع الحوادث والالتزام باللوائح البيئية في أكثر البيئات الصناعية خطورة.",
        },
      ],
    },
    contact: {
      title: "تواصل مع PetraX",
      subtitle: "بوابتك للتميز الصناعي. نحن مستعدون لتقديم دعم الخبراء.",
      hq: "المقر الرئيسي",
      hqDesc: "مركز الملك عبدالله المالي، الرياض، السعودية",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      formTitle: "أرسل لنا رسالة",
      labels: {
        name: "الاسم الكامل",
        company: "اسم الشركة",
        email: "البريد الإلكتروني",
        dept: "القسم",
        msg: "الرسالة",
      },
      placeholders: {
        name: "أحمد عبدالله",
        company: "الشركة الصناعية",
        email: "contact@example.com",
        msg: "كيف يمكننا المساعدة في تحسين عملياتك؟",
      },
      submit: "إرسال الطلب",
      depts: ["التجارة / التوريد", "قسم الخدمات", "الدعم الفني", "الشراكات"],
    },
    footer: {
      desc: "رواد التميز الصناعي. تمكين مستقبل المملكة العربية السعودية من خلال الحلول التقنية المتقدمة.",
      visitDiv: "زيارة قسم الخدمات",
      privacy: "الخصوصية",
      terms: "الشروط",
      rights: "© 2026 قسم التجارة PetraX. جميع الحقوق محفوظة.",
      vision: "متوافقون مع رؤية السعودية 2030",
    },
    chat: {
      title: "المساعد الذكي لـ PetraX",
      online: "متصل",
      welcome:
        "مرحباً! أنا المساعد الذكي لـ PetraX. اسألني عن مستلزماتنا الصناعية، أو أدوات الصيانة التنبؤية، أو خدماتنا للسوق السعودي.",
      placeholder: "اكتب رسالتك...",
      send: "إرسال",
      error: "خطأ في الاتصال. حاول مرة اخرى.",
      typing: "يفكر الذكاء الاصطناعي...",
    },
    marketing: {
      nav: { about: 'فلسفتنا', services: 'قدراتنا', approach: 'منهجيتنا', contact: 'تواصل معنا' },
      hero: {
        badge: 'أنظمة تسويق متقدمة',
        title1: 'نبني أنظمة',
        title2: 'توسع إمبراطوريات.',
        subtitle: 'نعمل عند تقاطع استراتيجية التسويق، التوجيه الإبداعي، والنمو الرقمي لمساعدة الشركات على السيطرة في الأسواق الناشئة.',
        ctaPrimary: 'تهيئة المشروع',
        ctaSecondary: 'اكتشف منهجيتنا'
      },
      about: {
        title: 'ليست مجرد حملات. بل أنظمة بيئية.',
        text1: 'نحن نتعامل مع التسويق كنظام متكامل وليس كحملات معزولة. من خلال الفهم العميق لسيكولوجية العميل وسلوك الشراء، نصمم رحلات عملاء كاملة من الانطباع الأول إلى توليد الإيرادات.',
        text2: 'من خلال الجمع بين العلامات التجارية المرئية المتقدمة ومسارات المحتوى المدعومة بالذكاء الاصطناعي، نسرّع الإنتاج الإبداعي ونبني عروضاً واضحة تحول الانتباه إلى نمو حقيقي للأعمال.',
        stats: [
          { label: 'تركيز استراتيجي', value: '100%' },
          { label: 'عقلية النمو', value: '∞' },
          { label: 'الوصول للسوق', value: 'MENA' }
        ]
      },
      services: {
        title: 'قدراتنا',
        subtitle: 'حدد قدرة واحدة أو قدرات متعددة لبناء البنية التحتية التسويقية المخصصة لك.',
        items: [
          { id: 'branding', icon: Palette, title: 'العلامة التجارية والهوية', desc: 'السرد البصري وأنظمة التوجيه الفني.', color: 'from-blue-600 to-indigo-600' },
          { id: 'ai_content', icon: Sparkles, title: 'محتوى الذكاء الاصطناعي', desc: 'مرئيات سينمائية ومسارات محتوى مؤتمتة.', color: 'from-purple-600 to-pink-600' },
          { id: 'growth', icon: TrendingUp, title: 'اختراق النمو', desc: 'تحقق سريع واستراتيجيات توسع غير تقليدية.', color: 'from-emerald-600 to-teal-600' },
          { id: 'web', icon: Code, title: 'البنية التحتية الرقمية', desc: 'مسارات تحويل عالية الأداء وهياكل رقمية.', color: 'from-orange-600 to-red-600' },
          { id: 'social', icon: Smartphone, title: 'الأنظمة البيئية الاجتماعية', desc: 'تحسين الخوارزميات وتحقيق الدخل من الجمهور.', color: 'from-cyan-600 to-blue-600' },
          { id: 'strategy', icon: BarChart3, title: 'استراتيجية التسويق', desc: 'تصميم رحلة العميل الكاملة وبناء العروض.', color: 'from-yellow-600 to-orange-600' },
        ]
      },
      approach: {
        title: 'منهجية PetraX',
        steps: [
          { icon: Target, title: 'المخطط الاستراتيجي', desc: 'نحلل ديناميكيات السوق ونرسم رحلة العميل بأكملها لإنشاء مسار تحويل واضح.' },
          { icon: Palette, title: 'التوجيه الفني الإبداعي', desc: 'نصنع هويات بصرية عالية التأثير ومحتوى سينمائي يرفع من تصور العلامة التجارية ويجذب الانتباه.' },
          { icon: Zap, title: 'دمج الذكاء الاصطناعي والتقنية', desc: 'استخدام أدوات الذكاء الاصطناعي والبنية التحتية الرقمية القوية لتسريع الإنتاج وضمان تجارب مستخدم سلسة.' },
          { icon: Layers, title: 'توسيع النظام البيئي', desc: 'ننشر استراتيجيات اختراق النمو لمضاعفة مصادر الإيرادات وبناء أصول رقمية طويلة الأجل.' }
        ]
      },
      forms: {
        title: 'تهيئة المشروع',
        subtitle: 'أخبرنا عن عملك. تفاصيل الاتصال مطلوبة؛ تفاصيل المشروع المحددة اختيارية ولكن يوصى بها.',
        contactDetails: '1. تفاصيل الاتصال (مطلوب)',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني للعمل',
        company: 'اسم الشركة / العلامة التجارية',
        phone: 'رقم الهاتف',
        serviceSelection: '2. حدد القدرات المطلوبة',
        intakeDetails: '3. تفاصيل المشروع (اختياري)',
        submit: 'إرسال الطلب',
        cancel: 'إلغاء',
        colorPicker: 'تفضيلات ألوان العلامة التجارية',
        webFeatures: 'الميزات الرقمية المطلوبة',
        socialPlatforms: 'المنصات المستهدفة',
        generalNotes: 'سياق إضافي للمشروع'
      },
      chat: {
        title: 'مساعد PetraX الذكي',
        placeholder: 'اسأل عن أنظمة التسويق لدينا...',
        intro: 'مرحباً. أنا مساعد PetraX. كيف يمكنني مساعدتك في استراتيجية التسويق الخاصة بك اليوم؟'
      }
    }
  },
};

export default dict;
