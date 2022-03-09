import Image from "next/image";

export interface ProductType {
  title: string;
  description: string;
  image: string;
  rating: number;
}

interface ProductProps {
  data: ProductType;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div>
      <div className="w-full h-80 relative">
        <Image src={data.image} alt="" layout="fill" objectFit="contain" />
      </div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.rating}</p>
    </div>
  );
};
