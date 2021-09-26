import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      ></Carousel>
    </div>
  );
}

export default Banner;
