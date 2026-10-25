const catalog = window.BOOKMARK_CATALOG || [];
const products = Object.fromEntries(catalog.map((product) => [product.id, product]));
const catalogPageSize = 20;
const catalogState = { series: "all", page: 1, sort: "sku-asc" };
const giftboxProductId = "BM-AB-015-C";
const seriesLabels = {
  FL: "FL · Bloemen",
  CT: "CT · Katten",
  AN: "AN · Dieren",
  XM: "XM · Winter / Kerst",
  CH: "CH · Personages",
  LS: "LS · Landschappen",
  AB: "AB · Abstract / patroon",
  QT: "QT · Quotes / tekst",
  none: "— Geen reeks",
};

const CART_KEY = "boekenleggers-cart-v1";
const FREE_SHIPPING_QUANTITY = 5;
const ITEM_PRICE_CENTS = 450;
const SHIPPING_PRICE_CENTS = 250;
const cart = readCart();

const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItems = document.getElementById("cartItems");
const cartQuantity = document.getElementById("cartQuantity");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartShipping = document.getElementById("cartShipping");
const cartTotal = document.getElementById("cartTotal");
const shippingProgressText = document.getElementById("shippingProgressText");
const shippingProgress = document.querySelector(".shipping-progress");
const shippingProgressBar = document.getElementById("shippingProgressBar");
const termsAccepted = document.getElementById("termsAccepted");
const checkoutButton = document.getElementById("checkoutButton");
const cartTrigger = document.querySelector(".cart-pill");
const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const resultsCount = document.getElementById("resultsCount");
const productPagination = document.getElementById("productPagination");
const productSort = document.getElementById("productSort");
const productLightbox = document.getElementById("productLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxName = document.getElementById("lightboxName");
const lightboxPosition = document.getElementById("lightboxPosition");
let lightboxProducts = [];
let lightboxIndex = 0;
let lightboxReturnFocus = null;

function getVisibleProducts() {
  const filtered = catalog.filter(
    (product) => catalogState.series === "all" || product.series === catalogState.series,
  );
  return filtered.sort((first, second) => {
    const comparison = first.id.localeCompare(second.id, "en", { numeric: true });
    return catalogState.sort === "sku-desc" ? -comparison : comparison;
  });
}

function renderCatalog() {
  const counts = catalog.reduce((seriesCounts, product) => {
    seriesCounts[product.series] = (seriesCounts[product.series] || 0) + 1;
    return seriesCounts;
  }, {});
  const activeProducts = getVisibleProducts();
  const pageCount = Math.ceil(activeProducts.length / catalogPageSize);
  catalogState.page = Math.min(catalogState.page, Math.max(1, pageCount));
  const start = (catalogState.page - 1) * catalogPageSize;
  const pageProducts = activeProducts.slice(start, start + catalogPageSize);

  categoryFilters.replaceChildren();
  const categories = [
    { id: "all", label: "Alle boekenleggers", count: catalog.length },
    ...Object.entries(seriesLabels).map(([id, label]) => ({
      id,
      label,
      count: counts[id] || 0,
    })),
  ];
  categories.forEach(({ id, label, count }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-filter";
    button.classList.toggle("is-active", catalogState.series === id);
    button.setAttribute("aria-pressed", String(catalogState.series === id));
    button.dataset.series = id;
    button.disabled = count === 0;
    button.innerHTML = `<span>${label}</span><span class="category-count">${count}</span>`;
    categoryFilters.append(button);
  });

  productGrid.replaceChildren(
    ...pageProducts.map((product) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.dataset.name = product.name;
      card.dataset.price = String(product.priceCents / 100);
      card.innerHTML = `
        <div class="product-art">
          <button class="product-image-button" type="button" data-open-lightbox="${product.id}" aria-label="Bekijk ${product.name} in groot formaat">
            <img class="product-image" src="${product.image}" alt="${product.alt}" width="1100" height="1100" loading="lazy" />
          </button>
        </div>
        <div class="product-info">
          <div class="meta-row">
            <span class="tag">${seriesLabels[product.series] || seriesLabels.none}</span>
            <span class="price">${formatMoney(product.priceCents)}</span>
          </div>
          <h3>${product.name}</h3>
          <button class="card-button" type="button" data-add-product="${product.id}" aria-label="Voeg ${product.name} toe aan winkelmand">In winkelmand</button>
          <p class="product-shipping-note">Gratis verzending vanaf 5 stuks</p>
        </div>
      `;
      return card;
    }),
  );

  const end = Math.min(start + pageProducts.length, activeProducts.length);
  resultsCount.textContent = activeProducts.length
    ? `Resultaat ${start + 1}–${end} van ${activeProducts.length} boekenleggers`
    : "Geen boekenleggers gevonden";
  productPagination.replaceChildren();
  if (pageCount > 1) {
    for (let page = 1; page <= pageCount; page += 1) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "page-button";
      button.textContent = String(page);
      button.setAttribute("aria-label", `Pagina ${page}`);
      if (page === catalogState.page) button.setAttribute("aria-current", "page");
      button.dataset.page = String(page);
      productPagination.append(button);
    }
  }
}

