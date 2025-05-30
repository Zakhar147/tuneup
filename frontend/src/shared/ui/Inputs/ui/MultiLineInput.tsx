import React from "react";

interface MultilineInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const MultilineInput = React.forwardRef<
  HTMLTextAreaElement,
  MultilineInputProps
>(({ ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      rows={15}
      className="
        appearance-none bg-transparent outline-none w-full
        border border-light-inputBorder dark:border-dark-inputBorder rounded-[5px]
        py-[8px] text-[18px] resize-y
        text-light-textSecond dark:text-dark-textSecond
        placeholder:text-light-textSecond/70 dark:placeholder:text-dark-textSecond/40
      "
    />
  );
});

MultilineInput.displayName = "MultilineInput";
