import moment from "moment";
import { getSession, useSession } from "next-auth/client";
import db from "../../firebase";
import Header from "../components/header";
import OrderdItems from "../components/Orders";
function Orders({ orders }) {
  const [session] = useSession();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b-2 mb-2 pb-1 ">Your Orders</h1>
        {session ? (
          <h2 className=" font-bold">{orders.length} Orders Placed</h2>
        ) : (
          <h2>Please Sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-5">
          {orders.map(
            ({ id, amount, amountShipping, images, timestamp, items }) => (
              <OrderdItems
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                images={images}
                timestamp={timestamp}
                items={items}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (await stripe.checkout.sessions.listLineItems(order.id)).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
