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
      </div>
      {/* Bottom Nav */}
    </header>
  );
}

export default header;
