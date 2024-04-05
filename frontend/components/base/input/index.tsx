"use client";
import { RandomHash } from "@/utils/generic";
import React, { InputHTMLAttributes } from "react";
import InputPassword from "./inputPassword";

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "after" | "before";
  error?: string;
  success?: boolean;
}

const Input = ({
  id = RandomHash(),
  iconPosition = "before",
  placeholder,
  type,
  label,
  error,
  success,
  icon,
  ...props
}: Params) => {
  const defaultPlaceholder = () => {
    if (placeholder) {
      return placeholder;
    }

    switch (type) {
      case "search":
        return "Pesquisar";
    }
  };

  const inputTypeElement = () => {
    switch (type) {
      case "password":
        return <InputPassword placeholder={defaultPlaceholder()} {...props} />;
      default:
        return (
          <input type={type} placeholder={defaultPlaceholder()} {...props} />
        );
    }
  };

  return (
    <div className="inputWrapper">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}
      <div
        data-test={`input-${id}`}
        className={`inputIconWrapper ${error ? "error" : ""} ${
          success ? "success" : ""
        }`}
      >
        {icon && iconPosition === "before" && icon}
        {inputTypeElement()}
        {icon && iconPosition === "after" && icon}
      </div>
      {error && (
        <small className="mt-2 text-sm text-red-600 dark:text-red-500">
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
