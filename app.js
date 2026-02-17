const architectureLayers = [
    {
        name: "Experience Layer",
        text: "Customer pages for homepage, shop, product view, and smooth buying flow.",
        tags: ["index.php", "shop.php", "product.php", "watch-finder.php", "assets/js/main.js"]
    },
    {
        name: "Operations Layer",
        text: "Admin pages for products, users, orders, reports, settings, and support work.",
        tags: ["admin/dashboard.php", "admin/settings.php", "admin/orders.php", "admin/homepage.php"]
    },
    {
        name: "Service Layer",
        text: "API endpoints for chat, push notifications, and helper features.",
        tags: ["chat_api.php", "push_notifications_feed.php", "pwa_push_subscription.php", "watch-finder-api.php"]
    },
    {
        name: "Data and Security Layer",
        text: "Database and safety rules for sessions, CSRF, request limits, and data storage.",
        tags: ["includes/db.php", "site_settings", "orders", "users", "request_limits"]
    }
];

const orbitNodes = [
    "Storefront",
    "Admin",
    "Checkout",
    "Orders",
    "Chat",
    "Push",
    "Reports",
    "Settings",
    "Content",
    "Security"
];

const flowSteps = [
    {
        kicker: "Flow 01",
        title: "Discovery and Entry",
        text: "Users start from homepage, campaign links, or watch finder.",
        bullets: [
            "Homepage sections show key products first",
            "Search and filters help users find items fast",
            "User clicks move to product page"
        ]
    },
    {
        kicker: "Flow 02",
        title: "Product and Cart Decision",
        text: "Users check photos, variants, and reviews, then add to bag or buy now.",
        bullets: [
            "Selected variant updates final price",
            "Bag stays saved in session or account",
            "Related items help user continue shopping"
        ]
    },
    {
        kicker: "Flow 03",
        title: "Checkout and Order Commit",
        text: "Checkout checks shipping and payment fields, then saves the order.",
        bullets: [
            "Security checks protect important actions",
            "Order data is saved in the right tables",
            "Stock and success page update after payment"
        ]
    },
    {
        kicker: "Flow 04",
        title: "Post-Purchase Lifecycle",
        text: "After order, users can track, receive, review, reorder, or request return.",
        bullets: [
            "Order status stays synced for users and admin",
            "Reviews and returns support better service",
            "Notifications alert key order changes"
        ]
    },
    {
        kicker: "Flow 05",
        title: "Support and Retention",
        text: "Chat starts with ZuraBot, then can move to staff if needed.",
        bullets: [
            "Staff tab appears when customer asks for staff",
            "Push messages help bring users back",
            "Admin settings control promos and campaigns"
        ]
    }
];

const modules = [
    { area: "customer", name: "Storefront Experience", text: "Homepage narrative, campaign rails, and branded storytelling." },
    { area: "customer", name: "Discovery and Search", text: "Facet filters, search, and recommendation route selection." },
    { area: "customer", name: "Product and Review UX", text: "Variants, media, review sorting, and helpful votes." },
    { area: "customer", name: "Bag and Checkout", text: "Cart persistence, coupon engine, shipping and payment paths." },
    { area: "customer", name: "Account and Orders", text: "Profile preferences, order history, receive/reorder/review actions." },
    { area: "customer", name: "PWA and Push", text: "Install flow, subscription lifecycle, service worker notifications." },
    { area: "admin", name: "Admin Dashboard", text: "KPI visibility, layout control, and operational insights." },
    { area: "admin", name: "Catalog Operations", text: "Product CRUD, stock control, import/export and merchandising." },
    { area: "admin", name: "Order Fulfillment", text: "Status transitions, payment tracking, return resolution." },
    { area: "admin", name: "User Governance", text: "Role handling, moderation, warning/ban policy, support notes." },
    { area: "admin", name: "Content and Homepage Builder", text: "Hero layers and settings-driven homepage composition." },
    { area: "admin", name: "Settings and Promotions", text: "Branding, coupons, loyalty controls, push settings." },
    { area: "system", name: "Service Endpoints", text: "Chat API, push feed, watch finder API, async order hooks." },
    { area: "system", name: "Security Controls", text: "CSRF, session policy, request limits, login throttling." },
    { area: "system", name: "Data Backbone", text: "Orders, products, users, settings, logs, notifications." }
];

