import { CheckCircleIcon } from "@heroicons/react/solid";
import Header from "../components/Header";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto h-1">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, Your order has been confirmed
            </h1>
          </div>
          <p>
            Thank you for Shopping with us.We'll send you the conformation once
            the order has shipped, if you like to check the status of the orders
            please press the below link
          </p>
          <button
            className="button mt-8"
            onClick={() => router.push("/orders")}
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
