import { DarkModeIcon } from "@shared/assets/Components/DarkModeIcon";
import { LightModeIcon } from "@shared/assets/Components/LightModeIcon";

import { useThemeStore } from "../model/useThemeStore";

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="rounded-[100%] p-[8px]  text-white max-w-[40px]">
      {theme === "light" ? (
          <DarkModeIcon/>
      ) : (
          <LightModeIcon />
      )}
    </button>
  );
};