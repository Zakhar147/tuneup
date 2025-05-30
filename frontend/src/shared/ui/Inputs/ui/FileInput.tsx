import React, { useRef, useState } from "react";

interface FileInputProps {
  onChange?: (file: File | null) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ onChange }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("Choose tabs file");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file?.name || "Choose tabs file");
    onChange!(file);
  };

  return (
    <div
      onClick={() => fileRef.current?.click()}
      className="
      w-full h-[50px] cursor-pointer 
      flex items-center justify-between px-3
      border border-light-inputBorder dark:border-dark-inputBorder rounded-[5px]
      text-[16px] text-light-textSecond/70 dark:text-dark-textSecond/40 bg-transparent"
    >
      <span className="truncate">{fileName}</span>
      <span className="text-sm text-light-textSecond dark:text-dark-textSecond">Browse</span>
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept=".gp,.gp5,.gpx,.pdf"
      />
    </div>
  );
};
