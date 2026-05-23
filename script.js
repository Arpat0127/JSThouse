const caseData = {
  "growth-factory": {
    label: "Project · Overseas Growth",
    title: "海外获客AI内容工厂",
    summary: "把海外投放素材生产从零散制作，升级成可持续测试和复盘的内容生产系统。",
    story: [
      "原来素材产出慢、测试样本少，投放反馈也很难快速反哺内容生产。",
      "我把调研、脚本、素材、投放和复盘串成闭环，搭成可持续迭代的内容工厂。",
      "结果是日均内容产出提升到15-20条，效率提升200%+，获客成本下降25%+。"
    ],
    flow: ["市场调研", "卖点拆解", "脚本生成", "素材生产", "投放测试", "数据复盘"],
    problem: "传统素材制作周期长、测试样本少，投放反馈无法快速反哺内容生产，导致获客成本难以下降。",
    actions: [
      "设计调研、脚本、图片、视频、投放反馈的内容闭环",
      "搭建AIGC图片/视频/文案工具链，拆分团队生产流程",
      "建立素材标签、测试批次和数据复盘机制",
      "把有效素材经验沉淀成提示词库和SOP"
    ],
    tools: "ChatGPT / Midjourney / Stable Diffusion / Runway / TikTok / Facebook / 独立站数据",
    result: "日均内容产出由5条提升至15-20条，内容效率提升200%+，内容成本降低50%+，海外获客成本下降25%+。",
    talk: "核心价值不只是提升单条素材质量，而是把内容生产、投放测试和数据复盘连成系统，让获客成本可以持续优化。"
  },
  "rag-agent": {
    label: "Project · Knowledge Agent",
    title: "企业知识库与RAG智能体",
    summary: "把分散的产品资料、客服话术和业务FAQ接入知识库，让销售、客服和新人能快速获取标准答案。",
    story: [
      "原来资料散落在文档和聊天记录里，重复问答很多，新员工上手也慢。",
      "我把产品资料、FAQ和客服话术结构化后接入RAG知识库，做成可检索的内部助手。",
      "结果是减少重复沟通和人工查询，核心业务环节人效提升30%+。"
    ],
    flow: ["资料盘点", "知识清洗", "向量入库", "问答测试", "权限规范", "反馈迭代"],
    problem: "企业资料分散在文档、表格和聊天记录里，重复问答多，新员工上手慢，销售客服响应质量不稳定。",
    actions: [
      "梳理产品资料、客服话术、FAQ和业务规范",
      "设计知识分类、更新机制和使用规范",
      "基于LLM + RAG + Agent搭建内部问答助手",
      "收集错误回答和高频问题，持续优化知识库"
    ],
    tools: "Dify / LangChain / LLM / RAG / 企业知识库 / Docker本地部署",
    result: "减少重复查询和人工沟通，智能体上线后核心业务环节整体人效提升30%+。",
    talk: "知识库不是简单上传文档，而是需要知识结构、权限边界、维护机制和业务反馈闭环共同支撑。"
  },
  "aigc-design": {
    label: "Project · AIGC Workflow",
    title: "AIGC设计工作流升级",
    summary: "把AIGC从个人工具尝试，变成团队能稳定复用的视觉提案和交付流程。",
    story: [
      "原来提案和概念设计周期长、重复成本高，团队经常要在节点前赶工。",
      "我把AIGC接入设计流程，补上提示词库、风格测试和AI辅助修图这条链路。",
      "结果是交付周期缩短60%，单项目效率提升2-3倍。"
    ],
    flow: ["风格定义", "提示词库", "LoRA测试", "概念生成", "人工精修", "SOP沉淀"],
    problem: "传统视觉提案周期长、重复设计成本高，节点活动和客户提案需要更快的概念产出能力。",
    actions: [
      "引入Stable Diffusion、Midjourney、Runway等工具",
      "搭建团队提示词库和AI辅助设计SOP",
      "参与LoRA风格测试和概念方案生成",
      "推动传统设计流程向AIGC协同模式转型"
    ],
    tools: "Stable Diffusion / Midjourney / Runway / LoRA / AE / PR / Photoshop",
    result: "视觉交付周期缩短60%，单项目效率提升2-3倍，重复设计成本降低约40%。",
    talk: "AIGC的价值不止是更快出图，而是让设计提案、风格探索和交付流程具备更高的复用性。"
  },
  "sales-copilot": {
    label: "Project · Sales Growth",
    title: "销售AI助手与线索跟进系统",
    summary: "在某 SaaS 行业客户销售团队落地的 AI 助手，把客户信息、产品卖点、跟进记录和话术沉淀成可调用的能力。",
    story: [
      "客户销售跟进依赖个人经验、资料散落在 CRM 和聊天记录里，线索响应平均要 35 分钟，新人 3 个月才能独立跟单。",
      "我把线索、卖点和话术沉淀成 AI 助手，让销售能在客户消息进来后 60 秒内拿到可发的话术草稿。",
      "上线 2 个月后线索响应时间从 35 分钟降到 6 分钟（提速约 6 倍），新人 1 个月内可独立跟进，话术一致性达 90%+。"
    ],
    flow: ["线索录入", "客户画像", "话术推荐", "跟进提醒", "异议处理", "转化复盘"],
    problem: "销售跟进依赖个人经验，客户资料散落，回复慢，话术不统一，管理层很难判断线索质量和跟进状态。",
    actions: [
      "梳理销售漏斗和关键跟进节点",
      "沉淀产品卖点、客户异议和成交话术",
      "设计AI生成跟进话术、邮件、私信和复盘摘要",
      "建立线索标签和转化数据看板"
    ],
    tools: "LLM / CRM数据 / RAG知识库 / 自动化工作流 / 数据看板",
    result: "线索响应速度提速约 6 倍（35 分钟 → 6 分钟），新人独立跟进周期从 3 个月缩短到 1 个月，话术一致性达 90%+，管理层可按线索分级看转化漏斗。",
    talk: "做完这个项目我才意识到，销售 AI 助手的价值不是替代销售，而是把'老销售的经验'沉淀成新人也能马上用的能力。"
  },
  "customer-service": {
    label: "Project · Service Efficiency",
    title: "AI客服质检与知识库联动",
    summary: "在某电商行业客户客服中心落地的 AI 质检与知识库联动系统，把对话、质检、FAQ 和问题归因串成闭环。",
    story: [
      "客户客服中心日均对话 5000+，重复问题占 60% 以上，质检靠人工抽检每天最多覆盖 3%，FAQ 长期没人维护。",
      "我设计了 12 个维度的 AI 自动质检规则（准确性 / 态度 / 解决率 / 合规等），并把质检结果反向更新到 FAQ 库。",
      "运行 3 个月后重复人工咨询下降 35%+，FAQ 覆盖率从 62% 提升至 91%，客服满意度评分上涨 0.4 分。"
    ],
    flow: ["对话采集", "自动质检", "问题归因", "知识更新", "标准回复", "服务复盘"],
    problem: "客服重复答疑多，服务质量难检查，客户问题无法沉淀，知识库长期没人维护。",
    actions: [
      "按业务线梳理高频问题和标准回复",
      "设计客服对话质检维度，如准确性、态度、解决率",
      "把质检发现的问题反向更新FAQ和知识库",
      "形成客服培训和知识维护机制"
    ],
    tools: "LLM / RAG / 客服工单 / 对话摘要 / 质检规则 / 知识库",
    result: "重复人工咨询下降 35%+，FAQ 覆盖率 62% → 91%，质检覆盖率从人工 3% 提升到 AI 100%，客服满意度评分 +0.4 分。",
    talk: "客服质检最大的盲点不是技术，是质检维度的设计 —— 一旦维度对了，AI 自动质检比人工抽检更稳定、更可解释。"
  },
  "meeting-bi": {
    label: "Project · Management Efficiency",
    title: "会议纪要与经营数据AI助手",
    summary: "在某中型企业管理团队落地的 AI 助手，把会议、日报、周报和经营指标串成可追踪的管理闭环。",
    story: [
      "客户管理团队每周开 12+ 场会，会议纪要靠人工整理平均 30 分钟，60% 的会议结论开完会就没人追踪了。",
      "我设计了会议纪要自动抽取 + 任务-责任人-deadline 三段式输出，并把任务接到周报与经营看板。",
      "上线后会议纪要从手动 30+ 分钟降到自动 30 秒，任务追踪闭环率从 65% 提升至 95%+，周报准备时间下降 50%+。"
    ],
    flow: ["会议记录", "任务抽取", "周报汇总", "指标分析", "风险提醒", "管理复盘"],
    problem: "管理信息分散，会议结论没人追踪，日报周报只是在汇报动作，经营数据和实际任务脱节。",
    actions: [
      "设计会议纪要和任务抽取模板",
      "把部门周报、项目进度和关键指标统一汇总",
      "用AI生成风险提醒、异常分析和下周重点",
      "建立管理层复盘看板"
    ],
    tools: "LLM / 文档解析 / 表格数据 / BI看板 / 自动摘要 / 任务管理",
    result: "会议纪要时长 30 分钟 → 30 秒，任务追踪闭环率 65% → 95%+，周报准备时间下降 50%+，管理层例会信息密度显著提升。",
    talk: "做完这个项目我才理解：管理工具不是文档工具，是责任追踪工具 —— AI 在这里的价值是降低'追责的尴尬'。"
  },
  "private-deploy": {
    label: "Project · Private Deployment",
    title: "企业私有化AI工具与权限体系",
    summary: "在某金融行业客户落地的私有化 AI 方案，从硬件评估、本地部署到权限分层与使用规范完整交付。",
    story: [
      "客户业务数据高度敏感，外部 SaaS 类 AI 工具一概不允许使用，员工只能私下'野生'用，没有统一边界。",
      "我先和法务 / 信息安全部门对齐数据分级，再用 Docker + GPU 本地化部署 Dify + 本地模型，最后做部门级权限分层。",
      "全流程上线后 AI 部署周期从行业平均 3 周缩短到 5 天，6 个部门 / 200+ 员工接入，数据合规审计 100% 通过。"
    ],
    flow: ["安全评估", "本地部署", "权限分层", "知识隔离", "使用规范", "审计复盘"],
    problem: "企业想用AI但担心数据外泄，员工各用各的工具，资料上传不可控，缺少统一权限和规范。",
    actions: [
      "评估哪些数据可以接入AI，哪些必须隔离",
      "设计部门空间、知识库权限和使用边界",
      "用Docker/GPU本地部署支持私有化需求",
      "制定员工AI使用规范和培训材料"
    ],
    tools: "Docker / GPU本地部署 / 私有知识库 / 权限管理 / Dify / 本地模型",
    result: "部署周期 3 周 → 5 天（缩短约 70%），6 个部门 / 200+ 员工统一接入，数据合规审计 100% 通过，零外发记录。",
    talk: "私有化部署的难点不是技术，是和法务 / 信息安全部门'对齐边界' —— 把'哪些数据能进 AI'这件事讲清楚，比部署本身更重要。"
  }
};

