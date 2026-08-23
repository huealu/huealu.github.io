const projects = [
  {
    slug: "library-staffing",
    accent: "cyan",
    type: "Interactive public-data dashboard",
    title: "Library Staffing Trends",
    description:
      "Nationwide, statewide, and peer-system comparisons across staffing, librarians, population, and operating revenue.",
    tags: ["Visualization", "Benchmarking", "JavaScript"],
    metric: "9K+",
    metricLabel: "library systems",
    role: "Data Analyst · Designer",
    year: "2026",
    tools: "Python · JavaScript",
    outcome: "Peer benchmarking",
    challenge:
      "Public library leaders need to understand whether staffing levels are sustainable, but raw national datasets make meaningful comparisons difficult. Total headcount alone can obscure population served, budget capacity, staff mix, and local context.",
    approach: [
      "Prepared multi-year library records and standardized staffing, population, and financial fields.",
      "Created national, state, and peer-system comparisons based on population and operating revenue.",
      "Designed per-capita and staffing-mix measures alongside trend views to avoid misleading raw-count comparisons.",
      "Built an interactive dashboard experience with filters, KPIs, and explanatory context."
    ],
    impact:
      "The dashboard turns a large administrative dataset into a practical benchmarking tool. Leaders can identify staffing changes, evaluate librarian-to-total-staff mix, and locate comparable systems for deeper review.",
    hasDemo: true
  },
  {
    slug: "prior-authorization",
    accent: "violet",
    type: "Healthcare analytics",
    title: "Prior Authorization Intelligence",
    description:
      "Decision-rule analytics and ML prioritization designed to reduce reviewer burden and improve healthcare operations.",
    tags: ["Python", "SQL", "Machine Learning"],
    metric: "500+",
    metricLabel: "rules delivered",
    role: "Data Analyst · Engineer",
    year: "2023 — Present",
    tools: "Python · SQL · Snowflake",
    outcome: "9% productivity gain",
    challenge:
      "Prior-authorization teams work across complex clinical policies, client requirements, and high-volume operational workflows. Inconsistent logic or poorly prioritized work can increase reviewer burden and turnaround time.",
    approach: [
      "Translated clinical and client requirements into more than 500 structured decision trees and rules.",
      "Built SQL and Python validation workflows, UAT scenarios, monitoring, and operational dashboards.",
      "Engineered Snowflake, Airflow, and dbt pipelines with incremental models and testing.",
      "Developed prioritization features balancing accuracy, reviewer effort, and operational impact."
    ],
    impact:
      "The work improved operational productivity while strengthening the reliability and traceability of healthcare decision logic."
  },
  {
    slug: "hospital-forecasting",
    accent: "emerald",
    type: "Healthcare forecasting",
    title: "Hospital Resource Forecasting",
    description:
      "Predictive models for medical supplies, medications, and staffing needs across hospital operations.",
    tags: ["Forecasting", "EMR", "Analytics"],
    metric: "20%",
    metricLabel: "faster queries",
    role: "Database & Analytics Intern",
    year: "2023",
    tools: "SQL · Python · EMR",
    outcome: "20% query improvement",
    challenge:
      "Hospital operations must align inventory and staffing with changing demand while maintaining reliable access to clinical and administrative data.",
    approach: [
      "Analyzed historical usage patterns for medical supplies and medications.",
      "Developed forecasting models to support inventory planning and reduce operational uncertainty.",
      "Studied staffing-hour patterns across shifts to identify resource-distribution opportunities.",
      "Improved database architecture and reporting queries while supporting EMR migration and integration."
    ],
    impact:
      "Database changes improved query performance by 20%, while the broader work supported a 13% improvement in system performance."
  },
  {
    slug: "fognet",
    accent: "blue",
    type: "Published deep-learning research",
    title: "FogNet Weather Forecasting",
    description:
      "A multiscale 3D CNN with attention for coastal fog prediction using terabytes of meteorological data.",
    tags: ["PyTorch", "3D CNN", "HPC"],
    metric: "10 TB+",
    metricLabel: "data processed",
    role: "Researcher · ML Engineer",
    year: "2019 — 2022",
    tools: "PyTorch · AWS · HPC",
    outcome: "10 TB+ processed",
    challenge:
      "Coastal fog is difficult to forecast because it emerges from interacting atmospheric and ocean variables across different spatial scales.",
    approach: [
      "Built ingestion and preprocessing workflows for terabytes of meteorological data.",
      "Designed and evaluated 3D CNN, attention, variational autoencoder, and statistical baselines.",
      "Accelerated experiments on Linux HPC and GPU infrastructure.",
      "Applied explainability methods and operational evaluation metrics to understand model behavior."
    ],
    impact:
      "The research produced published forecasting methods, a 10× compute speedup, and a VAE/LR workflow that outperformed a NOAA ensemble benchmark by 46% on Heidke Skill Score."
  },
  {
    slug: "wildfire",
    accent: "orange",
    type: "Geospatial AI",
    title: "Wildfire Risk Forecasting",
    description:
      "Satellite imagery, climate variables, and immersive visualization for next-generation wildfire research.",
    tags: ["Computer Vision", "Unity", "NASA Data"],
    metric: "Real-time",
    metricLabel: "visual exploration",
    role: "Graduate Researcher",
    year: "2022 — 2023",
    tools: "PyTorch · Unity · NASA Data",
    outcome: "Real-time visualization",
    challenge:
      "Wildfire research requires connecting large spatial datasets, environmental signals, model output, and human interpretation in a usable analytical environment.",
    approach: [
      "Prepared satellite imagery and climate variables through Python transformation pipelines.",
      "Developed PyTorch workflows for predictive wildfire research.",
      "Connected model-ready NASA data with an immersive Unity visualization environment.",
      "Designed real-time exploration patterns for researchers to inspect spatial signals."
    ],
    impact:
      "The project connected modeling and immersive analytics, making complex environmental data easier to inspect and communicate."
  },
  {
    slug: "route-optimization",
    accent: "rose",
    type: "Operations research",
    title: "Route Optimization Platform",
    description:
      "A multi-stop route planner powered by vehicle-routing optimization and an interactive map experience.",
    tags: ["OR-Tools", "Flask", "Maps API"],
    metric: "VRP",
    metricLabel: "optimization engine",
    role: "Full-Stack Developer",
    year: "2026",
    tools: "OR-Tools · Flask · Maps",
    outcome: "Optimized routes",
    challenge:
      "Manually ordering many delivery stops is slow, inconsistent, and rarely produces the most efficient result—especially when vehicle capacity or time constraints matter.",
    approach: [
      "Modeled the planning task as a vehicle-routing problem using OR-Tools.",
      "Built a Flask API and browser interface for stop entry and result display.",
      "Integrated mapping services to visualize routes and geographic context.",
      "Containerized the project and protected configuration through environment variables."
    ],
    impact:
      "The demonstration turns an optimization model into an approachable workflow that non-specialists can use and evaluate."
  }
];

