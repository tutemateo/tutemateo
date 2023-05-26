import { Main } from "./components/Main.js";
import { Header } from "./components/Header.js";
import { Router } from "./components/Router.js";
import { Info } from "./components/Info.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  Router();
}
