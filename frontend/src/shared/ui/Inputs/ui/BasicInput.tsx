import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  maxLen?: number;
}

export const BasicInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ placeholder, type = "text", maxLen, ...rest }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (type == "number") {
        const allowedKeys = [
          "Backspace",
          "Tab",
          "ArrowLeft",
          "ArrowRight",
          "Delete",
          "Enter",
        ];
        const isDigit = /^[0-9]$/.test(e.key);

        if (!isDigit && !allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
      }
    };
    return (
      <input
        {...rest}
        ref={ref}
        placeholder={placeholder}
        type={maxLen ? "text" : type}
        onKeyDown={handleKeyDown}
        maxLength={maxLen}
        className="
          appearance-none bg-transparent outline-none w-full h-[50px]
          border border-light-inputBorder dark:border-dark-inputBorder rounded-[5px] 
          pl-[10px] py-[8px] text-[16px] text-light-textSecond dark:text-dark-textSecond
          placeholder:text-light-textSecond/70 dark:placeholder:text-dark-textSecond/40
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
          [-moz-appearance:textfield]
        "
      />
    );
  }
);

BasicInput.displayName = "BasicInput";
