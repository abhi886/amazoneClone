import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";

function Checkout() {
  const [session] = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left Section */}
        <div className='m-5 flex-grow shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b p-4 '>
              {" "}
              {items.length === 0
                ? "Your AmazonBasket is Empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length}) items:{" "}
                <span className='font-bold'>
                  <Currency quantity={total} currency='GBP' />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
