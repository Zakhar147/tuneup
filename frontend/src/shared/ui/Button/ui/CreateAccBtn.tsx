import React from "react";
import { NavLink } from "react-router-dom";

interface Button {
  text: string;
  link?: string;
  onClick?: () => void;
}

export const Button: React.FC<Button> = ({ text, link = "", onClick }) => {
  return (
    <NavLink to={link} end>
      <button
        onClick={onClick}
        className="md:max-w-[250px] py-[8px] px-[28px] border border-accent rounded-[15px] text-textMain dark:text-dark-textMain font-bold text-[18px]"
      >
        {text}
      </button>
    </NavLink>
  );
};
