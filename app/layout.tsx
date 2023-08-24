import CustomLink from "@Components/CustomLink";
import NavBar from "@Components/NavBar";
import { exo2, orbitron } from "@Font";
import type { LayoutProps } from "@Types";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
config.autoAddCss = false;

// Help to update head tag
export const metadata = {
  title: {
    default: "VIE Game",
    template: "%s | VIE Game",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-white flex flex-col px-8 py-8 min-h-screen">
        <header className="border-b border-gray-300">
          <NavBar />
        </header>

        <main className="grow py-3">{children}</main>

        <footer className="border-t py-3 text-center text-slate-500 text-xs border-gray-300">
          Game data and images from
          <CustomLink
            href="https://rawg.io/"
            target="_blank"
            className="font-bold ml-1"
          >
            RAWG
          </CustomLink>{" "}
          | Deploy on{" "}
          <CustomLink
            href="https://vercel.com/"
            target="_blank"
            className="font-bold ml-1"
          >
            Vercel
          </CustomLink>
        </footer>
      </body>
    </html>
  );
}
