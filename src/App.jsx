import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import arrowLogo from "./assets/arrow.svg";

const eventData = [
  {
    title: "State Conventions",
    description:
      "We have been host to two state-level conventions of ISTE - Drishti in 2017, and Atreya in 2019...",
  },
  {
    title: "Tech Week",
    description:
      "Tech Week, conducted alongside other club events, is a jam-packed week filled with technical workshops...",
  },
  {
    title: "Guest Speaks",
    description:
      "One of the biggest pioneers of science who dared to think beyond, our current wonders are an attraction...",
  },
  {
    title: "Tech Week",
    description:
      "Tech Week, conducted alongside other club events, is a jam-packed week filled with technical workshops...",
  },
  {
    title: "Guest Speaks",
    description:
      "One of the biggest pioneers of science who dared to think beyond, our current wonders are an attraction...",
  },


];

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-4 p-5 w-full max-w-screen-lg relative mx-auto">
      <h1 className="text-2xl font-bold mb-5">EVENTS</h1>
      <img
        src={arrowLogo}
        alt="Arrow Left"
        className="h-10 w-10 rotate-180 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer swiper-button-prev hidden md:block"
      />
      <div className="flex justify-center items-center w-full">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            200: { slidesPerView: 1,centeredSlides:true},
            650: { slidesPerView: 2 },
          }}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
             rotate: 3, stretch: 0, depth: 300, modifier: 2, slideShadows: false }}
          className="w-580px"
        >
          {eventData.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col border-4 rounded-2xl justify-center items-center p-5 w-[300px]  h-[350px] md:w-[450px] md:h-[450px] gap-3 bg-white transition-all duration-300 swiper-slide-active:scale-110 md:swiper-slide-active:scale-125">
                <div className="bg-gray-300 border-3 rounded-2xl w-full h-40 md:h-56"></div>
                <div className="w-full px-2">
                  <div className="w-fit bg-black text-white px-2 py-1">
                    <p>{event.title}</p>
                  </div>
                  <hr className="border-black" />
                  <p className="text-sm md:text-base">{event.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img
        src={arrowLogo}
        alt="Arrow Right"
        className="h-10 w-10 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer swiper-button-next hidden md:block"
      />
    </div>
  );
}
export default App;
