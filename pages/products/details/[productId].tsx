import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { ProductDetails } from "../../../components/ProductDetails";
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductSlugsDocument,
  GetProductSlugsQuery,
} from "../../../generated/graphql";
import { apolloClient } from "../../../graphql/apolloClient";

const ProductPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = props;
  if (!data) return null;
  return (
    <div>
      <ProductDetails
        data={{
          id: data.slug,
          title: data.name,
          description: data.description,
          image: data.images[0].url,
          rating: 3,
          longDescription: data.longDescription,
        }}
      />
    </div>
  );
};

export const getStaticProps = async ({
  params,
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return { props: {}, notFound: true };
  }
  const productId = params.productId;

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: {
      slug: productId,
    },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data?.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductSlugsQuery>({
    query: GetProductSlugsDocument,
  });

  if (!data) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = data.products.map((product) => ({
    params: {
      productId: product.slug,
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
