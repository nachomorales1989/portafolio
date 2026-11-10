
/* =====================================
   1. MENÚ RESPONSIVE
===================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );
    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });

    });
}

/* =====================================
   2. BUSCADOR
===================================== */

const searchForm = document.querySelector("#searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const searchInput = document.querySelector("#searchInput");
        const searchValue = searchInput.value.trim();

        if (searchValue) {
            alert("Buscando: " + searchValue);
        } else {
            alert("Por favor, escribe algo para buscar.");
        }

    });
}

/* =====================================
   3. FORMULARIO DE CONTACTO
===================================== */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !subject || !message) {
            return;
        }

        console.log("Mensaje de contacto:", {
            name,
            email,
            subject,
            message
        });

        const formMessage = document.querySelector("#formMessage");

        formMessage.textContent =
            "¡Gracias por escribirme! Tu mensaje ha sido registrado.";

        contactForm.reset();

    });

}
