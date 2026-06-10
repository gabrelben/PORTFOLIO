const data = window.portfolioData;

const heroDescription = document.getElementById("hero-description");
const heroHighlights = document.getElementById("hero-highlights");
const tickerTrack = document.getElementById("ticker-track");
const projectsMarquee = document.getElementById("projects-marquee");
const projectsGrid = document.getElementById("projects-grid");
const aboutText = document.getElementById("about-text");
const valuesList = document.getElementById("values-list");
const stackGrid = document.getElementById("stack-grid");
const contactText = document.getElementById("contact-text");
const contactLinks = document.getElementById("contact-links");
const contactCta = document.getElementById("contact-cta");
const cursorGlow = document.querySelector(".cursor-glow");
let suppressProjectClick = false;
let movedWhileDragging = false;

const contactIcons = {
  Email: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 7.75 12 13.5l8.5-5.75" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="3.5" y="6" width="17" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/>
    </svg>
  `,
  GitHub: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18.2c-3.2.95-3.2-1.8-4.6-2.25" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15 20v-2.46c0-.8.07-1.16-.35-1.6 1.4-.16 2.85-.69 2.85-3.15 0-.7-.25-1.27-.67-1.73.06-.16.29-.82-.07-1.71 0 0-.55-.18-1.8.65a6.1 6.1 0 0 0-3.9 0c-1.25-.83-1.8-.65-1.8-.65-.36.89-.13 1.55-.07 1.71-.42.46-.67 1.03-.67 1.73 0 2.45 1.45 2.99 2.85 3.15-.42.44-.42.88-.35 1.6V20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.1 7.9c1.95-.55 3.85-.55 5.8 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    </svg>
  `,
  LinkedIn: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.35 9.25V18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M6.35 6.45a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" fill="currentColor"/>
      <path d="M10.4 18v-5.1c0-1.95 1.1-3.65 3.25-3.65 2.13 0 2.95 1.5 2.95 3.85V18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4 12.15c0-1.8 1.15-2.9 2.75-2.9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    </svg>
  `
};

function formatContactDisplay(link) {
  if (link.href.startsWith("mailto:")) {
    return link.href.replace("mailto:", "");
  }

  return link.href
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

function setTextContent() {
  heroDescription.textContent = data.heroDescription;
  aboutText.textContent = data.about;
  contactText.textContent = data.contactText;
}

function renderHeroHighlights() {
  heroHighlights.innerHTML = data.heroHighlights
    .map(
      (item) => `
        <li>
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </li>
      `
    )
    .join("");
}

function renderTicker() {
  const items = [...data.ticker, ...data.ticker];

  tickerTrack.innerHTML = items
    .map((item) => `<span class="ticker-item">${item}</span>`)
    .join("");
}

function renderProjects() {
  const projects = [...data.projects, ...data.projects];
  const baseProjectIndex = data.projects.findIndex((project) => project.slug === "pagina-shawarmahouse");
  const baseIndex = baseProjectIndex >= 0 ? baseProjectIndex : 0;
  const totalProjects = data.projects.length || 1;

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <article
          class="project-showcase-card"
          data-project-index="${index % data.projects.length}"
          data-project-slug="${project.slug}"
          data-project-url="${project.directUrl || ""}"
          data-project-copy="${index >= data.projects.length ? "duplicate" : "original"}"
          role="link"
          tabindex="0"
          aria-label="Abrir projeto ${project.title}"
          style="--project-cover: ${project.cover};"
        >
          <div class="project-showcase-media">
            <div class="project-showcase-image" aria-hidden="true"></div>
            <div class="project-showcase-overlay"></div>
          </div>
          <div class="project-showcase-meta">
            <div class="project-showcase-topline">
              <p class="eyebrow">${project.category}</p>
              <span class="project-showcase-index">${String((((index % totalProjects) - baseIndex + totalProjects) % totalProjects) + 1).padStart(2, "0")}</span>
            </div>
            <div class="project-showcase-copy">
              <h3 class="${project.slug === "pagina-shawarmahouse" ? "project-title-shawarma" : ""}">${project.slug === "pagina-shawarmahouse" ? "Projeto Shawarma<br>House" : project.title}</h3>
              <p class="project-showcase-description">${project.description}</p>
              <div class="project-showcase-tags">
                ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
              <div class="project-showcase-links">
                ${project.links
                  .map((link) => `<a class="project-link" href="${link.href}">${link.label}</a>`)
                  .join("")}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  enableProjectsMarquee();
  enableProjectNavigation();
}

function enableProjectsMarquee() {
  if (!projectsMarquee || !projectsGrid) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let offset = 0;
  let velocity = reducedMotion ? 0 : -0.55;
  let baseVelocity = reducedMotion ? 0 : -0.55;
  let hoverVelocity = reducedMotion ? 0 : -0.08;
  let isPointerDown = false;
  let lastPointerX = 0;
  let lastDeltaX = 0;
  let singleSetWidth = 0;
  let animationFrame = 0;

  const measure = () => {
    singleSetWidth = projectsGrid.scrollWidth / 2;
  };

  const normalize = () => {
    if (!singleSetWidth) {
      return;
    }

    while (offset <= -singleSetWidth) {
      offset += singleSetWidth;
    }

    while (offset > 0) {
      offset -= singleSetWidth;
    }
  };

  const render = () => {
    if (!isPointerDown) {
      velocity += (baseVelocity - velocity) * 0.035;
    }

    offset += velocity;
    normalize();
    projectsGrid.style.transform = `translate3d(${offset}px, 0, 0)`;
    animationFrame = window.requestAnimationFrame(render);
  };

  const onPointerDown = (event) => {
    isPointerDown = true;
    movedWhileDragging = false;
    suppressProjectClick = false;
    projectsMarquee.dataset.dragging = "false";
    lastPointerX = event.clientX;
    lastDeltaX = 0;
    velocity = 0;
    projectsMarquee.classList.add("is-dragging");
    projectsMarquee.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!isPointerDown) {
      return;
    }

    event.stopPropagation();

    const deltaX = event.clientX - lastPointerX;
    lastPointerX = event.clientX;
    lastDeltaX = deltaX;
    if (Math.abs(deltaX) > 6) {
      movedWhileDragging = true;
      suppressProjectClick = true;
    }
    offset += deltaX;
    normalize();
    projectsGrid.style.transform = `translate3d(${offset}px, 0, 0)`;
  };

  const onPointerUp = (event) => {
    if (!isPointerDown) {
      return;
    }

    event.stopPropagation();

    isPointerDown = false;
    velocity = Math.max(Math.min(lastDeltaX * 0.9, 3.2), -3.2);
    projectsMarquee.classList.remove("is-dragging");
    projectsMarquee.releasePointerCapture(event.pointerId);
    projectsMarquee.dataset.dragging = movedWhileDragging ? "true" : "false";

    window.setTimeout(() => {
      movedWhileDragging = false;
      projectsMarquee.dataset.dragging = "false";
    }, 0);
  };

  const onWheel = (event) => {
    event.preventDefault();

    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
      offset -= event.deltaY * 0.7;
      velocity = -event.deltaY * 0.02;
    } else {
      offset -= event.deltaX * 0.7;
      velocity = -event.deltaX * 0.02;
    }

    normalize();
    projectsGrid.style.transform = `translate3d(${offset}px, 0, 0)`;
  };

  const onMouseEnter = () => {
    if (!reducedMotion && !isPointerDown) {
      baseVelocity = hoverVelocity;
    }
  };

  const onMouseLeave = () => {
    if (!reducedMotion && !isPointerDown) {
      baseVelocity = -0.55;
    }
  };

  window.cancelAnimationFrame(animationFrame);
  measure();
  projectsGrid.style.transform = "translate3d(0, 0, 0)";
  projectsMarquee.onpointerdown = onPointerDown;
  projectsMarquee.onpointermove = onPointerMove;
  projectsMarquee.onpointerup = onPointerUp;
  projectsMarquee.onpointerleave = onPointerUp;
  projectsMarquee.onwheel = onWheel;
  projectsMarquee.onmouseenter = onMouseEnter;
  projectsMarquee.onmouseleave = onMouseLeave;
  projectsMarquee.dataset.dragging = "false";
  window.addEventListener("resize", measure, { passive: true });
  render();

  projectsMarquee.addEventListener("pointermove", () => {
    projectsMarquee.dataset.dragging = movedWhileDragging ? "true" : "false";
  });
}
function enableProjectNavigation() {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.querySelectorAll(".project-showcase-links .project-link").forEach((link) => {
    link.onpointerdown = (event) => {
      event.stopPropagation();
      movedWhileDragging = false;
      suppressProjectClick = false;
    };

    link.onclick = (event) => {
      event.stopPropagation();

      const href = link.getAttribute("href") || "";
      if (href.startsWith("http")) {
        event.preventDefault();
        window.location.href = href;
      }
    };
  });

  const openProjectDestination = (card) => {
    const externalUrl = card.dataset.projectUrl;

    if (externalUrl) {
      window.location.href = externalUrl;
      return;
    }

    const slug = card.dataset.projectSlug;
    if (slug) {
      window.location.href = `./project.html?slug=${encodeURIComponent(slug)}`;
    }
  };

  projectsGrid.querySelectorAll(".project-showcase-card").forEach((card) => {
    card.onclick = (event) => {
      if (event.currentTarget.closest("a")) {
        return;
      }

      if (suppressProjectClick) {
        suppressProjectClick = false;
        return;
      }

      openProjectDestination(card);
    };

    card.onkeydown = (event) => {
      const key = event.key;
      if (key !== "Enter" && key !== " ") {
        return;
      }

      event.preventDefault();
      if (projectsMarquee && projectsMarquee.dataset.dragging === "true") {
        return;
      }

      openProjectDestination(card);
    };
  });
}

function renderValues() {
  if (!valuesList) {
    return;
  }

  valuesList.innerHTML = data.values
    .map((value) => `<span class="value-chip">${value}</span>`)
    .join("");
}

function renderStack() {
  stackGrid.innerHTML = data.stack
    .map(
      (item) => `
        <article class="stack-card reveal">
          <p class="eyebrow">Stack</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="stack-tags">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderContactLinks() {
  contactCta.href = "https://wa.me/5581996429584";
  contactCta.target = "_blank";
  contactCta.rel = "noreferrer";
  contactLinks.innerHTML = data.contactLinks
    .map(
      (link) => `
        <a class="contact-link-card" href="${link.href}" target="_blank" rel="noreferrer">
          <span class="contact-link-icon">${contactIcons[link.label] || contactIcons.Email}</span>
          <span class="contact-link-copy">
            <strong>${link.label}</strong>
            <span>${formatContactDisplay(link)}</span>
          </span>
          <span class="contact-link-arrow" aria-hidden="true">↗</span>
        </a>
      `
    )
    .join("");
}

function enableReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal, .reveal-delay").forEach((element) => {
    observer.observe(element);
  });
}

function enableProjectTilt() {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const rotateY = ((offsetX / rect.width) - 0.5) * 8;
      const rotateX = ((offsetY / rect.height) - 0.5) * -8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });
}

function enableCursorGlow() {
  if (!cursorGlow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  window.addEventListener("mousemove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

function bootstrap() {
  setTextContent();
  renderHeroHighlights();
  renderTicker();
  renderProjects();
  renderValues();
  renderStack();
  renderContactLinks();
  enableReveal();
  enableCursorGlow();
}

bootstrap();