const modal = document.querySelector("#case-modal");
const modalTitle = document.querySelector("#case-modal-title");
const modalLabel = document.querySelector("#case-modal-label");
const modalSummary = document.querySelector("#case-modal-summary");
const modalStory = document.querySelector("#case-modal-story");
const modalFlow = document.querySelector("#case-modal-flow");
const modalProblem = document.querySelector("#case-modal-problem");
const modalActions = document.querySelector("#case-modal-actions");
const modalTools = document.querySelector("#case-modal-tools");
const modalResult = document.querySelector("#case-modal-result");
const modalTalk = document.querySelector("#case-modal-talk");
const modalCloseTargets = document.querySelectorAll("[data-modal-close]");
let activeCaseTrigger = null;

const openCaseModal = (caseKey, trigger) => {
  const data = caseData[caseKey];
  if (!data || !modal) return;

  activeCaseTrigger = trigger;
  modalLabel.textContent = data.label;
  modalTitle.textContent = data.title;
  modalSummary.textContent = data.summary;
  modalStory.innerHTML = data.story
    .map((item, index) => `<span><strong>${index === 0 ? "痛点" : index === 1 ? "动作" : "结果"}：</strong>${item}</span>`)
    .join("");
  modalProblem.textContent = data.problem;
  modalTools.textContent = data.tools;
  modalResult.textContent = data.result;
  modalTalk.textContent = data.talk;
  modalFlow.innerHTML = data.flow.map((item) => `<span>${item}</span>`).join("");
  modalActions.innerHTML = data.actions.map((item) => `<li>${item}</li>`).join("");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();
};

