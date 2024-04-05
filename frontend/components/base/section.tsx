import React from "react";

interface Params {
  children: React.ReactNode;
  extraClass?: string;
}

const Section = ({ children, extraClass = "" }: Params) => {
  return <section className={`${extraClass}`}>{children}</section>;
};

export default Section;
