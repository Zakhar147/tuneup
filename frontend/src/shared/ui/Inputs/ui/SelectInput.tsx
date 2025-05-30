import { Listbox } from "@headlessui/react";
import { Fragment } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  options: Option[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  options,
  placeholder = "Select...",
  value,
  onChange,
}) => {
  const selected = options.find((opt) => opt.value === value) || {
    label: placeholder,
    value: "",
  };

  return (
    <div className="relative w-full">
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button
          className="
            w-full h-[50px] px-[10px] py-[8px] text-[16px] text-left rounded-[5px]
            border border-light-inputBorder dark:border-dark-inputBorder
            bg-transparent outline-none flex items-center justify-between
          "
        >
          <span
            className={`
      ${
        value
          ? "text-light-textSecond dark:text-dark-textSecond"
          : "text-light-textSecond/70 dark:text-dark-textSecond/40"
      }
    `}
          >
            {selected.label}
          </span>
          <svg
            className="w-4 h-4 text-light-textSecond dark:text-dark-textSecond"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Listbox.Button>

        <Listbox.Options
          className="
            absolute z-10 mt-2 w-full max-h-60 overflow-auto rounded-[5px]
            bg-white dark:bg-[#1e1e1e] shadow-lg ring-1 ring-black/10
            focus:outline-none text-[18px]
          "
        >
          {options.map((opt) => (
            <Listbox.Option key={opt.value} value={opt.value} as={Fragment}>
              {({ active }) => (
                <li
                  className={`
                    cursor-pointer select-none px-4 py-2
                    ${
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-gray-800 dark:text-gray-200"
                    }
                  `}
                >
                  {opt.label}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
