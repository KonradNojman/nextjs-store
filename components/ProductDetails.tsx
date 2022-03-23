import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  longDescription: string;
}

interface ProductProps {
  data: ProductType;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://nextjs-store-seven.vercel.app/products/details/${data.id}`}
        openGraph={{
          url: `https://nextjs-store-seven.vercel.app/products/details/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.image,
              alt: data.title,
              type: "image/jpeg",
            },
          ],
          site_name: "Shopinext",
        }}
      />
      <Link href="/products">
        <a>⬅ Powrót na stronę główną</a>
      </Link>
      <div className="flex flex-col md:flex-row">
        <div className="w-full h-80 relative my-8 md:w-1/2">
          <Image src={data.image} alt="" layout="fill" objectFit="contain" />
        </div>
        <section className="md:w-1/2 md:max-w-lg md:mt-10">
          <p className="font-bold text-lg text-blue-500">
            Rating: {data.rating} / 5
          </p>
          <h2 className="text-2xl font-bold my-3">{data.title}</h2>
          <p>{data.description}</p>
          <article className="prose lg:prose-xl">
            <ReactMarkdown>{data.longDescription}</ReactMarkdown>
          </article>
        </section>
      </div>
    </div>
  );
};