const closeCaseModal = () => {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeCaseTrigger?.focus();
  activeCaseTrigger = null;
};

document.querySelectorAll(".case-open").forEach((card) => {
  card.addEventListener("click", () => openCaseModal(card.dataset.case, card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCaseModal(card.dataset.case, card);
    }
  });
});

modalCloseTargets.forEach((target) => {
  target.addEventListener("click", closeCaseModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeCaseModal();
  }
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.body.classList.add("js-ready");

/* ---------- Reveal animations ---------- */
const revealTargets = document.querySelectorAll(
  ".impact-intro, .statement-section p, .section-title, .fit-grid article, .case-showcase, .case-tile, .capability-list > div, .cert-card, .narrative-section > *, .contact-section > *, .timeline li, .path-tagline, .case-group-title, .whyme-card, .lesson-card, .flow-step, .flow-result, .pov-card, .tool-card, .proof-card, .commitment-card"
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 80}ms`);
});

if (!prefersReducedMotion) {
  const revealIfInView = (element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      element.classList.add("is-visible");
      return true;
    }
    return false;
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((element) => {
    if (!revealIfInView(element)) {
      revealObserver.observe(element);
    }
  });

  window.setTimeout(() => {
    revealTargets.forEach((element) => {
      if (!element.classList.contains("is-visible") && revealIfInView(element)) {
        revealObserver.unobserve(element);
      }
    });
  }, 120);

  const checkReveals = () => {
    revealTargets.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        revealIfInView(element);
      }
    });
  };

  window.addEventListener("scroll", checkReveals, { passive: true });
  window.addEventListener("resize", checkReveals, { passive: true });
  window.setTimeout(checkReveals, 600);
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

/* ---------- Metric count-up (hero + impact) ---------- */
const metricValues = document.querySelectorAll(".metrics strong, .hero-metrics strong");

const parseMetric = (text) => {
  const number = Number.parseFloat(text.replace(/[^\d.]/g, ""));
  const suffix = text.replace(/[\d.]/g, "");
  return { number, suffix };
};

const animateMetric = (element) => {
  const original = element.textContent.trim();
  const { number, suffix } = parseMetric(original);
  if (!Number.isFinite(number)) return;

  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(number * eased);
    element.textContent = `${value}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = original;
    }
  };

  requestAnimationFrame(tick);
};

