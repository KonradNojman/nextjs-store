import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      Main content
      <button
        onClick={async () => {
          const res = await fetch(`/api/hello`);
          const json = await res.json();
        }}
      >
        Test API
      </button>
    </Layout>
  );
};

export default Home;
