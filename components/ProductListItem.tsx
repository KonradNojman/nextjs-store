import Image from "next/image";
import Link from "next/link";

export interface ProductType {
  id: number;
  title: string;
  image: string;
}

interface ProductProps {
  data: ProductType;
}

export const ProductListItem = ({ data }: ProductProps) => {
  return (
    <div className="bg-gray-100 shadow-xl">
      <div className="p-4">
        <div className="w-full h-80 relative bg-white">
          <Image src={data.image} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <h2 className="text-xl font-bold pb-4 px-5 hover:text-blue-400">
        <Link href={`/products/${data.id}`}>
          <a>{data.title}</a>
        </Link>
      </h2>
    </div>
  );
};