renderCatalog();

function showLightboxProduct() {
  const product = lightboxProducts[lightboxIndex];
  if (!product) return;
  lightboxImage.src = product.image;
  lightboxImage.alt = product.alt;
  lightboxName.textContent = product.name;
  lightboxPosition.textContent = `${lightboxIndex + 1} / ${lightboxProducts.length}`;
  productLightbox.querySelector("[data-lightbox-add]").dataset.productId = product.id;
}

function openLightbox(productId, trigger) {
  lightboxProducts = getVisibleProducts();
  lightboxIndex = lightboxProducts.findIndex((product) => product.id === productId);
  if (lightboxIndex < 0) return;
  lightboxReturnFocus = trigger;
  showLightboxProduct();
  productLightbox.showModal();
  productLightbox.querySelector("[data-lightbox-close]").focus();
}

function moveLightbox(direction) {
  if (!lightboxProducts.length) return;
  lightboxIndex = (lightboxIndex + direction + lightboxProducts.length) % lightboxProducts.length;
  showLightboxProduct();
}

productGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-lightbox]");
  if (trigger) openLightbox(trigger.dataset.openLightbox, trigger);
});

productLightbox.querySelector("[data-lightbox-close]").addEventListener("click", () => {
  productLightbox.close();
});
productLightbox.querySelector("[data-lightbox-previous]").addEventListener("click", () => {
  moveLightbox(-1);
});
productLightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => {
  moveLightbox(1);
});
productLightbox.querySelector("[data-lightbox-add]").addEventListener("click", (event) => {
  const button = event.currentTarget;
  addProduct(button.dataset.productId);
  button.classList.add("is-added");
  button.querySelector("span").textContent = "Toegevoegd ✓";
  window.setTimeout(() => {
    button.classList.remove("is-added");
    button.querySelector("span").textContent = "In winkelmand";
  }, 1200);
});
productLightbox.addEventListener("click", (event) => {
  if (event.target === productLightbox) productLightbox.close();
});
productLightbox.addEventListener("close", () => {
  lightboxReturnFocus?.focus();
  lightboxReturnFocus = null;
});

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return Object.fromEntries(
      Object.entries(saved).filter(
        ([id, quantity]) =>
          Object.hasOwn(products, id) &&
          Number.isInteger(quantity) &&
          quantity > 0 &&
          quantity <= 99,
      ),
    );
  } catch (error) {
    console.warn("The saved shopping cart could not be read.", error);
    return {};
  }
}

function persistCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("The shopping cart could not be saved locally.", error);
  }
}

