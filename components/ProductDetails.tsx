import Image from "next/image";
import Link from "next/link";

export interface ProductType {
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
        </section>
      </div>
    </div>
  );
};
