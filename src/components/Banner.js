import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="w-full h-32 bg-gradient-to-t from-gray-200 to-transparent  z-10">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          interval={2000}
        >
          <div>
            <img loading="lazy" src="https://links.papareact.com/gi1" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" />
          </div>
          <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
