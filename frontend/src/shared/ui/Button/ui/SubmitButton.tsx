import React from "react";

interface SubmitButtonProps {
  text: string;
  className?: string;
  disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  className = "",
  disabled = false
}) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`
        bg-accent
        text-white 
        text-[20px]
        font-bold
        rounded-[5px] 
        hover:opacity-90 
        transition 
        h-[52px]
        w-[100%]
        ${className}
      `}
    >
      {text}
    </button>
  );
};
