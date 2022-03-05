import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Next.js Shop</title>
        <meta name="description" content="Next.js online shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow p-6">Main content</main>
      <Footer />
    </div>
  );
};

export default Home;
