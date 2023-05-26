import { Menu } from "./Menu.js";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.appendChild(Menu());

  return $header;
}
