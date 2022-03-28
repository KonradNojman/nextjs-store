import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { ProductDetails } from "../../../components/ProductDetails";

const ProductPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;
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
  longDescription: string;
}

interface Rating {
  rate: number;
  count: number;
}

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }
  const productId = params.productId;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: { ...data, longDescription: await serialize(data.longDescription) },
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
  const data: StoreApiResponse[] | null = await res.json();

  if (!data) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = data.map((product) => ({
    params: {
      productId: product.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export default ProductPage;

export type InferGetStaticPaths<T> = T extends () => Promise<{
  paths: Array<{ params: infer R }>;
}>
  ? { params?: R }
  : never;
