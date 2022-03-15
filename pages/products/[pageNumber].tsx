import next, {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";
import { ProductListItem } from "../../components/ProductListItem";

const PRODUCT_PAGES = 15;
const PRODUCTS_PER_PAGE = 25;
export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
  longDescription: string;
}

interface Rating {
  rate: number;
  count: number;
}

// w next.config da sie zrobic redirect z index na /products/1 np. i nie duplikowac strony

const ProductsPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <Layout>
      <div className="my-6 flex">
        <Pagination
          currentPage={Number(props.pageNumber)}
          itemsAmount={PRODUCT_PAGES * PRODUCTS_PER_PAGE}
          itemsPerPage={PRODUCTS_PER_PAGE}
          redirectUrl="/products"
        />
      </div>
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

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ pageNumber: string }>) => {
  const { pageNumber = "1" } = params || {};
  const offset = (Number(pageNumber) - 1) * PRODUCTS_PER_PAGE;

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${offset}`
  );
  const data: StoreApiResponse[] = await res.json();

  return {
    props: { data, pageNumber },
  };
};

export const getStaticPaths = async () => {
  const paths = Array.from({ length: PRODUCT_PAGES }).map(
    (_, index) => `/products/${index + 1}`
  );

  return {
    paths,
    fallback: false,
  };
};

export default ProductsPage;
