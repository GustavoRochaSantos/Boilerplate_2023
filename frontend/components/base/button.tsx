import { Spinner } from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface Params {
  type?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "after" | "before";
  loading?: Boolean;
}

const Button = ({
  type = "primary",
  children,
  icon,
  iconPosition = "before",
  loading = false,
}: Params) => {
  if (loading) {
    return (
      <button className="btn">
        <Spinner size={30} className="animate-spin" />
      </button>
    );
  }

  return (
    <button className={`btn ${type} `}>
      {icon && iconPosition === "before" && icon}
      {children}
      {icon && iconPosition === "after" && icon}
    </button>
  );
};

export default Button;
