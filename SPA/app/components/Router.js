import { ContactForm } from "./ContactForm.js";
import { Home } from "./Home.js";
import { Info } from "./Info.js";

export function Router() {
  const d = document,
    $main = d.getElementById("main");

  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    $main.appendChild(Home());
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
  } else if (hash === "#/about-me") {
    $main.appendChild(Info());
  }
}