const libraryData = {
  Oklahoma: {
    kpis: ["3,021", "1,184", "0.81", "$43.20"],
    staff: [68, 76, 83, 91, 100],
    librarians: [26, 29, 31, 35, 39]
  },
  Texas: {
    kpis: ["7,846", "3,206", "0.73", "$38.70"],
    staff: [60, 70, 79, 87, 96],
    librarians: [21, 25, 29, 33, 36]
  },
  National: {
    kpis: ["139K", "47,832", "0.92", "$47.90"],
    staff: [64, 73, 82, 91, 100],
    librarians: [23, 27, 31, 35, 38]
  }
};

const years = ["2019", "2020", "2021", "2022", "2023"];

const projectGrid = document.getElementById("project-grid");
const projectDialog = document.getElementById("project-dialog");
const projectDetail = document.getElementById("project-detail");
const closeDialogButton = document.getElementById("close-dialog");

function createProjectCards() {
  projectGrid.innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-card ${project.accent}"
          type="button"
          data-project="${project.slug}"
          aria-label="View ${project.title}"
        >
          <span class="project-card-top">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>View project ↗</strong>
          </span>

          <span class="project-metric">
            <strong>${project.metric}</strong>
            <span>${project.metricLabel}</span>
          </span>

          <span class="project-copy">
            <p>${project.type}</p>
            <h3>${project.title}</h3>
            <span class="project-description">
              ${project.description}
            </span>

            <span class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </span>
          </span>
        </button>
      `
    )
    .join("");
}

function createProjectDialog(project) {
  const metadata = [
    ["Role", project.role],
    ["Year", project.year],
    ["Tools", project.tools],
    ["Outcome", project.outcome]
  ];

  projectDetail.innerHTML = `
    <header class="project-hero">
      <p class="section-number">${project.type}</p>
      <h2>${project.title}</h2>
      <p class="project-deck">${project.description}</p>

      <div class="project-metadata">
        ${metadata
          .map(
            ([label, value]) => `
              <div>
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </header>

    <section class="project-case-study">
      <div class="case-study-layout">
        <h3>From problem<br>to product.</h3>

        <div class="case-study-content">
          <h3>The challenge</h3>
          <p>${project.challenge}</p>

          <h3>My approach</h3>
          <ul>
            ${project.approach.map((item) => `<li>${item}</li>`).join("")}
          </ul>

          <h3>Impact</h3>
          <p>${project.impact}</p>
        </div>
      </div>
    </section>

    ${
      project.hasDemo
        ? createLibraryDemo()
        : createDemoPlaceholder(project)
    }
  `;

  if (project.hasDemo) {
    const scopeSelect = document.getElementById("dashboard-scope");

    scopeSelect.addEventListener("change", () => {
      updateLibraryDashboard(scopeSelect.value);
    });

    updateLibraryDashboard(scopeSelect.value);
  }
}

function createLibraryDemo() {
  return `
    <section class="demo-section">
      <div class="demo-heading">
        <h3>Explore the dashboard</h3>
        <p>
          Change the comparison scope to update the summary cards and staffing
          trend.
        </p>
      </div>

      <div class="dashboard">
        <div class="dashboard-controls">
          <label>
            Comparison scope
            <select id="dashboard-scope">
              <option value="Oklahoma">Oklahoma</option>
              <option value="Texas">Texas</option>
              <option value="National">National</option>
            </select>
          </label>
        </div>

        <div id="dashboard-kpis" class="kpi-grid"></div>
        <div id="dashboard-chart" class="chart"></div>

        <div class="chart-legend">
          <span class="legend-item">Total staff index</span>
          <span class="legend-item librarian">Librarian index</span>
        </div>

        <p class="demo-note">
          Portfolio demonstration data is shown for interaction design.
          Connect the production version to the full IMLS dataset for official
          analysis.
        </p>
      </div>
    </section>
  `;
}

function createDemoPlaceholder(project) {
  return `
    <section class="demo-section">
      <div class="demo-heading">
        <h3>Project demonstration</h3>
      </div>

      <div class="dashboard demo-placeholder">
        <h3>Demo link coming soon</h3>
        <p>
          Add a public application, Tableau dashboard, GitHub repository,
          publication, or recorded walkthrough for ${project.title}.
        </p>
      </div>
    </section>
  `;
}

function updateLibraryDashboard(scope) {
  const data = libraryData[scope];
  const kpiLabels = [
    "Total staff FTE",
    "Librarian FTE",
    "Staff per 1K people",
    "Operating spend / capita"
  ];

  const kpiContainer = document.getElementById("dashboard-kpis");
  const chartContainer = document.getElementById("dashboard-chart");

  kpiContainer.innerHTML = kpiLabels
    .map(
      (label, index) => `
        <div class="kpi">
          <span>${label}</span>
          <strong>${data.kpis[index]}</strong>
        </div>
      `
    )
    .join("");

  chartContainer.innerHTML = years
    .map(
      (year, index) => `
        <div class="bar-group">
          <div
            class="bar"
            style="height: ${data.staff[index]}%"
            title="Staff index: ${data.staff[index]}"
          ></div>

          <div
            class="bar librarian"
            style="height: ${data.librarians[index] * 2.2}%"
            title="Librarian index: ${data.librarians[index]}"
          ></div>

          <label>${year}</label>
        </div>
      `
    )
    .join("");
}

function openProject(slug) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return;
  }

  createProjectDialog(project);
  projectDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeProjectDialog() {
  projectDialog.close();
  document.body.classList.remove("dialog-open");
}

projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project]");

  if (card) {
    openProject(card.dataset.project);
  }
});

