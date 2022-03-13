import { InferGetStaticPropsType } from "next";
import { Layout } from "../components/Layout";
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
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();

  return {
    props: { data },
  };
};

export default ProductsPage;
