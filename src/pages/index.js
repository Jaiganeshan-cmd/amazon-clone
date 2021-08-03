import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home({ products }) {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto ">
        {/* banner */}
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
// fetch the page render on the server and then send to browser(Server sider Rendering) server act as the middle man only on next.js
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
