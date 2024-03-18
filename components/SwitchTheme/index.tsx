import { Switch } from "@material-tailwind/react";
import { HTMLAttributes, useEffect, useState } from "react";
import { changeTheme } from "@/functions/ChangeTheme";

export function SwitchTheme({ ...rest }: HTMLAttributes<HTMLDivElement>) {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const storage = localStorage.getItem("theme");

    if (!storage) {
      return setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    changeTheme(darkTheme);
  }, [darkTheme]);

  return (
    <div {...rest}>
      <div className="max-w-4xl flex items-center justify-center gap-2 bg-gray-100 dark:bg-zinc-700 py-3 px-5 rounded-xl transition-colors">
        <Switch
        crossOrigin=""
          onChange={() => setDarkTheme(!darkTheme)}
          checked={darkTheme}
          color="gray"
          ripple={false}
          id="change-theme"
        />
        <label
          htmlFor="change-theme"
          className="text-gray-900 dark:text-gray-100"
        >
          Tema escuro
        </label>
      </div>
    </div>
  );
}
