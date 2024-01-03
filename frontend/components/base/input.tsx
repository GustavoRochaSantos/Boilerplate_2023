import React, { InputHTMLAttributes } from "react";

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "after" | "before";
}

const Input = ({ iconPosition = "before", ...props }: Params) => {
  const defaultPlaceholder = () => {
    if (props.placeholder) {
      return props.placeholder;
    }

    switch (props.type) {
      case "search":
        return "Pesquisar";
    }
  };

  return (
    <div>
      {props.label && (
        <label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {props.label}
        </label>
      )}
      <div
        data-test={`input-${props.id}`}
        className="flex justify-center items-center gap-1 bg-white p-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md mb-2"
      >
        {props.icon && iconPosition === "before" && props.icon}
        <input
          type={props.type}
          placeholder={defaultPlaceholder()}
          className="w-full block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
        />
        {props.icon && iconPosition === "after" && props.icon}
      </div>
    </div>
  );
};

export default Input;
