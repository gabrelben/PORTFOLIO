const data = window.portfolioData;

const detailCategory = document.getElementById("detail-category");
const detailTitle = document.getElementById("detail-title");
const detailSummary = document.getElementById("detail-summary");
const detailDescription = document.getElementById("detail-description");
const detailGallery = document.getElementById("detail-gallery");
const detailObjective = document.getElementById("detail-objective");
const detailTechnologies = document.getElementById("detail-technologies");
const detailFeatures = document.getElementById("detail-features");
const detailCodeStack = document.getElementById("detail-code-stack");
const detailPrevProject = document.getElementById("detail-prev-project");
const detailNextProject = document.getElementById("detail-next-project");
const cursorGlow = document.querySelector(".cursor-glow");

function getProjectFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  return data.projects.find((project) => project.slug === slug) || data.projects[0];
}

function renderProject(project) {
  document.title = `${project.title} | Gabriel Bento`;
  detailCategory.textContent = project.category;
  detailTitle.textContent = project.title;
  detailSummary.textContent = project.summary || project.description;
  detailDescription.textContent = project.description;
  detailObjective.textContent = project.objective;

  detailGallery.innerHTML = project.gallery
    .map(
      (item, index) => `
        <article class="detail-gallery-card detail-gallery-card-${(index % 3) + 1}">
          <div class="detail-gallery-visual" style="${item.image ? `background-image: url('${item.image}');` : `background: ${item.visual};`} "></div>
          <div class="detail-gallery-caption">
            <strong>${item.label}</strong>
            <span>${project.title}</span>
          </div>
        </article>
      `
    )
    .join("");

  renderProjectNavigation(project);

  detailTechnologies.innerHTML = project.technologies
    .map((item) => `<span>${item}</span>`)
    .join("");

  detailFeatures.innerHTML = project.features
    .map((item) => `<li>${item}</li>`)
    .join("");

  detailCodeStack.innerHTML = project.codeSamples
    .map(
      (sample) => `
        <article class="detail-code-card">
          <div class="detail-code-topbar">
            <span>${sample.file}</span>
            <span>${sample.language}</span>
          </div>
          <pre><code>${sample.code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</code></pre>
        </article>
      `
    )
    .join("");
}

function renderProjectNavigation(project) {
  const currentIndex = data.projects.findIndex((item) => item.slug === project.slug);
  const prevProject = data.projects[(currentIndex - 1 + data.projects.length) % data.projects.length];
  const nextProject = data.projects[(currentIndex + 1) % data.projects.length];

  detailPrevProject.href = `./project.html?slug=${encodeURIComponent(prevProject.slug)}`;
  detailPrevProject.querySelector("strong").textContent = prevProject.title;
  detailNextProject.href = `./project.html?slug=${encodeURIComponent(nextProject.slug)}`;
  detailNextProject.querySelector("strong").textContent = nextProject.title;
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
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal, .reveal-delay").forEach((element) => {
    observer.observe(element);
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

renderProject(getProjectFromQuery());
enableReveal();
enableCursorGlow();
