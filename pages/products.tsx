import { InferGetServerSidePropsType } from "next";
import { ProductListItem } from "../components/ProductListItem";

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

const ProductsPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div className="grid grid-cols-3">
      {props.data.map((product) => (
        <ProductListItem
          key={product.id}
          data={{
            id: product.id,
            image: product.image,
            title: product.title,
          }}
        />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();

  return {
    props: { data },
  };
};

export default ProductsPage;
