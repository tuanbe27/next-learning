import { readdirSync } from "fs";
import { join } from "path";

export const ListSlugs = () => {
  const listSlugs = readdirSync(join(process.cwd(), "/content/reviews"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.split(".md")[0]);
  return listSlugs;
};
