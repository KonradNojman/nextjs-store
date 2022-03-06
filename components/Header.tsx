import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gray-700 text-white text-2xl font-bold p-6">
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
