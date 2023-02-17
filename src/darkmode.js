export function darkMode() {
  const root = document.querySelector("html");
  const btn = document.querySelector("#toogle-btn");

  //toggle funktionalitet

  function toggleTheme() {
    root.classList.toggle("dark");
  }

  btn.addEventListener("click", toggleTheme);
}
