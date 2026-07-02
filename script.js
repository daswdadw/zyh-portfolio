const dictionaries = {
  zh: {
    navAbout: "关于",
    navProjects: "项目",
    navExperience: "经历",
    navResearch: "科研",
    navContact: "联系",
    eyebrow: "Computer Science Student / AI & Autonomous Systems",
    heroTitleA: "把算法、系统和",
    heroTitleB: "真实场景连接起来",
    heroText: "我是周允徽，澳门科技大学计算机科学学生，持续聚焦智能驾驶、AI 检索系统、控制算法与工程落地。这个版本是正式可部署的个人网站，支持多风格切换、中英双语和滚动动画展示。",
    viewProjects: "查看项目",
    contactMe: "联系我",
    portraitTitle: "技术型学生开发者",
    portraitText: "控制算法、自动驾驶、检索系统、竞赛实践",
    metricInternships: "段核心实习经历",
    metricPaper: "篇第一作者论文",
    metricAwards: "项竞赛与荣誉",
    heroQuote: "我希望自己不只会写代码，而是能让技术真正跑起来。",
    aboutTitle: "关于我",
    aboutLead: "我更偏向“能落地的技术型选手”：既能做底层实现、算法调试和系统联调，也愿意处理工程细节、迭代实验和结果优化。",
    educationTitle: "教育背景",
    educationBody: "澳门科技大学，计算机科学专业，2023.09 至今。主修课程包括 C 程序设计、C++ 程序设计、数据结构、微积分，核心课程多门 A+。",
    strengthsTitle: "我的优势",
    strength1: "能在控制、AI、系统工程和竞赛实战之间切换语境。",
    strength2: "愿意啃底层细节，也能跟进调试、实验与迭代优化。",
    strength3: "有跨团队协作和高压比赛经验。",
    projectsTitle: "项目作品",
    project1Title: "智能驾驶实车开发链路",
    project1Body: "参与智能网联汽车实车开发，完成多传感器驱动部署、标定、建图定位、感知预测与规划控制验证，完整走通自动驾驶系统关键链路。",
    project2Title: "多模态智能检索系统",
    project2Body: "搭建并优化 ES 多模态向量库，支持多源异构数据向量化存储与跨模态检索，并参与 AI Agent 检索链路优化与 Prompt 模板库重构。",
    project3Title: "无模型自适应控制研究",
    project3Body: "围绕无人车爬坡非线性轨迹跟踪，提出基于 CFDL 的 MFAC 方案，并结合 PPD 在线估计机制与 Lyapunov 稳定性分析验证算法有效性。",
    project4Title: "图书馆管理系统",
    project4Body: "独立完成基础图书馆系统，通过链表维护借阅关系，实现图书查询、插入、删除等功能，体现扎实的数据结构与程序设计基础。",
    experienceTitle: "经历时间线",
    exp1Title: "AI 工程实习生 · 中科闻歌 媒体 AI 事业部",
    exp1Body: "参与构建基于 Elasticsearch 的全链路智能检索系统，负责多模态检索模块工程实现与性能优化，提升召回质量、结果稳定性与输出一致性。",
    exp2Title: "智能网联汽车与智能驾驶 · 浙江大学湖州研究所",
    exp2Body: "围绕传感器驱动、标定、建图定位、感知预测与规划控制完成实车开发实践，积累自动驾驶系统联调与算法工程化经验。",
    exp3Title: "澳门科技大学 · 计算机科学",
    exp3Body: "持续夯实编程、数据结构、数学基础，并在科研、比赛与工程项目中迭代自己的技术方向。",
    researchTitle: "科研与竞赛",
    paperTitle: "第一作者论文",
    paperBody: "《基于无模型自适应控制的无人车爬坡非线性轨迹跟踪研究》（2025）提出基于 CFDL 的无模型自适应控制方案，在无需精确数学模型的情况下实现高精度轨迹跟踪，并验证了稳定性与鲁棒性。",
    awardsTitle: "代表性竞赛",
    award1: "美国大学生数学建模竞赛 S 奖",
    award2: "“长城杯”信息铁人三项初赛三等奖",
    award3: "人工智能 EDGE 级方程式比赛第二名",
    award4: "NewStar CTF 2025 / “春秋杯” 校内赛道优异奖",
    contactTitle: "联系我",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    englishLabel: "英语",
    interestLabel: "兴趣",
    interestValue: "篮球，国家二级运动员",
    footerText: "可直接部署到 GitHub Pages / Vercel 的静态个人网站。"
  },
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navResearch: "Research",
    navContact: "Contact",
    eyebrow: "Computer Science Student / AI & Autonomous Systems",
    heroTitleA: "Connecting algorithms, systems,",
    heroTitleB: "and real-world scenarios",
    heroText: "I am Yunhui Zhou, a Computer Science student at Macau University of Science and Technology, focusing on autonomous driving, AI retrieval systems, control algorithms, and engineering delivery. This deployable portfolio supports multi-style themes, bilingual content, and scroll-based motion.",
    viewProjects: "View Projects",
    contactMe: "Get in Touch",
    portraitTitle: "Hands-on Technical Builder",
    portraitText: "Control algorithms, autonomous driving, retrieval systems, competition practice",
    metricInternships: "Core internships",
    metricPaper: "First-author paper",
    metricAwards: "Awards and contests",
    heroQuote: "I do not just want to write code. I want to make technology actually run.",
    aboutTitle: "About Me",
    aboutLead: "I see myself as an engineering-oriented problem solver who can work on low-level implementation, algorithm tuning, and system integration while staying patient with iteration and details.",
    educationTitle: "Education",
    educationBody: "Macau University of Science and Technology, B.S. in Computer Science, Sep 2023 to present. Major coursework includes C Programming, C++ Programming, Data Structures, and Calculus, with multiple A+ grades.",
    strengthsTitle: "Strengths",
    strength1: "I can move across control, AI, systems engineering, and competition-style problem solving.",
    strength2: "I am comfortable with difficult technical details, debugging, experiments, and iterative optimization.",
    strength3: "I have experience collaborating across teams and performing under pressure.",
    projectsTitle: "Selected Projects",
    project1Title: "Autonomous Driving Vehicle Pipeline",
    project1Body: "Worked on a full self-driving vehicle development workflow covering sensor deployment, calibration, mapping and localization, perception and prediction, plus planning and control validation.",
    project2Title: "Multimodal Intelligent Retrieval System",
    project2Body: "Built and optimized an Elasticsearch-based multimodal vector retrieval pipeline, supporting heterogeneous data storage, cross-modal retrieval, agent workflow improvement, and prompt template refactoring.",
    project3Title: "Model-Free Adaptive Control Research",
    project3Body: "Studied nonlinear trajectory tracking for uphill unmanned vehicles through a CFDL-based MFAC method, with PPD online estimation and Lyapunov-based stability analysis.",
    project4Title: "Library Management System",
    project4Body: "Independently built a simple library system in C using linked lists to model borrowing relationships and support querying, insertion, and deletion workflows.",
    experienceTitle: "Experience Timeline",
    exp1Title: "AI Engineering Intern · Newsdata Media AI Division",
    exp1Body: "Contributed to an Elasticsearch-based intelligent retrieval system, focusing on multimodal retrieval implementation and performance optimization for better recall quality and output consistency.",
    exp2Title: "Intelligent Connected Vehicles and Autonomous Driving · Zhejiang University Huzhou Institute",
    exp2Body: "Participated in real-vehicle autonomous driving development across sensor integration, calibration, localization, perception, prediction, and planning-control workflows.",
    exp3Title: "Macau University of Science and Technology · Computer Science",
    exp3Body: "Building strong foundations in programming, data structures, and mathematics while refining my direction through research, competitions, and practical projects.",
    researchTitle: "Research and Competitions",
    paperTitle: "First-Author Paper",
    paperBody: "My 2025 paper on nonlinear trajectory tracking for uphill unmanned vehicles proposed a CFDL-based model-free adaptive control method that achieves accurate tracking without requiring a precise mathematical model, while validating stability and robustness.",
    awardsTitle: "Selected Awards",
    award1: "S Award, Mathematical Contest in Modeling",
    award2: "Third Prize, Great Wall Cup Information Triathlon Preliminary",
    award3: "Second Place, AI EDGE Formula Competition",
    award4: "Merit Award, NewStar CTF 2025 / Chunqiu Cup Campus Track",
    contactTitle: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    englishLabel: "English",
    interestLabel: "Interests",
    interestValue: "Basketball, National Level-2 Athlete",
    footerText: "A static portfolio ready for GitHub Pages and Vercel deployment."
  }
};

const body = document.body;
const themeButtons = document.querySelectorAll("[data-theme-btn]");
const langButtons = document.querySelectorAll("[data-lang-btn]");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const revealNodes = document.querySelectorAll(".reveal");

function applyLanguage(lang) {
  const dict = dictionaries[lang];
  if (!dict) return;

  body.dataset.lang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.langBtn === lang);
  });
}

function applyTheme(theme) {
  body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.themeBtn === theme);
  });
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.themeBtn));
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langBtn));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.16
});

revealNodes.forEach((node) => observer.observe(node));

applyTheme("editorial");
applyLanguage("zh");
