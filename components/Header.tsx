import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  const navigationLinks = [
    {
      slug: "/",
      text: "Home",
    },
    {
      slug: "/about",
      text: "About",
    },
  ];

  return (
    <header className="bg-gray-700 text-white text-2xl font-bold p-6">
      <nav>
        <ul className="flex gap-6">
          {navigationLinks.map((link, index) => (
            <li
              key={index}
              className={
                router.route === link.slug
                  ? "selected text-blue-400"
                  : "hover:underline"
              }
            >
              <Link href={link.slug}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