const roadmap = [
    {
        phase: "Phase 0",
        window: "Day 1 to Day 7",
        title: "Launch Hardening",
        tasks: [
            "Finalize required database fields",
            "Make API error messages consistent",
            "Run basic tests for checkout, chat, push, and admin",
            "Lock production settings and remove defaults"
        ]
    },
    {
        phase: "Phase 1",
        window: "Week 2 to Week 3",
        title: "Conversion and UX",
        tasks: [
            "Track key user actions in discovery and checkout",
            "Make image loading faster",
            "Improve search and recommendations",
            "Add follow-up for abandoned carts"
        ]
    },
    {
        phase: "Phase 2",
        window: "Week 4 to Week 6",
        title: "Reliability and Operations",
        tasks: [
            "Use queue for email and push sending",
            "Add activity timeline for order and user actions",
            "Prevent duplicate critical writes",
            "Improve role controls and monitoring view"
        ]
    },
    {
        phase: "Phase 3",
        window: "Week 7 to Week 10",
        title: "Polish and Scale Readiness",
        tasks: [
            "Prepare settings for multi-store growth",
            "Improve promo targeting rules",
            "Automate loyalty reward triggers",
            "Prepare optional API-first expansion path"
        ]
    }
];

const resolvedIssues = [
    "Product page 'Recently Viewed' and 'You May Also Like' now stay in one row.",
    "Homepage settings now control more sections like premium grid and movement story media.",
    "Announcement bar show, hide, and position issues were fixed.",
    "Store settings page was improved with preview and better section handling.",
    "Premium ads grid was redesigned so text is easier to read.",
    "Product page blank issue after new ratings or reviews was fixed.",
    "Chat starts with ZuraBot and only shows staff chat when user asks for staff.",
    "Shop page visual style was improved for light and dark modes.",
    "Main pages were cleaned and checked for syntax issues."
];

const openIssues = [
    "Final live payment checks are still needed before launch.",
    "Background job flow for notifications still needs stronger queue handling.",
    "More cross-browser testing is needed for the newest admin settings UI.",
    "API monitoring rules still need final tuning.",
    "Database rollback drill should be completed before release."
];

const upcomingReleaseDate = "2026-02-24T23:59:59";
const upcomingReleaseItems = [
    "Final stability checks for checkout, chat, push, and admin settings.",
    "Release checklist with rollback steps and post-release checks.",
    "Homepage polish pass with clearer ad grid text and spacing.",
    "Chat reliability pass for smoother staff handoff.",
    "Documentation flow updates using the live doc tools."
];

const teamMembers = [
    { initial: "K", name: "Kirbs Dimagiba", role: "Project Manager | Lead Developer" },
    { initial: "J", name: "Jeje Joson", role: "Developer | Sales and Marketing" },
    { initial: "S", name: "Sofa Perez", role: "Technical Writer | Sales and Marketing" },
    { initial: "A", name: "Alvin Aldaba", role: "Model | Tester" },
    { initial: "D", name: "Denmark Vibal", role: "Model | Tester" }
];

const versionHistory = [
    {
        version: "v1.4",
        title: "The UI/UX Overhaul",
        released: "February 02, 2026",
        latest: true,
        summary: "Comprehensive overhaul of interface quality, customer/admin experience, and security posture.",
        points: [
            "Mega menu and refined product browsing presentation",
            "Authentication and profile UI improvements",
            "Loyalty, journal, and accessibility feature expansion",
            "CSRF hardening and upload performance upgrades"
        ]
    },
    {
        version: "v1.3",
        title: "The Feature Upgrade",
        released: "January 23, 2026",
        latest: false,
        summary: "Major release introducing live chat, homepage builder enhancements, and expanded authentication flows.",
        points: [
            "Chatbot and live admin support channel",
            "Homepage customization via admin controls",
            "Ratings and reviews system",
            "Google and OTP login integrations"
        ]
    },
    {
        version: "v1.2",
        title: "Expansion",
        released: "January 18, 2026",
        latest: false,
        summary: "Admin dashboard and checkout UX improvements with layout expansion.",
        points: [
            "Added sales and order status widgets",
            "Login/register moved to modal interface",
            "Checkout/cart aligned into guided step flow",
            "Homepage visual refresh"
        ]
    },
    {
        version: "v1.1",
        title: "Fresh Start",
        released: "January 2026",
        latest: false,
        summary: "Initial release of ZURA with essential e-commerce capability.",
        points: [
            "Admin login and dashboard foundation",
            "Product and order management baseline",
            "Customer storefront, cart, and checkout foundation"
        ]
    }
];

