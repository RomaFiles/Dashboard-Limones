const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menu) => menu.classList.remove("active"));
    item.classList.add("active");
  });
});
