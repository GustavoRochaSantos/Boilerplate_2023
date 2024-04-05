import { RandomHash } from "@/utils/generic";
import React, { HTMLAttributes } from "react";

interface Params extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

const Card = ({ children, title, id = RandomHash(), ...props }: Params) => {
  return (
    <div
      className="bg-white shadow-lg rounded-md border-gray-100 border-2"
      {...props}
      data-test={`card-${id}`}
    >
      {title && (
        <div
          className="border-b-2 mb-2 px-7 py-4 font-bold"
          data-test={`card-title-${id}`}
        >
          {title}
        </div>
      )}
      <div className="p-7" data-test={`card-body-${id}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