const architectureStack = document.getElementById("architectureStack");
const orbitContainer = document.getElementById("orbitNodes");
const flowStepsContainer = document.getElementById("flowSteps");
const flowKicker = document.getElementById("flowDetailKicker");
const flowTitle = document.getElementById("flowDetailTitle");
const flowText = document.getElementById("flowDetailText");
const flowList = document.getElementById("flowDetailList");
const flowPlayBtn = document.getElementById("flowPlayBtn");
const flowStatus = document.getElementById("flowStatus");
const moduleGrid = document.getElementById("moduleGrid");
const moduleFilters = document.getElementById("moduleFilters");
const roadmapLine = document.getElementById("roadmapLine");
const resolvedIssuesList = document.getElementById("resolvedIssuesList");
const openIssuesList = document.getElementById("openIssuesList");
const releaseCountdown = document.getElementById("releaseCountdown");
const upcomingFeatureList = document.getElementById("upcomingFeatureList");
const writerModal = document.getElementById("writerModal");
const openWriterToolsBtn = document.getElementById("openWriterToolsBtn");
const addDocQuickBtn = document.getElementById("addDocQuickBtn");
const writerModalClose = document.getElementById("writerModalClose");
const writerForm = document.getElementById("writerForm");
const writerEditingId = document.getElementById("writerEditingId");
const writerTitle = document.getElementById("writerTitle");
const writerText = document.getElementById("writerText");
const writerImage = document.getElementById("writerImage");
const writerRemoveImage = document.getElementById("writerRemoveImage");
const writerSaveBtn = document.getElementById("writerSaveBtn");
const writerCancelBtn = document.getElementById("writerCancelBtn");
const writerMeta = document.getElementById("writerMeta");
const writerToolMeta = document.getElementById("writerToolMeta");
const writerFeed = document.getElementById("writerFeed");
const writerManageList = document.getElementById("writerManageList");
const teamGrid = document.getElementById("teamGrid");
const versionTimeline = document.getElementById("versionTimeline");
const navLinks = [...document.querySelectorAll("#navLinks a")];
const scrollProgress = document.getElementById("scrollProgress");
const themeBtn = document.getElementById("themeBtn");
const presentBtn = document.getElementById("presentBtn");

let currentFlow = 0;
let autoFlow = null;
let activeFilter = "all";
let presentationTimer = null;
let releaseTimer = null;
let writerDocs = [];
let writerChannel = null;

const writerStorageKey = "zura_writer_live_docs_v1";

function renderArchitecture() {
    if (!architectureStack || !orbitContainer) return;
    architectureStack.innerHTML = "";
    architectureLayers.forEach((layer) => {
        const card = document.createElement("article");
        card.className = "layer-card tilt";
        card.setAttribute("data-tilt", "");
        const tags = layer.tags.map((t) => `<span>${t}</span>`).join("");
        card.innerHTML = `<h3>${layer.name}</h3><p>${layer.text}</p><div class="layer-tags">${tags}</div>`;
        architectureStack.appendChild(card);
    });

    orbitContainer.innerHTML = "";
    orbitNodes.forEach((node, index) => {
        const item = document.createElement("div");
        item.className = "orbit-node";
        item.style.animationDuration = `${16 + (index * 1.3)}s`;
        item.style.animationDelay = `${index * -0.9}s`;
        item.innerHTML = `<span>${node}</span>`;
        orbitContainer.appendChild(item);
    });
}

