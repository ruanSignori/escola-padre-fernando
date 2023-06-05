export function changeTheme(darkTheme: boolean): void {
  if (darkTheme) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    return;
  }

  document.documentElement.classList.remove("dark");
  localStorage.removeItem("theme");
}
