const caseData = {
  "growth-factory": {
    label: "Project · Overseas Growth",
    title: "海外获客AI内容工厂",
    summary: "把海外投放素材生产从零散制作，升级成可持续测试和复盘的内容生产系统。",
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
    label: "Solution · Sales Growth",
    title: "销售AI助手与线索跟进系统",
    summary: "老板最关心的是线索转化。这个方案把客户信息、产品卖点、跟进记录和销售话术接入AI助手。",
    flow: ["线索录入", "客户画像", "话术推荐", "跟进提醒", "异议处理", "转化复盘"],
    problem: "销售跟进依赖个人经验，客户资料散落，回复慢，话术不统一，管理层很难判断线索质量和跟进状态。",
    actions: [
      "梳理销售漏斗和关键跟进节点",
      "沉淀产品卖点、客户异议和成交话术",
      "设计AI生成跟进话术、邮件、私信和复盘摘要",
      "建立线索标签和转化数据看板"
    ],
    tools: "LLM / CRM数据 / RAG知识库 / 自动化工作流 / 数据看板",
    result: "适合用来提升销售响应速度、统一跟进质量、降低新人培训成本，并辅助管理层判断线索优先级。",
    talk: "该方案适合从线索质量、销售跟进效率和话术一致性三个角度切入，帮助企业把AI能力接入销售转化链路。"
  },
  "customer-service": {
    label: "Solution · Service Efficiency",
    title: "AI客服质检与知识库联动",
    summary: "把客服问答、质检、FAQ维护和客户问题归因连起来，适合客服量大、重复问题多的企业。",
    flow: ["对话采集", "自动质检", "问题归因", "知识更新", "标准回复", "服务复盘"],
    problem: "客服重复答疑多，服务质量难检查，客户问题无法沉淀，知识库长期没人维护。",
    actions: [
      "按业务线梳理高频问题和标准回复",
      "设计客服对话质检维度，如准确性、态度、解决率",
      "把质检发现的问题反向更新FAQ和知识库",
      "形成客服培训和知识维护机制"
    ],
    tools: "LLM / RAG / 客服工单 / 对话摘要 / 质检规则 / 知识库",
    result: "适合降低重复人工成本，提高客服响应一致性，并让客户问题成为产品和运营改进依据。",
    talk: "该方案直接对应降本、提效和服务质量，适合从客服重复劳动、高频问题沉淀和质检标准化切入。"
  },
  "meeting-bi": {
    label: "Solution · Management Efficiency",
    title: "会议纪要与经营数据AI助手",
    summary: "把会议、日报、周报和经营指标接入AI分析，帮助管理层快速看到问题、进展和责任人。",
    flow: ["会议记录", "任务抽取", "周报汇总", "指标分析", "风险提醒", "管理复盘"],
    problem: "管理信息分散，会议结论没人追踪，日报周报只是在汇报动作，经营数据和实际任务脱节。",
    actions: [
      "设计会议纪要和任务抽取模板",
      "把部门周报、项目进度和关键指标统一汇总",
      "用AI生成风险提醒、异常分析和下周重点",
      "建立管理层复盘看板"
    ],
    tools: "LLM / 文档解析 / 表格数据 / BI看板 / 自动摘要 / 任务管理",
    result: "适合提升管理层决策效率，减少信息汇总成本，让会议结论变成可追踪任务。",
    talk: "该方案的重点不是会议纪要工具，而是让会议结论、任务责任人和经营指标形成可追踪闭环。"
  },
  "private-deploy": {
    label: "Solution · Private Deployment",
    title: "企业私有化AI工具与权限体系",
    summary: "面向有数据安全顾虑的企业，设计本地化部署、知识库权限和部门级使用规范。",
    flow: ["安全评估", "本地部署", "权限分层", "知识隔离", "使用规范", "审计复盘"],
    problem: "企业想用AI但担心数据外泄，员工各用各的工具，资料上传不可控，缺少统一权限和规范。",
    actions: [
      "评估哪些数据可以接入AI，哪些必须隔离",
      "设计部门空间、知识库权限和使用边界",
      "用Docker/GPU本地部署支持私有化需求",
      "制定员工AI使用规范和培训材料"
    ],
    tools: "Docker / GPU本地部署 / 私有知识库 / 权限管理 / Dify / 本地模型",
    result: "适合降低企业使用AI的安全顾虑，让AI从个人野生使用变成组织可控能力。",
    talk: "该方向适合重视数据安全的传统企业，在提升AI使用效率的同时建立权限、审计和使用规范。"
  }
};

const modal = document.querySelector("#case-modal");
const modalTitle = document.querySelector("#case-modal-title");
const modalLabel = document.querySelector("#case-modal-label");
const modalSummary = document.querySelector("#case-modal-summary");
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

const revealTargets = document.querySelectorAll(
  ".impact-intro, .metrics article, .statement-section p, .section-title, .fit-grid article, .method-grid article, .architecture-map > *, .case-showcase, .case-tile, .capability-list > div, .narrative-section > *, .contact-section > *"
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

const metricValues = document.querySelectorAll(".metrics strong");

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
    { threshold: 0.7 }
  );

  metricValues.forEach((element) => metricObserver.observe(element));
}

