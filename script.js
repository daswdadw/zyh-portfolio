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
    heroSubtext: "这里不只是简历摘要，也是一份关于我如何学习、做项目、参加比赛，以及理解技术与现实世界关系的个人记录。",
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
    strengthsTitle: "我关注的方向",
    strength1: "能在控制、AI、系统工程和竞赛实战之间切换语境。",
    strength2: "愿意啃底层细节，也能跟进调试、实验与迭代优化。",
    strength3: "有跨团队协作和高压比赛经验。",
    projectsTitle: "项目作品",
    projectsIntroTitle: "我做过的事情",
    projectsIntroBody: "这些项目覆盖自动驾驶、AI 检索、控制研究和基础系统开发。它们不只是经历列表，也代表了我对技术问题的兴趣方向和实践方式。",
    projectBackgroundLabel: "项目背景",
    projectRoleLabel: "我的职责",
    projectTechLabel: "关键技术",
    projectResultLabel: "项目结果",
    project1Title: "智能驾驶实车开发链路",
    project1Body: "参与智能网联汽车实车开发，完成多传感器驱动部署、标定、建图定位、感知预测与规划控制验证，完整走通自动驾驶系统关键链路。",
    project1Background: "项目围绕智能网联汽车实车开发展开，目标是在真实车辆平台上完成从环境感知到规划控制的闭环验证，强调系统协同、算法部署与实车联调能力。",
    project1Role: "负责 Canbus、激光雷达、工业相机与 GNSS/IMU 的驱动部署和多传感器标定，并参与 Apollo 平台下定位、感知、预测和控制模块的联调与验证。",
    project1Tech: "重点涉及 RTK / NDT / MSF 定位部署、场景地图构建、多模态感知融合，以及 PID 纵向控制与 LQR 横向控制器调参。",
    project1Result: "完整积累了自动驾驶系统从硬件接入到算法工程化落地的实战经验，深化了对感知、决策、控制闭环与实车调试流程的理解。",
    project2Title: "多模态智能检索系统",
    project2Body: "搭建并优化 ES 多模态向量库，支持多源异构数据向量化存储与跨模态检索，并参与 AI Agent 检索链路优化与 Prompt 模板库重构。",
    project2Background: "项目服务于公司智能内容检索与个性化服务需求，需要面向多源异构数据构建更稳定、更高质量的多模态检索能力。",
    project2Role: "负责多模态检索模块工程实现与性能优化，参与向量库搭建、索引组织、召回链路实验对比，以及 Prompt 模板库重构。",
    project2Tech: "以 Elasticsearch 为核心，结合向量化存储、索引管理、跨模态检索、Agent 检索流程设计和提示词模板沉淀进行整体优化。",
    project2Result: "提升了检索结果准确性、稳定性与可复用性，也让我系统理解了 AI 检索系统在业务场景中的工程组织方式。",
    project3Title: "无模型自适应控制研究",
    project3Body: "围绕无人车爬坡非线性轨迹跟踪，提出基于 CFDL 的 MFAC 方案，并结合 PPD 在线估计机制与 Lyapunov 稳定性分析验证算法有效性。",
    project3Background: "项目聚焦无人车在爬坡等复杂工况下的非线性轨迹跟踪问题，希望在降低模型依赖的前提下提升控制鲁棒性和工程适应性。",
    project3Role: "以第一作者身份完成控制方案设计、稳定性分析、仿真实验搭建、参数整定实验与论文撰写投稿工作。",
    project3Tech: "核心包括 CFDL 动态线性化、MFAC 控制律设计、PPD 在线估计机制、Lyapunov 稳定性证明以及多扰动场景鲁棒性实验。",
    project3Result: "论文已以第一作者身份投稿 IEEE 国际会议或期刊，同时形成了对控制参数、能耗、动态响应和网络扰动鲁棒性的系统认识。",
    project4Title: "图书馆管理系统",
    project4Body: "独立完成基础图书馆系统，通过链表维护借阅关系，实现图书查询、插入、删除等功能，体现扎实的数据结构与程序设计基础。",
    project4Background: "这是一个偏基础能力验证的课程型项目，目标是使用 C 语言和数据结构知识完成一个具备基本业务逻辑的管理系统。",
    project4Role: "独立负责系统设计、数据结构选型、借阅关系建模和核心功能实现，未依赖 AI 辅助完成。",
    project4Tech: "使用链表维护读者与图书之间的关系，实现查询、插入、删除等功能，并关注程序结构清晰度与基础容错处理。",
    project4Result: "这个项目帮助我扎实理解了基础数据结构在真实业务抽象中的使用方式，也构成了后续更复杂工程项目的编程基础。",
    experienceTitle: "经历时间线",
    exp1Title: "AI 工程实习生 · 中科闻歌 媒体 AI 事业部",
    exp1Body: "参与构建基于 Elasticsearch 的全链路智能检索系统，负责多模态检索模块工程实现与性能优化，提升召回质量、结果稳定性与输出一致性。",
    exp2Title: "智能网联汽车与智能驾驶 · 浙江大学湖州研究所",
    exp2Body: "围绕传感器驱动、标定、建图定位、感知预测与规划控制完成实车开发实践，积累自动驾驶系统联调与算法工程化经验。",
    exp3Title: "澳门科技大学 · 计算机科学",
    exp3Body: "持续夯实编程、数据结构、数学基础，并在科研、比赛与工程项目中迭代自己的技术方向。",
    researchTitle: "科研与比赛",
    paperTitle: "第一作者论文",
    paperBody: "《基于无模型自适应控制的无人车爬坡非线性轨迹跟踪研究》（2025）提出基于 CFDL 的无模型自适应控制方案，在无需精确数学模型的情况下实现高精度轨迹跟踪，并验证了稳定性与鲁棒性。",
    awardsTitle: "参加过的比赛",
    award1: "美国大学生数学建模竞赛 S 奖",
    award2: "“长城杯”信息铁人三项初赛三等奖",
    award3: "人工智能 EDGE 级方程式比赛第二名",
    award4: "NewStar CTF 2025 / “春秋杯” 校内赛道优异奖",
    notesTitle: "一些个人侧面",
    note1Title: "我怎么学习",
    note1Body: "我比较喜欢从真实问题里学习技术。很多时候不是先学完再做，而是在做项目、调系统、改参数和复盘问题的过程中，把知识一点点搭起来。",
    note2Title: "我喜欢的技术感觉",
    note2Body: "相比只停留在概念层面，我更喜欢那些“真的能跑起来”的东西，比如实车调试、检索系统联调、控制器验证，以及把模型落到具体场景里。",
    note3Title: "生活里的我",
    note3Body: "除了技术，我也长期坚持篮球训练，是国家二级运动员。竞技运动让我更习惯面对压力、节奏和持续反馈，也影响了我做项目时的状态和耐心。",
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
    heroSubtext: "This site is not only a resume summary, but also a personal record of how I learn, build projects, join competitions, and think about the relationship between technology and the real world.",
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
    strengthsTitle: "What I Care About",
    strength1: "I can move across control, AI, systems engineering, and competition-style problem solving.",
    strength2: "I am comfortable with difficult technical details, debugging, experiments, and iterative optimization.",
    strength3: "I have experience collaborating across teams and performing under pressure.",
    projectsTitle: "Selected Projects",
    projectsIntroTitle: "Things I Have Worked On",
    projectsIntroBody: "These projects span autonomous driving, AI retrieval, control research, and foundational system building. Together they reflect both my interests and the way I approach technical work.",
    projectBackgroundLabel: "Background",
    projectRoleLabel: "Responsibilities",
    projectTechLabel: "Core Techniques",
    projectResultLabel: "Outcome",
    project1Title: "Autonomous Driving Vehicle Pipeline",
    project1Body: "Worked on a full self-driving vehicle development workflow covering sensor deployment, calibration, mapping and localization, perception and prediction, plus planning and control validation.",
    project1Background: "This project focused on real-vehicle autonomous driving development, with the goal of validating a full loop from perception to planning and control on a physical vehicle platform.",
    project1Role: "I worked on sensor driver deployment and multi-sensor calibration for Canbus, LiDAR, industrial cameras, and GNSS/IMU, while also participating in Apollo-based localization, perception, prediction, and control integration.",
    project1Tech: "Key work included RTK / NDT / MSF localization deployment, scene map building, multimodal perception fusion, and PID longitudinal plus LQR lateral controller tuning.",
    project1Result: "This experience gave me end-to-end exposure to how autonomous driving systems move from hardware integration to algorithm deployment and real-vehicle validation.",
    project2Title: "Multimodal Intelligent Retrieval System",
    project2Body: "Built and optimized an Elasticsearch-based multimodal vector retrieval pipeline, supporting heterogeneous data storage, cross-modal retrieval, agent workflow improvement, and prompt template refactoring.",
    project2Background: "The project supported business needs around intelligent content retrieval and personalized services, requiring a more stable and higher-quality multimodal retrieval pipeline.",
    project2Role: "I focused on the engineering implementation and optimization of the multimodal retrieval module, including vector store setup, indexing strategy, recall experiments, and prompt template refactoring.",
    project2Tech: "The solution centered on Elasticsearch with vectorized storage, index management, cross-modal retrieval, agent workflow tuning, and reusable prompt template design.",
    project2Result: "It improved retrieval accuracy, stability, and reusability while helping me better understand how AI retrieval systems are engineered for real business scenarios.",
    project3Title: "Model-Free Adaptive Control Research",
    project3Body: "Studied nonlinear trajectory tracking for uphill unmanned vehicles through a CFDL-based MFAC method, with PPD online estimation and Lyapunov-based stability analysis.",
    project3Background: "This research addressed nonlinear trajectory tracking for uphill unmanned vehicles, aiming to improve robustness and deployment feasibility while reducing dependence on precise models.",
    project3Role: "As first author, I designed the control scheme, carried out stability analysis, built simulation experiments, tuned parameters, and prepared the paper submission.",
    project3Tech: "Core methods included CFDL-based dynamic linearization, MFAC controller design, online PPD estimation, Lyapunov-based proof, and robustness testing under multiple disturbance scenarios.",
    project3Result: "The work was submitted to an IEEE conference or journal and gave me a systematic understanding of parameter tuning, energy-performance tradeoffs, and robustness under network disturbances.",
    project4Title: "Library Management System",
    project4Body: "Independently built a simple library system in C using linked lists to model borrowing relationships and support querying, insertion, and deletion workflows.",
    project4Background: "This was a foundational course project designed to verify programming and data-structure skills through a small but complete management system.",
    project4Role: "I independently handled system design, data-structure choices, borrowing relationship modeling, and implementation without AI assistance.",
    project4Tech: "The system used linked lists to manage relationships between readers and books while implementing query, insertion, and deletion workflows with attention to code structure.",
    project4Result: "It strengthened my understanding of how core data structures map to real business abstractions and laid a solid programming foundation for later projects.",
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
    awardsTitle: "Competitions I Joined",
    award1: "S Award, Mathematical Contest in Modeling",
    award2: "Third Prize, Great Wall Cup Information Triathlon Preliminary",
    award3: "Second Place, AI EDGE Formula Competition",
    award4: "Merit Award, NewStar CTF 2025 / Chunqiu Cup Campus Track",
    notesTitle: "A Few Personal Notes",
    note1Title: "How I Learn",
    note1Body: "I like learning through real problems. Instead of waiting until I know everything, I usually build understanding while making projects, tuning systems, debugging issues, and reflecting on results.",
    note2Title: "What Kind of Tech I Enjoy",
    note2Body: "I am especially drawn to technology that can actually run in the real world, such as real-vehicle debugging, retrieval system integration, controller validation, and taking models into concrete scenarios.",
    note3Title: "Life Outside Projects",
    note3Body: "Beyond technology, I have trained in basketball for a long time and earned National Level-2 Athlete certification. Sports shaped how I deal with pressure, rhythm, persistence, and feedback.",
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
