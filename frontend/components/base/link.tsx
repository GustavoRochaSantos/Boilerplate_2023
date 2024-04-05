import NextLink, { LinkProps } from "next/link";
import React from "react";

interface Params extends LinkProps {
  children: React.ReactNode;
}

const Link = ({ children, ...rest }: Params) => {
  return <NextLink {...rest}>{children}</NextLink>;
};

export default Link;
