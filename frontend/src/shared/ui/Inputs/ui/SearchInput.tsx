import React from "react";

import { SearchIcon } from "@shared/assets/Components/SearchIcon";

interface SearchInputProps {
  placeholder: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <div className="flex bg-transparent items-center w-full max-w-[350px] h-[45px] px-[30px] border  border-accent rounded-full ">
      <div className="w-6 h-6 mr-3">
        <SearchIcon className="text-[#555555] dark:text-[#AAAAAA]" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent outline-none text-[#555555] dark:text-[#AAAAAA] text-[14px] placeholder-light-textSecond dark:placeholder-dark-textSecond w-full"
      />
    </div>
  );
};