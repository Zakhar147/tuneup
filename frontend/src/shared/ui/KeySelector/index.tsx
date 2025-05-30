import DropdownIcon from "@shared/assets/Components/DropdownIcon";
import { useState } from "react";

const allKeys = ["A", "B", "C", "D", "E", "F", "G"];

type KeySelectorProps = {
  originalKey: string;
};

const KeySelector: React.FC<KeySelectorProps> = ({ originalKey }) => {
  const [selectedKey, setSelectedKey] = useState(originalKey);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="border w-[130px] h-[40px] border-accent text-light-textMain dark:text-dark-textMain px-4 py-1 rounded-full flex justify-center items-center gap-[20px] hover:bg-orange-500 hover:bg-opacity-10 transition"
      >
        <span className="text-lg">Key: {selectedKey}</span>
        <DropdownIcon width={'20px'} />
      </button>

      {open && (
        <div className="absolute z-10 top-full mt-2 bg-transparent border border-accent rounded-lg shadow-md w-[130px]">
          {allKeys.map((key) => (
            <div
              key={key}
              onClick={() => {
                setSelectedKey(key);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-hoverBg text-light-textMain dark:text-dark-textMain"
            >
              {key}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KeySelector;