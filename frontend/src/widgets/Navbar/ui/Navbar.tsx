import { useAuthStore } from "@entities/User";
import { useLogout } from "@features/logout";

import { ThemeToggler } from "@shared/ui/Theme";
import { FlexBox } from "@shared/ui/FlexBox";
import { Typography } from "@shared/ui/Typography";
import { Link } from "@shared/ui/Link";
import { LogoutIcon } from "@shared/assets/Components/LogoutIcon";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const { auth } = useAuthStore();
  const { onLogout } = useLogout();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "transition-colors",
      isActive
        ? "text-accent font-semibold"
        : "text-gray-700 dark:text-gray-300 hover:text-accent"
    );

  return (
    <header
      className="w-full py-[30px] px-[60px] fixed top-0 left-0 z-50 backdrop-blur-md bg-transparent"
      style={{ boxShadow: "0 2px 28px 0 rgba(0, 0, 0, 0.05)" }}
    >
      <FlexBox justify="between" align="center">
        <Typography className="text-[32px]" as="h1">
          <Link
            href="/"
            hrefText="TuneUp"
            colorClassName="text-light-textMain dark:text-dark-textMain"
          />
        </Typography>

        {auth && (
          <FlexBox justify="center" className="gap-[30px]">
            <Typography className="text-[16px] font-medium" pointer>
              <NavLink to="/songs" className={navLinkClass}>
                Songs
              </NavLink>
            </Typography>
            <Typography className="text-[16px] font-medium" pointer>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </Typography>
            <Typography className="text-[16px] font-medium" pointer>
              <NavLink to="/add-song" className={navLinkClass}>
                Add Song
              </NavLink>
            </Typography>
          </FlexBox>
        )}

        <FlexBox justify="end" align="center" className="gap-[30px]">
          {auth ? (
            <>
              <ThemeToggler />
              <button
                onClick={onLogout}
                className="p-[7px] max-w-[40px] cursor-pointer"
              >
                <LogoutIcon className="text-black dark:text-white" />
              </button>
            </>
          ) : (
            <>
              <Typography className="text-[16px] font-medium" pointer>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                <NavLink to="/login" className={navLinkClass}>
                  Login
                </NavLink>
              </Typography>
              <Typography className="text-[16px] font-medium" pointer>
                <NavLink to="/registration" className={navLinkClass}>
                  Registration
                </NavLink>
              </Typography>
              <ThemeToggler />
            </>
          )}
        </FlexBox>
      </FlexBox>
    </header>
  );
};
