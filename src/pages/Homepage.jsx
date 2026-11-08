import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function CarouselDefault() {
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1000",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1000",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1000",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
  ];

  return (
    <div className="w-full py-10">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full color-white"
        style={{
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-navigation-color": "white",
          "--swiper-navigation-size": "25px",
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-70! h-full! md:w-120!">
            <img
              src={image}
              alt={`Imagem ${index + 1}`}
              className="w-full h-100 md:h-105! object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Homepage() {
  return (
    <section className="homepage">
      <div className="relative h-200 overflow-hidden">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplacar.com.br%2F_next%2Fimage%2F%3Furl%3Dhttps%3A%252F%252Fplacar.com.br%252Fwp-content%252Fuploads%252F2026%252F02%252F7a0e9b7a5effab9ab5827ab29f3b2aa336563bff.jpg%26w%3D3840%26q%3D75&f=1&nofb=1&ipt=f33fdebcabb5c3e207bfef31a43069fb47b524028a5b47d3ab2d4b8b717e7fc0&ipo=images"
          alt="header-img"
          className="header-img absolute inset-0 w-full h-full object-cover object-[40%] z-0"
        />

        <div className="gradiant-body absolute inset-0 z-10 bg-linear-to-t from-black via-black/25 to-transparent"></div>

        <div className="header-title absolute flex flex-col bottom-40 left-5 z-20 w-60 uppercase">
          <span className="text-gray-200 text-[35px] font-bold">
            Super campeão do Brasil 2025
          </span>
          <span className="text-gray-200 text-xl w-full mt-2">
            Com força, foco e FÉ!
          </span>

          <div className="link mt-4 ml-22">
            <Link
              to="/"
              className="bg-gray-100 text-gray-900 px-3 py-2 w-40 flex items-center gap-2 rounded transition-all duration-300 text-md cursor-pointer hover:bg-gray-800 hover:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Saiba mais
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-full overflow-hidden mt-100">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.gazetaesportiva.com%2Fuploads%2Fimagem%2F2016%2F12%2F04%2F1982divIMG208995_V1HD001D30_GJQNNNPOVM_4-1024x682.jpg&f=1&nofb=1&ipt=dac63e8e2c410953fa605502b4d7c2b605b70db6c0847996c392d7813559872b&ipo=images"
          alt=""
          className="h-180 object-cover object-[75%]"
        />
        <div className=" absolute flex flex-col justify-center items-center gap-65 text-white font-extrabold w-full bottom-35 right-7">
          <h1 className="w-60 text-lg">
            &quot;O Corinthians não é um time e uma torcida. É um estado de
            espírito.&quot; - Sócrates.
          </h1>
          <Link
            to={"/historia"}
            className="bg-white text-gray-800 ml-12 transition-all duration-300 hover:bg-gray-800 hover:text-white p-2 rounded font-normal"
          >
            Conheça nossa história
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5">
        <CarouselDefault />
      </div>
    </section>
  );
}

export default Homepage;
