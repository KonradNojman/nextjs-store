import Image from "next/image";
import Link from "next/link";
import { useCartState } from "./Cart/CartContext";

export interface ProductType {
  id: string;
  title: string;
  image: string;
  price: number;
}

interface ProductProps {
  data: ProductType;
}

export const ProductListItem = ({ data }: ProductProps) => {
  const cartState = useCartState();
  return (
    <div className="bg-gray-100 shadow-xl">
      <div className="p-4">
        <div className="w-full h-80 relative bg-white">
          <Image src={data.image} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <h2 className="text-xl font-bold pb-4 px-5 hover:text-blue-400">
        <Link href={`/products/details/${data.id}`}>
          <a>{data.title}</a>
        </Link>

        <div className="flex justify-center">
          <button
            onClick={() =>
              cartState.addItemToCart({
                id: data.id,
                title: data.title,
                price: data.price,
                count: 1,
              })
            }
            className="bg-slate-700 rounded-full text-white px-8 py-3 my-5 shadow-lg hover:bg-slate-600 hover:scale-105 transition-transform"
          >
            Add to the cart
          </button>
        </div>
      </h2>
    </div>
  );
};