const hero = document.querySelector(".product-hero");
const heroDevice = document.querySelector(".hero-device");

if (hero && heroDevice && !prefersReducedMotion) {
  window.addEventListener(
    "scroll",
    () => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      heroDevice.style.setProperty("--hero-lift", `${progress * -34}px`);
      heroDevice.style.setProperty("--hero-scale", `${1 - progress * 0.035}`);
      heroDevice.style.setProperty("--hero-rotate", `${progress * 3.5}deg`);
    },
    { passive: true }
  );
}

const tiltCards = document.querySelectorAll(
  ".method-grid article, .fit-grid article, .case-tile, .metrics article, .case-stats div, .arch-column, .arch-core"
);

if (!prefersReducedMotion) {
  tiltCards.forEach((card) => {
    card.classList.add("tilt-card");

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 8).toFixed(2)}deg`);
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });
}

const createHeroNetwork = () => {
  if (!heroDevice || prefersReducedMotion) return;

  const canvas = heroDevice.querySelector(".hero-scene-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const particles = [];
  const rings = [];
  const particleCount = 82;
  let width = 0;
  let height = 0;
  let animationFrame;
  let pointerX = 0;
  let pointerY = 0;

  const resize = () => {
    const rect = heroDevice.getBoundingClientRect();
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
      radius: Math.random() * 0.42 + 0.06,
      orbit: Math.random() * 0.8 + 0.2,
      speed: (Math.random() * 0.35 + 0.08) * (Math.random() > 0.5 ? 1 : -1),
      y: Math.random() * 0.72 + 0.12,
      size: Math.random() * 2.1 + 0.9,
      glow: Math.random() * 0.5 + 0.35,
    });
  }

  for (let index = 0; index < 5; index += 1) {
    rings.push({
      radius: 0.12 + index * 0.07,
      speed: 0.12 + index * 0.025,
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
    const y = centerY + (particle.y - 0.5) * height * 0.75 * perspective;
    return { x, y, depth, perspective };
  };

  const drawGrid = (time) => {
    const horizon = height * 0.66;
    context.save();
    context.globalAlpha = 0.42;
    context.strokeStyle = "rgba(0, 210, 255, 0.22)";
    context.lineWidth = 1;

    for (let i = 0; i < 12; i += 1) {
      const y = horizon + Math.pow(i / 11, 1.8) * height * 0.3;
      context.beginPath();
      context.moveTo(width * 0.08, y);
      context.lineTo(width * 0.92, y);
      context.stroke();
    }

    for (let i = -8; i <= 8; i += 1) {
      const startX = width * 0.5 + i * width * 0.04;
      context.beginPath();
      context.moveTo(startX, horizon);
      context.lineTo(width * 0.5 + i * width * 0.14 + Math.sin(time * 0.8 + i) * 8, height);
      context.stroke();
    }
    context.restore();
  };

  const drawCore = (time) => {
    const centerX = width * (0.5 + pointerX * 0.04);
    const centerY = height * (0.5 + pointerY * 0.035);

    rings.forEach((ring, index) => {
      context.save();
      context.translate(centerX, centerY);
      context.rotate(time * ring.speed + ring.offset);
      context.scale(1, 0.32 + index * 0.035);
      context.strokeStyle = `rgba(0, 210, 255, ${0.34 - index * 0.04})`;
      context.lineWidth = 1.2;
      context.beginPath();
      context.ellipse(0, 0, width * ring.radius, width * ring.radius, 0, 0, Math.PI * 2);
      context.stroke();
      context.restore();
    });

    const core = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, width * 0.18);
    core.addColorStop(0, "rgba(255, 255, 255, 0.92)");
    core.addColorStop(0.18, "rgba(0, 210, 255, 0.55)");
    core.addColorStop(1, "rgba(0, 210, 255, 0)");
    context.fillStyle = core;
    context.beginPath();
    context.arc(centerX, centerY, width * 0.18, 0, Math.PI * 2);
    context.fill();
  };

  const draw = (now = 0) => {
    const time = now * 0.001;
    context.clearRect(0, 0, width, height);
    drawGrid(time);
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

        if (distance < width * 0.16) {
          context.strokeStyle = `rgba(0, 210, 255, ${0.18 * (1 - distance / (width * 0.16))})`;
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
      const glowSize = 16 + depth * 24;
      const glow = context.createRadialGradient(x, y, 0, x, y, glowSize);
      glow.addColorStop(0, `rgba(0, 210, 255, ${particle.glow})`);
      glow.addColorStop(1, "rgba(0, 210, 255, 0)");
      context.fillStyle = glow;
      context.beginPath();
      context.arc(x, y, glowSize, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = `rgba(255, 255, 255, ${0.52 + depth * 0.42})`;
      context.beginPath();
      context.arc(x, y, particle.size * perspective, 0, Math.PI * 2);
      context.fill();
    });

    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  draw();

  heroDevice.addEventListener("pointermove", (event) => {
    const rect = heroDevice.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  heroDevice.addEventListener("pointerleave", () => {
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
