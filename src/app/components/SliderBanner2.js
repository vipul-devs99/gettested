// import Swiper core and required modules
'use client'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "./Modal";
import { useState } from "react";
import Image from "next/image";


const SliderBanner2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }}

        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="container mx-auto px-4  z-20  border-t  bg-gray-50 ">
            <div className="grid lg:grid-cols-2 gap-2 font-raleway  md:p-8 md:pt-0">
            <div className="flex justify-center items-center order-2 pb-8">
                <div className="text-start my-4">
                  <div>
                  <Image width={500} height={600}  priority={true} src="/assets/img/bannerTest1.png" alt="img1" />
                  </div>
                  <button
                    onClick={handleOpenModal}
                    className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:order-2">
                <Image width={500} height={500} style={{width: "auto", height: "auto"}} priority={true} src="/assets/img/image1.jpg" alt="img1" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto px-4  z-20  border-t  bg-gray-50">
            <div className="grid lg:grid-cols-2 gap-2 font-raleway  md:p-8 md:pt-0">
              <div className="flex justify-center items-center order-2 pb-8">
                <div className="text-start my-4">
                <div>
                  <Image width={500} height={600}  priority={true} src="/assets/img/bannerTest2.png" alt="img2" />
                  </div>
                  <button
                    onClick={handleOpenModal}
                    className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:order-2">
              <Image width={500} height={500} style={{width: "auto", height: "auto"}} priority={true} src="/assets/img/image2.jpg" alt="img2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container mx-auto px-4  z-20  border-t  bg-gray-50 ">
            <div className="grid lg:grid-cols-2 gap-2 font-raleway  md:p-8 md:pt-0">
              <div className="flex justify-center items-center order-2 pb-8">
                <div className="text-start my-4">
                <div>
                  <Image width={500} height={600}  priority={true} src="/assets/img/bannerTest3.png" alt="img3" />
                  </div>
                  
                  <button
                    onClick={handleOpenModal}
                    className="bg-theme1 hover:bg-theme1h text-whitecolor text-sm rounded-[20px] md:text-sm leading-none font-medium px-6 py-3 mt-5"
                  >
                    Book An Appointment
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center md:order-2">
              <Image width={500} height={500}  style={{width: "auto", height: "auto"}}  src="/assets/img/image3.jpg" alt="img3" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default SliderBanner2;