if (!prefersReducedMotion) {
  const metricObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateMetric(entry.target);
          metricObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 }
  );

  metricValues.forEach((element) => metricObserver.observe(element));
}

/* ---------- Header theme switch on scroll ---------- */
const header = document.querySelector(".site-header");
const heroDark = document.querySelector(".hero-dark");

if (header && heroDark) {
  const updateHeaderTheme = () => {
    const heroBottom = heroDark.getBoundingClientRect().bottom;
    if (heroBottom < 60) {
      header.classList.add("is-light");
    } else {
      header.classList.remove("is-light");
    }
  };
  updateHeaderTheme();
  window.addEventListener("scroll", updateHeaderTheme, { passive: true });
  window.addEventListener("resize", updateHeaderTheme, { passive: true });
}

/* ---------- Mobile nav drawer ---------- */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.querySelector(".nav-overlay");

if (navToggle && navLinks) {
  const closeNav = () => {
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "打开菜单");
  };

  const openNav = () => {
    document.body.classList.add("nav-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "关闭菜单");
  };

  navToggle.addEventListener("click", () => {
    if (document.body.classList.contains("nav-open")) {
      closeNav();
    } else {
      openNav();
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  if (navOverlay) {
    navOverlay.addEventListener("click", closeNav);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880 && document.body.classList.contains("nav-open")) {
      closeNav();
    }
  });
}

/* ---------- Tilt cards ---------- */
const tiltCards = document.querySelectorAll(
  ".fit-grid article, .case-tile, .case-stats div, .cert-card, .contact-card, .timeline li, .lesson-card, .pov-card, .whyme-card, .flow-step"
);

if (!prefersReducedMotion) {
  tiltCards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 6).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

/* ---------- Hero particle network (full-screen background) ---------- */
const createHeroNetwork = () => {
  if (!heroDark || prefersReducedMotion) return;

  const canvas = heroDark.querySelector(".hero-scene-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const particles = [];
  const rings = [];
  const particleCount = 88;
  let width = 0;
  let height = 0;
  let animationFrame;
  let pointerX = 0;
  let pointerY = 0;

  const resize = () => {
    const rect = heroDark.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  for (let index = 0; index < particleCount; index += 1) {
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * 0.46 + 0.08,
      orbit: Math.random() * 0.85 + 0.2,
      speed: (Math.random() * 0.32 + 0.07) * (Math.random() > 0.5 ? 1 : -1),
      y: Math.random() * 0.72 + 0.12,
      size: Math.random() * 2.0 + 0.8,
      glow: Math.random() * 0.45 + 0.3,
    });
  }

  for (let index = 0; index < 5; index += 1) {
    rings.push({
      radius: 0.14 + index * 0.08,
      speed: 0.11 + index * 0.022,
      offset: Math.random() * Math.PI * 2,
    });
  }

  const project = (particle, time) => {
    const centerX = width * (0.5 + pointerX * 0.04);
    const centerY = height * (0.5 + pointerY * 0.035);
    const angle = particle.angle + time * particle.speed;
    const depth = Math.sin(angle) * 0.5 + 0.5;
    const perspective = 0.55 + depth * 0.55;
    const x = centerX + Math.cos(angle) * width * particle.radius * particle.orbit;
    const y = centerY + (particle.y - 0.5) * height * 0.7 * perspective;
    return { x, y, depth, perspective };
  };

  const drawCore = (time) => {
    const centerX = width * (0.5 + pointerX * 0.04);
    const centerY = height * (0.5 + pointerY * 0.035);

    rings.forEach((ring, index) => {
      context.save();
      context.translate(centerX, centerY);
      context.rotate(time * ring.speed + ring.offset);
      context.scale(1, 0.35 + index * 0.03);
      context.strokeStyle = `rgba(0, 210, 255, ${0.28 - index * 0.035})`;
      context.lineWidth = 1.2;
      context.beginPath();
      context.ellipse(0, 0, width * ring.radius, width * ring.radius, 0, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    });
  };

  const draw = (now = 0) => {
    const time = now * 0.001;
    context.clearRect(0, 0, width, height);
    drawCore(time);

    const points = particles.map((particle) => ({
      particle,
      ...project(particle, time),
    }));

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        const a = points[i];
        const b = points[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);

        if (distance < width * 0.12) {
          context.strokeStyle = `rgba(0, 210, 255, ${0.16 * (1 - distance / (width * 0.12))})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
    }

    points
      .sort((a, b) => a.depth - b.depth)
      .forEach(({ particle, x, y, perspective, depth }) => {
        const glowSize = 14 + depth * 22;
        const glow = context.createRadialGradient(x, y, 0, x, y, glowSize);
        glow.addColorStop(0, `rgba(0, 210, 255, ${particle.glow})`);
        glow.addColorStop(1, "rgba(0, 210, 255, 0)");
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, glowSize, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = `rgba(255, 255, 255, ${0.5 + depth * 0.4})`;
        context.beginPath();
        context.arc(x, y, particle.size * perspective, 0, Math.PI * 2);
        context.fill();
      });

    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  draw();

  heroDark.addEventListener("pointermove", (event) => {
    const rect = heroDark.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  heroDark.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
  });

  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else {
      draw();
    }
  });
};

createHeroNetwork();

/* ---------- Avatar orbit (LLM · RAG · Agent · AIGC) ---------- */
const createOrbit = () => {
  const orbit = document.querySelector("#hero-orbit");
  if (!orbit || prefersReducedMotion) return;

  const chips = Array.from(orbit.querySelectorAll(".orbit-chip"));
  const count = chips.length;
  if (count === 0) return;

  const tiltY = 0.35;
  const periodMs = 18000;
  let radiusX = 130;
  let radiusY = 130 * tiltY;
  let frame;

  const measure = () => {
    const rect = orbit.getBoundingClientRect();
    radiusX = Math.min(rect.width, rect.height * 1.6) * 0.5 - 8;
    radiusY = radiusX * tiltY + Math.min(rect.height, 220) * 0.18;
  };

  const tick = (now) => {
    const t = (now % periodMs) / periodMs;
    chips.forEach((chip, i) => {
      const angle = 2 * Math.PI * (t + i / count);
      const x = Math.cos(angle) * radiusX;
      const y = Math.sin(angle) * radiusY;
      const depth = (Math.sin(angle) + 1) / 2;
      const scale = 0.78 + depth * 0.32;
      chip.style.transform = `translate(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px)) scale(${scale.toFixed(3)})`;
      chip.style.zIndex = depth > 0.5 ? 3 : 0;
      chip.style.opacity = (0.55 + depth * 0.45).toFixed(2);
    });
    frame = requestAnimationFrame(tick);
  };

  measure();
  frame = requestAnimationFrame(tick);

  window.addEventListener("resize", measure, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
    } else {
      frame = requestAnimationFrame(tick);
    }
  });
};

createOrbit();

/* ---------- Typewriter role rotation ---------- */
const runTypewriter = (target, words, options = {}) => {
  if (!target || !words || !words.length) return;

  const {
    typeDelay = 90,
    eraseDelay = 50,
    holdDelay = 1600,
    cyclePause = 500,
    startDelay = 800,
  } = options;

  if (prefersReducedMotion) {
    target.textContent = words[words.length - 1];
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let typing = true;
  target.textContent = "";

  const step = () => {
    const current = words[wordIndex];

    if (typing) {
      charIndex += 1;
      target.textContent = current.slice(0, charIndex);
      if (charIndex >= current.length) {
        typing = false;
        setTimeout(step, holdDelay);
        return;
      }
      setTimeout(step, typeDelay);
    } else {
      charIndex -= 1;
      target.textContent = current.slice(0, charIndex);
      if (charIndex <= 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(step, cyclePause);
        return;
      }
      setTimeout(step, eraseDelay);
    }
  };

  setTimeout(step, startDelay);
};

const createTypewriter = () => {
  const roleTarget = document.querySelector("#typed-role");
  runTypewriter(
    roleTarget,
    ["前端工程师", "AIGC 设计师", "AI 落地负责人", "AI 产品经理"],
    { startDelay: 800 }
  );

  const cities = ["北京", "天津"];
  document.querySelectorAll(".typed-city").forEach((node) => {
    runTypewriter(node, cities, {
      typeDelay: 110,
      eraseDelay: 70,
      holdDelay: 2200,
      cyclePause: 400,
      startDelay: 1400,
    });
  });
};

createTypewriter();

/* ---------- Count-up numbers ---------- */
const countUpTargets = document.querySelectorAll(".count-up");

const animateCountUp = (element) => {
  const target = parseFloat(element.dataset.target);
  const suffix = element.dataset.suffix || "";
  if (!Number.isFinite(target)) return;

  if (prefersReducedMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const duration = 1400;
  const startTime = performance.now();
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const step = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);
    const current = Math.round(target * eased);
    element.textContent = `${current}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  };

  element.textContent = `0${suffix}`;
  requestAnimationFrame(step);
};

if (countUpTargets.length) {
  if ("IntersectionObserver" in window) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCountUp(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    countUpTargets.forEach((el) => countObserver.observe(el));
  } else {
    countUpTargets.forEach((el) => animateCountUp(el));
  }
}

/* ---------- Proof lightbox ---------- */
const proofLightbox = document.getElementById("proof-lightbox");
const proofLightboxImage = document.getElementById("proof-lightbox-image");
const proofLightboxCaption = document.getElementById("proof-lightbox-caption");
const proofLightboxClose = proofLightbox && proofLightbox.querySelector(".proof-lightbox-close");
const proofCards = document.querySelectorAll(".proof-card");

const openProofLightbox = (card) => {
  if (!proofLightbox || !proofLightboxImage) return;
  const img = card.querySelector("img");
  const title = card.querySelector("h3");
  const stack = card.querySelector(".proof-stack");
  if (!img) return;
  proofLightboxImage.src = img.src;
  proofLightboxImage.alt = img.alt || "";
  proofLightboxCaption.textContent = title && stack ? `${title.textContent} · ${stack.textContent}` : (title ? title.textContent : "");
  proofLightbox.classList.add("is-open");
  proofLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeProofLightbox = () => {
  if (!proofLightbox) return;
  proofLightbox.classList.remove("is-open");
  proofLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

proofCards.forEach((card) => {
  card.addEventListener("click", () => openProofLightbox(card));
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProofLightbox(card);
    }
  });
});

if (proofLightboxClose) {
  proofLightboxClose.addEventListener("click", closeProofLightbox);
}

if (proofLightbox) {
  proofLightbox.addEventListener("click", (event) => {
    if (event.target === proofLightbox) closeProofLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && proofLightbox && proofLightbox.classList.contains("is-open")) {
    closeProofLightbox();
  }
});
