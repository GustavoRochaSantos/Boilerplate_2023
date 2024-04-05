import { RandomHash } from "@/utils/generic";
import React, { FormHTMLAttributes } from "react";

interface Params extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode | React.ReactNode[];
}

const Form = ({ children, id = RandomHash(), ...props }: Params) => {
  return (
    <form
      className="w-72 flex flex-col gap-2"
      {...props}
      data-test={`form-${id}`}
    >
      {children}
    </form>
  );
};

export default Form;
