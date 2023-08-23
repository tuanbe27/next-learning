import { LayoutProps } from "@Types";
import { Metadata } from "next/types";

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
