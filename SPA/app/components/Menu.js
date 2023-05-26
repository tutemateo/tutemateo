export function Menu() {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <span>-</span>
  <a href="#/about-me">About me</a>
  <span>-</span>
  <a href="#/contacto">Comments</a>
  <span>-</span>
  `;
  return $menu;
}
