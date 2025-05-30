import React from "react";

import { IconProps } from "./type";

export const SearchIcon: React.FC<IconProps> = ({
    className = "",
    width = "100%",
    height = "100%",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5088 21.4618L28 28M25 13C25 19.6275 19.6275 25 13 25C6.37258 25 1 19.6275 1 13C1 6.37258 6.37258 1 13 1C19.6275 1 25 6.37258 25 13Z"
        stroke={"currentColor"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};