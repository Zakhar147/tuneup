import React from "react";
import { IconProps } from "./type";

const DropdownIcon: React.FC<IconProps> = ({
    width = "100%",
    height = "100%",
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 23 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9999 18.7071L-7.55191e-05 7.70711L0.707031 7L11.707 18L10.9999 18.7071Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9999 18.7072L21.9999 7.7072L22.707 8.41431L11.707 19.4143L10.9999 18.7072Z"
        />
      </svg>
    );
  };
  
export default DropdownIcon;