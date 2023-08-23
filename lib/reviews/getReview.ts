import { readFileSync } from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { join } from "path";
import { marked } from "marked";

const reviewPath = "/content/reviews/";

function getReview<T>(slug: string): T {
  try {
    const text = readFileSync(
      join(process.cwd(), reviewPath, slug + ".md"),
      "utf-8"
    );

    const parseData: GrayMatterFile<string> = matter(text);
    parseData.data.html = marked(parseData.content);
    parseData.data.slug = slug;
    return parseData.data as T;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default getReview;
