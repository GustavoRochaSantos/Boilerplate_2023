"use client";
import { EyeClosed } from "@phosphor-icons/react/dist/ssr";
import { InputHTMLAttributes, useState } from "react";
import Icon from "../icon";

interface Params extends InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = ({ ...props }: Params) => {
  const [viewPassword, setviewPassword] = useState(false);

  return (
    <>
      <input type={viewPassword ? "text" : "password"} {...props} />
      <div onClick={() => setviewPassword(!viewPassword)}>
        {viewPassword ? <Icon name="Eye" /> : <Icon name="EyeClosed" />}
      </div>
    </>
  );
};

export default InputPassword;