function renderFlowSteps() {
    if (!flowStepsContainer || !flowKicker || !flowTitle || !flowText || !flowList) return;
    flowStepsContainer.innerHTML = "";
    flowSteps.forEach((step, index) => {
        const btn = document.createElement("button");
        btn.className = "flow-step-btn";
        btn.type = "button";
        btn.innerHTML = `<strong>${step.title}</strong><span>${step.kicker}</span>`;
        btn.addEventListener("click", () => {
            setFlowStep(index);
            stopAutoFlow();
        });
        flowStepsContainer.appendChild(btn);
    });
    setFlowStep(0);
}

function setFlowStep(index) {
    currentFlow = index;
    const step = flowSteps[index];
    flowKicker.textContent = step.kicker;
    flowTitle.textContent = step.title;
    flowText.textContent = step.text;
    flowList.innerHTML = step.bullets.map((item) => `<li>${item}</li>`).join("");
    [...flowStepsContainer.querySelectorAll(".flow-step-btn")].forEach((el, i) => {
        el.classList.toggle("active", i === index);
    });
}

function startAutoFlow() {
    if (autoFlow || !flowStatus || !flowPlayBtn) return;
    flowStatus.textContent = "Auto";
    flowPlayBtn.textContent = "Pause Flow";
    autoFlow = setInterval(() => {
        const next = (currentFlow + 1) % flowSteps.length;
        setFlowStep(next);
    }, 2600);
}

function stopAutoFlow() {
    if (autoFlow) {
        clearInterval(autoFlow);
        autoFlow = null;
    }
    if (flowStatus) flowStatus.textContent = "Manual";
    if (flowPlayBtn) flowPlayBtn.textContent = "Play Flow";
}

function renderModuleFilters() {
    if (!moduleFilters) return;
    const filterSet = ["all", "customer", "admin", "system"];
    moduleFilters.innerHTML = "";
    filterSet.forEach((item) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = item === "all" ? "All Modules" : `${item[0].toUpperCase()}${item.slice(1)}`;
        btn.classList.toggle("active", item === activeFilter);
        btn.addEventListener("click", () => {
            activeFilter = item;
            renderModuleFilters();
            renderModules();
        });
        moduleFilters.appendChild(btn);
    });
}

function renderModules() {
    if (!moduleGrid) return;
    moduleGrid.innerHTML = "";
    modules
        .filter((m) => activeFilter === "all" || m.area === activeFilter)
        .forEach((m) => {
            const card = document.createElement("article");
            card.className = "module-card tilt";
            card.setAttribute("data-tilt", "");
            card.innerHTML = `<h3>${m.name}</h3><p>${m.text}</p><span class="module-meta">${m.area}</span>`;
            moduleGrid.appendChild(card);
        });
}

function renderRoadmap() {
    if (!roadmapLine) return;
    roadmapLine.innerHTML = "";
    roadmap.forEach((phase) => {
        const card = document.createElement("article");
        card.className = "phase-card";
        card.innerHTML = `
            <span class="phase-chip">${phase.phase} - ${phase.window}</span>
            <h3>${phase.title}</h3>
            <ul>${phase.tasks.map((t) => `<li>${t}</li>`).join("")}</ul>
        `;
        roadmapLine.appendChild(card);
    });
}

function renderIssues() {
    if (resolvedIssuesList) {
        resolvedIssuesList.innerHTML = resolvedIssues.map((item) => `<li>${item}</li>`).join("");
    }
    if (openIssuesList) {
        openIssuesList.innerHTML = openIssues.map((item) => `<li>${item}</li>`).join("");
    }
}

function updateReleaseCountdown() {
    if (!releaseCountdown) return;
    const target = new Date(upcomingReleaseDate).getTime();
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
        releaseCountdown.textContent = "Release window is active.";
        return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    releaseCountdown.textContent = `${days}d ${hours}h ${minutes}m remaining`;
}

function renderUpcomingRelease() {
    if (upcomingFeatureList) {
        upcomingFeatureList.innerHTML = upcomingReleaseItems.map((item) => `<li>${item}</li>`).join("");
    }
    updateReleaseCountdown();
    if (releaseTimer) clearInterval(releaseTimer);
    releaseTimer = setInterval(updateReleaseCountdown, 60000);
}

