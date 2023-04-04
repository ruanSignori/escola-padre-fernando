import { ChangeThemeProps } from "@/types/ChangeThemeProps";

export function changeTheme({ darkTheme }: ChangeThemeProps) {
  if (darkTheme) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    return;
  }

  document.documentElement.classList.remove("dark");
  localStorage.removeItem("theme");
}
