import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/client";

export default function Home({ products }) {
  return (
    <div className="bg-gray-200 relative ">
      <Head>
        <title>Amazon</title>
      </Head>

      <header className="sticky top-0 w-full z-10">
        <Header />
      </header>

      <main className="max-w-screen-2xl mx-auto  ">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
// fetch the page render on the server and then send to browser(Server sider Rendering) server act as the middle man only on next.js
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
