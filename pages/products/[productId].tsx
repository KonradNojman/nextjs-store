import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ProductDetails } from "../../components/ProductDetails";

const ProductPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <div>
      <ProductDetails
        data={{
          title: props.data.title,
          description: props.data.description,
          image: props.data.image,
          rating: props.data.rating.rate,
        }}
      />
    </div>
  );
};

interface StoreApiResponse {
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

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const productId = query.productId;

  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const data: StoreApiResponse = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductPage;