closeDialogButton.addEventListener("click", closeProjectDialog);

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    closeProjectDialog();
  }
});

projectDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

/* Mobile navigation */

const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");

menuButton.addEventListener("click", () => {
  const isOpen = navigationLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Close" : "Menu";
});

navigationLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigationLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

/* Contact-form validation */

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  const fields = [name, email, subject, message];

  fields.forEach((field) => {
    field.classList.remove("invalid");
  });

  let isValid = true;

  if (!name.value.trim()) {
    name.classList.add("invalid");
    isValid = false;
  }

  if (!isValidEmail(email.value.trim())) {
    email.classList.add("invalid");
    isValid = false;
  }

  if (!subject.value.trim()) {
    subject.classList.add("invalid");
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    message.classList.add("invalid");
    isValid = false;
  }

  if (!isValid) {
    formStatus.textContent =
      "Please complete all fields and enter a valid email address.";
    formStatus.classList.add("error");
    return;
  }

  formStatus.classList.remove("error");
  formStatus.textContent =
    "Your message is ready. Connect this form to Formspree, EmailJS, or your backend to receive submissions.";

  contactForm.reset();
});

/* Scroll animation */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

/* Current year */

document.getElementById("current-year").textContent =
  new Date().getFullYear();

/* Build the projects */

createProjectCards();