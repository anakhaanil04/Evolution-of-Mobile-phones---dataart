export function initThemeToggle(): void {
  const themeToggle = document.getElementById("themeToggle") as HTMLButtonElement;
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}
