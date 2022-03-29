import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/shopinext.png";
import { CartBar } from "./Cart/CartBar";

export function Header() {
  const router = useRouter();

  const navigationLinks = [
    {
      slug: "/",
      text: "Home",
    },
    {
      slug: "/products",
      text: "Products",
    },
  ];

  return (
    <header className="bg-gray-700 text-white text-xl md:text-2xl font-bold p-6 flex justify-between items-center">
      <div className="w-52 flex items-center">
        <Image src={logo} alt="" />
      </div>
      <div className="flex gap-8 items-center">
        <nav>
          <ul className="flex gap-4 md:gap-6">
            {navigationLinks.map((link, index) => (
              <li
                key={index}
                className={
                  // @todo flaky code
                  `/${router.asPath.split("/")[1]}` === link.slug
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
        <CartBar />
      </div>
    </header>
  );
}
