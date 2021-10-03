import Header from "../components/Header";
import { useSession } from "next-auth/client";
import { getSession } from "next-auth/client";
// import { getServerSideProps } from "next";
import Order from "../components/Order";
import db from "../../firebase";
import moment from "moment";

function orders({ orders }) {
  const [session] = useSession();
  return (
    <div>
      <Header />
      <main>
        <div className='max-w-screen-lg mx-auto p-10'>
          <h1 className='text-3xl border-b-2 mb-2 pb-1 border-yellow-400'>
            Your Orders
          </h1>
          {session ? (
            <h2>{orders.length} Orders</h2>
          ) : (
            <h2>Please signIn to see your orders</h2>
          )}
          <div className='mt-5 space-y-5'>
            {orders?.map(
              ({ id, amount, amountShipping, items, timestamp, images }) => (
                <Order
                  key={id}
                  id={id}
                  amount={amount}
                  amountShipping={amountShipping}
                  items={items}
                  timestamp={timestamp}
                  images={images}
                />
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //Get the users logged in credentials...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  // orders from firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();
  //   console.log(stripeOrders);

  // Stripe Orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
    },
  };
}