function escapeHtml(input) {
    return String(input || "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#39;");
}

function formatDateTime(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Unknown time";
    return date.toLocaleString();
}

function loadWriterDocs() {
    try {
        const raw = localStorage.getItem(writerStorageKey);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((entry) => entry && typeof entry === "object" && typeof entry.id === "string");
    } catch {
        return [];
    }
}

function saveWriterDocs(source) {
    localStorage.setItem(writerStorageKey, JSON.stringify(writerDocs));
    setWriterMeta(`Saved (${source}) at ${new Date().toLocaleTimeString()}`);
    if (writerChannel) {
        writerChannel.postMessage({ type: "writer-sync", time: Date.now() });
    }
}

function setWriterMeta(text) {
    if (writerMeta) writerMeta.textContent = text;
    if (writerToolMeta) writerToolMeta.textContent = text;
}

function resetWriterForm() {
    if (!writerForm || !writerEditingId || !writerTitle || !writerText || !writerImage || !writerRemoveImage) return;
    writerForm.reset();
    writerEditingId.value = "";
    writerRemoveImage.checked = false;
    if (writerSaveBtn) writerSaveBtn.textContent = "Add Entry";
}

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
        reader.onerror = () => reject(new Error("Failed to read file."));
        reader.readAsDataURL(file);
    });
}

function renderWriterDocs() {
    if (!writerFeed) return;
    if (!writerDocs.length) {
        writerFeed.innerHTML = `<article class="writer-empty">No updates yet. Open Doc Tools to add your first entry.</article>`;
        return;
    }
    writerFeed.innerHTML = writerDocs.map((entry) => {
        const imageSrc = typeof entry.image === "string" && entry.image.startsWith("data:image/") ? entry.image : "";
        const safeTitle = escapeHtml(entry.title);
        const safeBody = escapeHtml(entry.body);
        const updatedAt = formatDateTime(entry.updatedAt || entry.createdAt);
        return `
            <article class="writer-entry" data-id="${entry.id}">
                <div class="writer-entry-head">
                    <h3>${safeTitle}</h3>
                    <span class="writer-entry-time">${updatedAt}</span>
                </div>
                <p>${safeBody}</p>
                ${imageSrc ? `<img src="${imageSrc}" alt="${safeTitle}">` : ""}
            </article>
        `;
    }).join("");
}

function renderWriterManageList() {
    if (!writerManageList) return;
    if (!writerDocs.length) {
        writerManageList.innerHTML = `<article class="writer-empty">No entries to manage yet.</article>`;
        return;
    }
    writerManageList.innerHTML = writerDocs.map((entry) => `
        <article class="writer-manage-item">
            <h5>${escapeHtml(entry.title)}</h5>
            <p>${formatDateTime(entry.updatedAt || entry.createdAt)}</p>
            <div class="writer-manage-actions">
                <button type="button" data-action="edit" data-id="${entry.id}">Edit</button>
                <button type="button" data-action="delete" data-id="${entry.id}">Delete</button>
            </div>
        </article>
    `).join("");
}

function openWriterTools() {
    if (!writerModal) return;
    if (typeof writerModal.showModal === "function") {
        if (!writerModal.open) writerModal.showModal();
    } else {
        writerModal.setAttribute("open", "open");
    }
}

function closeWriterTools() {
    if (!writerModal) return;
    if (typeof writerModal.close === "function") {
        if (writerModal.open) writerModal.close();
    } else {
        writerModal.removeAttribute("open");
    }
}

function startEditWriterDoc(id) {
    const entry = writerDocs.find((doc) => doc.id === id);
    if (!entry || !writerEditingId || !writerTitle || !writerText || !writerRemoveImage) return;
    openWriterTools();
    writerEditingId.value = entry.id;
    writerTitle.value = entry.title || "";
    writerText.value = entry.body || "";
    writerRemoveImage.checked = false;
    if (writerSaveBtn) writerSaveBtn.textContent = "Save Entry";
    setWriterMeta(`Editing: ${entry.title}`);
    writerTitle.focus();
}

