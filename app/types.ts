import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ReviewProps {
  title: string;
  date: string;
  image: string;
  html: string;
  slug: string;
}
