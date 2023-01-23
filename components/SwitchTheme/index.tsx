import { Switch } from "@material-tailwind/react";
import { HTMLAttributes, useEffect, useState } from "react";
import { changeTheme } from "@/utils/ChangedTheme";

export function SwitchTheme({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    changeTheme({ darkTheme })
  }, [darkTheme]);

  return (
    <div {...rest}>
      <div className="max-w-4xl flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 p-3 rounded-xl">
        <Switch 
          onChange={() => setDarkTheme(!darkTheme)}
          checked={darkTheme}
          color="gray"
          ripple={false}
          id="change-theme"
        />
        <label htmlFor="change-theme" className="text-gray-800 dark:text-gray-100">Tema escuro</label>
      </div>
    </div>
  )
}