function removeWriterDoc(id) {
    writerDocs = writerDocs.filter((doc) => doc.id !== id);
    saveWriterDocs("delete");
    renderWriterDocs();
    renderWriterManageList();
    if (writerEditingId && writerEditingId.value === id) resetWriterForm();
}

async function submitWriterDoc(event) {
    event.preventDefault();
    if (!writerTitle || !writerText || !writerEditingId || !writerImage || !writerRemoveImage) return;
    const title = writerTitle.value.trim();
    if (!title) {
        setWriterMeta("Title is required.");
        return;
    }
    const body = writerText.value.trim();
    const id = writerEditingId.value.trim();
    const now = new Date().toISOString();
    let image = "";
    if (id) {
        const existing = writerDocs.find((doc) => doc.id === id);
        if (existing && typeof existing.image === "string") image = existing.image;
    }
    if (writerRemoveImage.checked) image = "";
    if (writerImage.files && writerImage.files[0]) {
        try {
            image = await fileToDataUrl(writerImage.files[0]);
        } catch {
            setWriterMeta("Image upload failed. Try another image.");
            return;
        }
    }
    if (id) {
        writerDocs = writerDocs.map((doc) => {
            if (doc.id !== id) return doc;
            return {
                ...doc,
                title,
                body,
                image,
                updatedAt: now
            };
        });
    } else {
        writerDocs.unshift({
            id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
            title,
            body,
            image,
            createdAt: now,
            updatedAt: now
        });
    }
    saveWriterDocs("save");
    renderWriterDocs();
    renderWriterManageList();
    resetWriterForm();
    setWriterMeta("Entry saved.");
}

function initWriterBoard() {
    if (!writerForm || !writerFeed) return;
    writerDocs = loadWriterDocs();
    renderWriterDocs();
    renderWriterManageList();
    setWriterMeta(`Ready. ${writerDocs.length} entr${writerDocs.length === 1 ? "y" : "ies"} loaded.`);

    writerForm.addEventListener("submit", submitWriterDoc);
    if (writerCancelBtn) {
        writerCancelBtn.addEventListener("click", () => {
            resetWriterForm();
            setWriterMeta("Form reset.");
        });
    }
    if (openWriterToolsBtn) {
        openWriterToolsBtn.addEventListener("click", () => {
            openWriterTools();
            setWriterMeta("Doc tools opened.");
        });
    }
    if (addDocQuickBtn) {
        addDocQuickBtn.addEventListener("click", () => {
            resetWriterForm();
            openWriterTools();
            setWriterMeta("Add mode ready.");
            if (writerTitle) writerTitle.focus();
        });
    }
    if (writerModalClose) {
        writerModalClose.addEventListener("click", () => {
            closeWriterTools();
        });
    }
    if (writerModal) {
        writerModal.addEventListener("click", (event) => {
            if (event.target === writerModal) closeWriterTools();
        });
    }
    if (writerManageList) {
        writerManageList.addEventListener("click", (event) => {
            const clicked = event.target instanceof Element ? event.target.closest("button[data-action]") : null;
            if (!clicked) return;
            const { action, id } = clicked.dataset;
            if (!id) return;
            if (action === "edit") startEditWriterDoc(id);
            if (action === "delete") removeWriterDoc(id);
        });
    }
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && writerModal && writerModal.open) {
            closeWriterTools();
        }
    });
    window.addEventListener("storage", (event) => {
        if (event.key !== writerStorageKey) return;
        writerDocs = loadWriterDocs();
        renderWriterDocs();
        renderWriterManageList();
        setWriterMeta(`Synced from another tab at ${new Date().toLocaleTimeString()}`);
    });
    if ("BroadcastChannel" in window) {
        writerChannel = new BroadcastChannel("zura_writer_live_docs_channel");
        writerChannel.addEventListener("message", (event) => {
            if (!event.data || event.data.type !== "writer-sync") return;
            writerDocs = loadWriterDocs();
            renderWriterDocs();
            renderWriterManageList();
            setWriterMeta(`Live sync received at ${new Date().toLocaleTimeString()}`);
        });
    }
}

