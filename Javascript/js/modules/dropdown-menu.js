export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("click", handleClick);
    menu.addEventListener("touchstart", handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
  }
}
