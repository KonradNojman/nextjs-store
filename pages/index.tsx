import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      Main content
      <button
        onClick={async () => {
          const res = await fetch(`/api/hello`);
          const json = await res.json();
          console.log(json);
        }}
      >
        Test API
      </button>
    </div>
  );
};

export default Home;
