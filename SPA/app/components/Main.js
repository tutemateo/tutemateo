export function Main(props) {
  const $main = document.createElement("main");
  $main.id = "main";

  if (!location.hash.includes("#/search")) $main.classList.add("grid-fluid");

  return $main;
}
