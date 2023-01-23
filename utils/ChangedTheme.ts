import { ChangeThemeProps } from "@/types/ChangeThemeProps"

export function changeTheme({ darkTheme }: ChangeThemeProps) {
  darkTheme ? 
  document.documentElement.classList.add('dark') :
  document.documentElement.classList.remove('dark');

  localStorage.setItem('theme', 'dark')
}

// function setLocalStorageTheme(theme) {

// }