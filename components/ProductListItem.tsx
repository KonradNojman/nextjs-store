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
    <div>
      <div className="w-full h-80 relative">
        <Image src={data.image} alt="" layout="fill" objectFit="contain" />
      </div>
      <h2>
        <Link href={`/products/${data.id}`}>
          <a>{data.title}</a>
        </Link>
      </h2>
    </div>
  );
};
