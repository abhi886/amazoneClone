import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function header() {
  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        {/* Image */}
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* Search bar */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
          <input
            type='text'
            className='p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none flex-shrink'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        {/* Rght Section */}
        <div className='flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p> Hello, Abhishekh Maharjan </p>
            <p className='font-extrabold md:text-sm'> Account and Lists</p>
          </div>
          <div className='link'>
            <p> Return </p>
            <p className='font-extrabold md:text-sm'> And Orders</p>
          </div>
          <div className='link relative flex items-center'>
            <span className='bg-yellow-400 rounded-full absolute top-0 right-0 md:right-10 h-4 w-4 text-center text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              {" "}
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm'>
        <p className='link flex items-center'>All</p>
        <MenuIcon className='h-6 mr-1' />
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default header;
