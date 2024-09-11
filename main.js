// Lógica de despliegues de contenidos
const menuItems = document.querySelectorAll(".menu-item");
const contentSections = document.querySelectorAll(".content-section");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Quitar la clase 'active' de todos los menús
    menuItems.forEach((menu) => menu.classList.remove("active"));
    // Agregar la clase 'active' al ítem clicado
    item.classList.add("active");

    // Ocultar todas las secciones de contenido
    contentSections.forEach((section) => section.classList.remove("active"));
    // Mostrar la sección de contenido correspondiente al ítem clicado
    contentSections[index].classList.add("active");
  });
});
// Fin de lógica de despliegues de contenidos

// Lógica de botón de perfil
const menuButton = document.querySelector(".profile-menu-btn");
const menu = document.querySelector(".profile-menu");

menuButton.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Opcional: Ocultar el menú si se hace clic fuera de él
document.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});
// Fin de lógica de botón de perfil