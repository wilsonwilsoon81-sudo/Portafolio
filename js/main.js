// ═════════════════════════════════════════════════════════════
// 🔹 1. MENÚ HAMBURGUESA PARA MÓVIL
// ═════════════════════════════════════════════════════════════

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
      }
    });
  });
}

// ═════════════════════════════════════════════════════════════
// 🔹 2. EFECTO NAVBAR AL HACER SCROLL
// ═════════════════════════════════════════════════════════════

const navbar = document.querySelector(".navbar");

if (navbar) {
  const updateNavbar = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
}

// ═════════════════════════════════════════════════════════════
// 🔹 3. SCROLL SUAVE PARA ANCLAS (CON href="#" → TOP)
// ═════════════════════════════════════════════════════════════

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    // ← ← ← NUEVO: Si href="#" → scroll al inicio
    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return; // ← ← ← Salir para no ejecutar código adicional
    }

    // Validación de seguridad para otros casos inválidos
    if (!targetId || targetId.length <= 1) {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Compensar altura del navbar fijo
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        10;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