function renderTeam() {
    if (!teamGrid) return;
    teamGrid.innerHTML = "";
    teamMembers.forEach((member) => {
        const card = document.createElement("article");
        card.className = "team-card tilt";
        card.setAttribute("data-tilt", "");
        card.innerHTML = `
            <div class="team-avatar">${member.initial}</div>
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamGrid.appendChild(card);
    });
}

function renderVersionHistory() {
    if (!versionTimeline) return;
    versionTimeline.innerHTML = "";
    versionHistory.forEach((entry) => {
        const block = document.createElement("details");
        block.className = "version-card";
        if (entry.latest) block.setAttribute("open", "open");
        block.innerHTML = `
            <summary>
                <div class="version-title">
                    <span class="version-badge">${entry.version}</span>
                    <h3>${entry.title}</h3>
                    ${entry.latest ? '<span class="version-badge">Latest</span>' : ""}
                </div>
                <span class="release">${entry.released}</span>
            </summary>
            <div class="version-content">
                <p>${entry.summary}</p>
                <ul>${entry.points.map((p) => `<li>${p}</li>`).join("")}</ul>
            </div>
        `;
        versionTimeline.appendChild(block);
    });
}

function initReveal() {
    const sections = [...document.querySelectorAll(".section-reveal")];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, { threshold: 0.14 });
    sections.forEach((section) => observer.observe(section));
}

function initTilt() {
    const nodes = [...document.querySelectorAll("[data-tilt]")];
    nodes.forEach((node) => {
        node.addEventListener("mousemove", (e) => {
            const rect = node.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rx = (0.5 - y) * 8;
            const ry = (x - 0.5) * 10;
            node.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
        });
        node.addEventListener("mouseleave", () => {
            node.style.transform = "";
        });
    });
}

function initNavAndProgress() {
    const sections = [...document.querySelectorAll("main section")];
    function updateActive() {
        let current = sections[0] ? sections[0].id : "";
        const marker = window.scrollY + 130;
        sections.forEach((section) => {
            if (marker >= section.offsetTop) current = section.id;
        });
        navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });
    }
    function updateProgress() {
        if (!scrollProgress) return;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        scrollProgress.style.width = `${pct.toFixed(2)}%`;
    }
    window.addEventListener("scroll", () => {
        updateActive();
        updateProgress();
    });
    updateActive();
    updateProgress();
}

function initTheme() {
    if (!themeBtn) return;
    const stored = localStorage.getItem("zura_update_theme");
    if (stored) document.body.setAttribute("data-theme", stored);
    themeBtn.addEventListener("click", () => {
        const next = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", next);
        localStorage.setItem("zura_update_theme", next);
    });
}

function stopPresentationMode() {
    if (presentationTimer) {
        clearInterval(presentationTimer);
        presentationTimer = null;
    }
    document.body.classList.remove("presentation-mode");
    if (presentBtn) presentBtn.textContent = "Present";
    if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    }
}

function startPresentationMode() {
    const sections = [...document.querySelectorAll("main section")];
    if (!sections.length) return;
    document.body.classList.add("presentation-mode");
    if (presentBtn) presentBtn.textContent = "Stop";
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
    }
    let index = 0;
    const advance = () => {
        const target = sections[index % sections.length];
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        index += 1;
    };
    advance();
    presentationTimer = setInterval(advance, 7000);
}

function initActions() {
    if (flowPlayBtn) {
        flowPlayBtn.addEventListener("click", () => {
            if (autoFlow) stopAutoFlow();
            else startAutoFlow();
        });
    }
    if (presentBtn) {
        presentBtn.addEventListener("click", () => {
            if (presentationTimer) stopPresentationMode();
            else startPresentationMode();
        });
    }
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && presentationTimer) {
            stopPresentationMode();
        }
    });
}

renderArchitecture();
renderFlowSteps();
renderModuleFilters();
renderModules();
renderIssues();
renderRoadmap();
renderUpcomingRelease();
initWriterBoard();
renderTeam();
renderVersionHistory();
initReveal();
initTilt();
initNavAndProgress();
initTheme();
initActions();
