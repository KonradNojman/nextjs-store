import { ReactNode } from "react";
import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Next.js Shop</title>
        <meta name="description" content="Next.js online shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow p-6">{children}</main>
      <Footer />
    </div>
  );
}
