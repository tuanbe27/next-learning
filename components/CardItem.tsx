import { existsSync } from "fs";
import Link from "next/link";
import { join } from "path";
import React, { ReactNode } from "react";

interface CardItemProps {
  children: ReactNode;
  href: string;
  imageUrl: string;
  className?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt?: string;
}

const CardItem: React.FC<CardItemProps> = ({ children, ...props }) => {
  const className = `border w-80 bg-white shadow hover:shadow-xl ${props.className}`;
  const alt = props.imageUrl.split("/images/")[1];
  const checkExist = existsSync(join("public", props.imageUrl));

  return (
    <div className={className}>
      <Link href={props.href} className="flex flex-col">
        <img
          src={checkExist ? props.imageUrl : "/images/default-image.png"}
          alt={props.imageAlt || alt}
          width={props.imageWidth || "320"}
          height={props.imageHeight || "180"}
          className="rounded-t object-contain w-80 h-[180px] sm:rounded-r-none"
        />
        <h2 className="font-orbitron py-2 text-center border-t-2 sm:border-t-0 sm:px-2">
          {children}
        </h2>
      </Link>
    </div>
  );
};

export default CardItem;
