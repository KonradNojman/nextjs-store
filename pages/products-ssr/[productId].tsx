import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ProductDetails } from "../../components/ProductDetails";
import { MarkdownResult } from "../../utils";

const ProductPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!data) return null;
  return (
    <div>
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          description: data.description,
          image: data.image,
          rating: data.rating.rate,
          longDescription: data.longDescription,
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
  longDescription: MarkdownResult;
}

interface Rating {
  rate: number;
  count: number;
}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const productId = query.productId;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductPage;
