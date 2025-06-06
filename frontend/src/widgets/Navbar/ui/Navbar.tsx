import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { useLogout } from "@features/logout";

import { useAuthStore } from "@entities/User";

import { ThemeToggler } from "@shared/ui/Theme";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import { Link } from "@shared/ui/Link";
import { LogoutIcon } from "@shared/assets/Components/LogoutIcon";

export const Navbar: React.FC = () => {
  const { auth } = useAuthStore();
  const { onLogout } = useLogout();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "transition-colors",
      isActive
        ? "text-accent font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-accent"
    );

  return (
    <header
      className="w-full py-4 px-6 md:px-[60px] fixed top-0 left-0 z-50 backdrop-blur-md bg-transparent"
      style={{ boxShadow: "0 2px 28px 0 rgba(0, 0, 0, 0.05)" }}
    >
      <FlexBox justify="between" align="center">
        {/* Logo */}
        <Typography className="text-[24px] md:text-[32px]" as="h1">
          <Link
            href="/"
            hrefText="TuneUp"
            colorClassName="text-light-textMain dark:text-dark-textMain"
          />
        </Typography>

        {/* Mobile menu button */}
        <div className="md:hidden text-light-textMain dark:text-dark-textMain">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop nav */}
        <FlexBox
          justify="center"
          className="gap-6 hidden md:flex"
        >
          {auth && (
            <>
              <NavLink to="/songs" className={navLinkClass}>
                Songs
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/add-song" className={navLinkClass}>
                Add Song
              </NavLink>
            </>
          )}
        </FlexBox>

        {/* Desktop controls */}
        <FlexBox justify="end" align="center" className="gap-4 hidden md:flex">
          {auth ? (
            <>
              <ThemeToggler />
              <button
                onClick={onLogout}
                className="p-1 max-w-[40px] cursor-pointer"
              >
                <LogoutIcon className="text-black dark:text-white" />
              </button>
            </>
          ) : (
            <>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink to="/registration" className={navLinkClass}>
                Registration
              </NavLink>
              <ThemeToggler />
            </>
          )}
        </FlexBox>
      </FlexBox>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {auth ? (
            <>
              <NavLink to="/songs" className={navLinkClass}>
                Songs
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/add-song" className={navLinkClass}>
                Add Song
              </NavLink>
              <ThemeToggler />
              <button
                onClick={onLogout}
                className="flex items-center gap-2 text-red-600 mt-2"
              >
                <LogoutIcon className="w-5 h-5" />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink to="/registration" className={navLinkClass}>
                Registration
              </NavLink>
              <ThemeToggler />
            </>
          )}
        </div>
      )}
    </header>
  );
};
