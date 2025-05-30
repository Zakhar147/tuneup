import { IconProps } from "./type";

export const CheckMark: React.FC<IconProps> = ({
  color = "#E95420",
  width = "100%",
  height = "100%",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.66669 15.1666L13.5 26L37.3334 2.16663"
        stroke={color}
        stroke-width="3"
        stroke-linecap="square"
      />
    </svg>
  );
};