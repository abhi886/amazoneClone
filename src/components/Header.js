import Image from "next/image";
function header() {
  return (
    // <div>

    //   <div className='flex justify-between items-center'>
    //     {/* Left Div */}
    //     <div className='flex '>
    //       <div>Logo</div>
    //       <div>Title Description</div>
    //     </div>
    //     {/* Middle Div */}
    //     <div>Search Div</div>
    //     <div></div>
    //     {/* Right Div */}

    //     <div className='flex'>
    //       <div>Right Content 1</div>
    //       <div>Right Content 2</div>
    //       <div>Right Content 3</div>
    //     </div>
    //   </div>
    //   {/* Small Nav below Nav */}
    //   <div>Small Nav Below Nav</div>
    // </div>
    <div>
      {/* Top Nav */}
      <div>
        <div>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
          />
        </div>
      </div>
      {/* Bottom Nav */}
    </div>
  );
}

export default header;
