import CustomLink from "./CustomLink";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <CustomLink href="/" className="font-extrabold">
            VIE Game Reviewer
          </CustomLink>
        </li>
        <li className="ml-auto">
          <CustomLink href="/reviews" className="font-semibold">
            Reviews
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/about" className="font-semibold" prefetch={false}>
            About
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}
