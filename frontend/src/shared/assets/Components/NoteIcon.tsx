import React from "react";
import { IconProps } from "./type";

export const NoteIcon: React.FC<IconProps> = ({
  color = "#000000",
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon
        points="42.31 13.38 17.21 16.86 17.21 7.98 42.31 4.5 42.31 13.38"
        fill="none"
      />
      <line x1="42.31" y1="13.38" x2="42.31" y2="30.53" />
      <line x1="17.21" y1="16.86" x2="17.21" y2="37.74" />
      <circle cx="11.45" cy="37.74" r="5.76" />
      <circle cx="36.55" cy="30.53" r="5.76" />
    </svg>
  );
};