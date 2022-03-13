import { useQuery } from "react-query";
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

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { data, isLoading, isError } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Error. Try again</div>;
  }

  return (
    <div className="grid grid-cols-3">
      {data.map((product) => (
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

export default ProductsCSRPage;
