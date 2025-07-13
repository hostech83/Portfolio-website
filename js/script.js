const toggleButton = document.querySelector(".navigation-toggle");
const navList = document.querySelector(".navigation-list");

toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
  toggleButton.setAttribute("aria-expanded", !isExpanded);
  navList.classList.toggle("active"); // 👈 shows the nav items
});

document.querySelectorAll(".navigation-list__item").forEach((item) => {
  item.addEventListener("click", () => {
    toggleButton.setAttribute("aria-expanded", "false");
    navList.classList.remove("active");
  });
});