function formatMoney(cents) {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

function getQuantity() {
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
}

function addProduct(id, quantity = 1) {
  if (!products[id]) return;
  cart[id] = Math.min(99, (cart[id] || 0) + quantity);
  persistCart();
  renderCart();
  animateCart();
}

function renderCart() {
  const quantity = getQuantity();
  const subtotalCents = quantity * ITEM_PRICE_CENTS;
  const shippingCents =
    quantity === 0 || quantity >= FREE_SHIPPING_QUANTITY
      ? 0
      : SHIPPING_PRICE_CENTS;
  const totalCents = subtotalCents + shippingCents;

  cartCount.textContent = String(quantity);
  cartCount.setAttribute("aria-label", `${quantity} boekenleggers in winkelmandje`);
  cartItems.replaceChildren();

  for (const [id, itemQuantity] of Object.entries(cart)) {
    const product = products[id];
    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${product.image}" alt="${product.alt}" width="64" height="80" />
      <div class="cart-item-main">
        <h3>${product.name}</h3>
        <p>${formatMoney(product.priceCents)} per stuk</p>
        <div class="quantity-control" aria-label="Aantal ${product.name}">
          <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Een ${product.name} minder">−</button>
          <span>${itemQuantity}</span>
          <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Een ${product.name} meer">+</button>
        </div>
      </div>
      <button class="remove-item" type="button" data-cart-action="remove" data-product-id="${id}">Verwijderen</button>
    `;
    cartItems.append(row);
  }

  if (quantity === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "cart-empty";
    emptyMessage.textContent = "Je winkelmandje is nog leeg.";
    cartItems.append(emptyMessage);
  }

  cartQuantity.textContent = String(quantity);
  cartSubtotal.textContent = formatMoney(subtotalCents);
  cartShipping.textContent =
    quantity === 0
      ? "—"
      : quantity >= FREE_SHIPPING_QUANTITY
        ? "Gratis"
        : formatMoney(SHIPPING_PRICE_CENTS);
  cartTotal.textContent = formatMoney(totalCents);

  const remaining = Math.max(0, FREE_SHIPPING_QUANTITY - quantity);
  shippingProgressText.textContent =
    quantity >= FREE_SHIPPING_QUANTITY
      ? "Je verzending is gratis!"
      : `Nog ${remaining} ${remaining === 1 ? "stuk" : "stuks"} voor gratis verzending!`;
  shippingProgress.setAttribute("aria-valuenow", String(Math.min(quantity, FREE_SHIPPING_QUANTITY)));
  shippingProgressBar.style.width = `${Math.min(quantity / FREE_SHIPPING_QUANTITY, 1) * 100}%`;
}

function openCart() {
  cartPanel.hidden = false;
  cartBackdrop.hidden = false;
  cartTrigger.setAttribute("aria-expanded", "true");
  document.body.classList.add("cart-open");
  cartPanel.querySelector("[data-close-cart]").focus();
}

function closeCart() {
  cartPanel.hidden = true;
  cartBackdrop.hidden = true;
  cartTrigger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("cart-open");
  cartTrigger.focus();
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-product]");
  if (!button) return;
  addProduct(button.dataset.addProduct);
  button.classList.add("is-added");
  button.textContent = "Toegevoegd ✓";
  window.setTimeout(() => {
    button.classList.remove("is-added");
    button.textContent = "In winkelmand";
  }, 900);
});

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-series]");
  if (!button) return;
  catalogState.series = button.dataset.series;
  catalogState.page = 1;
  renderCatalog();
});

productPagination.addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button) return;
  catalogState.page = Number(button.dataset.page);
  renderCatalog();
  productGrid.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "start" });
});

productSort.addEventListener("change", () => {
  catalogState.sort = productSort.value;
  catalogState.page = 1;
  renderCatalog();
});

document.querySelector("[data-add-giftbox]").addEventListener("click", () => {
  const existingQuantity = Object.values(cart).reduce((sum, value) => sum + value, 0);
  if (existingQuantity + 5 > 99) {
    window.alert("Je winkelmandje kan maximaal 99 boekenleggers bevatten.");
    return;
  }
  addProduct(giftboxProductId, 5);
  openCart();
});

cartTrigger.addEventListener("click", openCart);
cartPanel.querySelector("[data-close-cart]").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const { productId, cartAction } = button.dataset;
  if (cartAction === "remove") {
    delete cart[productId];
  } else if (cartAction === "decrease") {
    cart[productId] -= 1;
    if (cart[productId] <= 0) delete cart[productId];
  } else if (cartAction === "increase") {
    cart[productId] = Math.min(99, cart[productId] + 1);
  }
  persistCart();
  renderCart();
});

termsAccepted.addEventListener("change", () => {
  checkoutButton.disabled = !termsAccepted.checked;
});

checkoutButton.addEventListener("click", () => {
  if (!termsAccepted.checked) return;
  window.alert("Dit is een demo. Online betalen en bestellen is nog niet beschikbaar.");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartPanel.hidden) closeCart();
  if (!productLightbox.open) return;
  if (event.key === "Escape") {
    productLightbox.close();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveLightbox(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveLightbox(1);
  }
});

renderCart();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
document.documentElement.classList.add("js");

function setupRevealAnimations() {
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
  );
  document
    .querySelectorAll(".section-heading, .product-card, .gift-layout, .info-grid .panel, .faq details")
    .forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
      observer.observe(element);
    });
}

function animateHeroTitle() {
  if (reducedMotion.matches) return;
  const title = document.getElementById("heroTitle");
  const words = title.textContent.trim().split(/\s+/);
  const accessibleText = document.createElement("span");
  accessibleText.className = "sr-only";
  accessibleText.textContent = words.join(" ");
  const animatedWords = document.createElement("span");
  animatedWords.setAttribute("aria-hidden", "true");
  animatedWords.className = "hero-title-words";
  words.forEach((word, index) => {
    const wordElement = document.createElement("span");
    wordElement.className = "hero-title-word";
    wordElement.style.setProperty("--word-delay", `${index * 100}ms`);
    wordElement.textContent = word;
    animatedWords.append(wordElement, document.createTextNode(" "));
  });
  title.replaceChildren(accessibleText, animatedWords);
}

function animateCart() {
  const icon = cartTrigger.querySelector(".cart-icon");
  icon.classList.remove("is-bouncing");
  void icon.offsetWidth;
  icon.classList.add("is-bouncing");
  icon.addEventListener("animationend", () => icon.classList.remove("is-bouncing"), {
    once: true,
  });
}

function addHeartBurst(button) {
  if (reducedMotion.matches) return;
  const symbols = ["♥", "✦", "♥", "✧", "♥", "✦"];
  symbols.forEach((symbol, index) => {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = symbol;
    heart.style.setProperty("--burst-index", String(index));
    button.append(heart);
    window.setTimeout(() => heart.remove(), 900);
  });
}

document.querySelectorAll("[data-add-product], [data-add-giftbox]").forEach((button) => {
  button.addEventListener("click", () => addHeartBurst(button));
});

if (!reducedMotion.matches) {
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") return;
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${y * -5}deg`);
      card.style.setProperty("--tilt-y", `${x * 6}deg`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    });
  });

  const scene = document.querySelector(".product-scene");
  scene.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = scene.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    scene.style.setProperty("--parallax-x", `${offsetX * 10}px`);
    scene.style.setProperty("--parallax-y", `${offsetY * 8}px`);
  });
  scene.addEventListener("pointerleave", () => {
    scene.style.removeProperty("--parallax-x");
    scene.style.removeProperty("--parallax-y");
  });
}

window.addEventListener(
  "scroll",
  () => document.querySelector(".topbar").classList.toggle("is-compact", window.scrollY > 24),
  { passive: true },
);

setupRevealAnimations();
animateHeroTitle();
