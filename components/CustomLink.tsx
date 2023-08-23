import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  target?: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children, ...props }) => {
  const combineClassName = `text-orange-800 hover:underline font-orbitron ${props.className}`;
  return (
    <Link {...props} className={combineClassName}>
      {children}
    </Link>
  );
};

export default CustomLink;
