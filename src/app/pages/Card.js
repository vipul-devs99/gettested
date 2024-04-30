import { FaArrowRightLong } from "react-icons/fa6";
import { TestReport } from "../constants/index";
import Modal from "../components/Modal";
import { useState } from "react";
import Image from "next/image";
import CardComponent from "./../components/CardComponent";

const Card = () => {
  // we test for
  const items = [
    "Gonorrhoea",
    "Chlamydia",
    "Syphilis",
    "Trichomonas",
    "Human Papillomavirus (HPV)",
    "Genital Herpes",
    "Hepatitis B and C",
    "Human Immunodeficiency Virus (HIV)",
    "Others",
  ];

  const test = TestReport;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto px-5 lg:pl-12 ">
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 gap-3  mt-10">
          <div className="w-full lg:col-span-5 flex items-end">
            <Image
              width={500}
              height={500}
              className="w-full h-full"
              priority={true}
              src="/assets/img/drbackground.png"
              alt="doctor"
            />
          </div>
          <div className=" lg:col-span-7 flex items-end">
            <div className="">
              <div className="text-start">
                <img
                  className="w-full h-full"
                  src="/assets/img/am-at-risk.png"
                  alt="tested"
                />
                <div className="bg-theme1 p-8 md:p-10 rounded-sm  mt-10">
                  <div>
                    <img
                      className="w-full h-full"
                      src="/assets/img/tested.png"
                      alt="tested"
                    />
                  </div>

                  <div className="flex justify-start">
                    <button
                      onClick={handleOpenModal}
                      className="bg-whitecolor text-black hover:bg-theme1light text-sm rounded-[20px] md:text-sm leading-none font-semibold px-6 py-3 mt-4"
                    >
                      Book An Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== card====  */}
      <div className="container mx-auto px-5 lg:px-12 ">
        <div className="bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:my-16 my-12">
          <CardComponent
            testNameSrc="/assets/card/testName/1.jpg"
            labLogoSrc="/assets/card/labLogo/1.png"
            price=" "
            listSrc="/assets/card/list/1.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/2.jpg"
            labLogoSrc="/assets/card/labLogo/2.png"
            price="@ AED 499"
            listSrc="/assets/card/list/2.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/3.jpg"
            labLogoSrc="/assets/card/labLogo/3.png"
            price="@ AED 299"
            listSrc="/assets/card/list/3.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/4.jpg"
            labLogoSrc="/assets/card/labLogo/1.png"
            price="@ AED 399"
            listSrc="/assets/card/list/4.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/5.jpg"
            labLogoSrc="/assets/card/labLogo/2.png"
            price="@ AED 599"
            listSrc="/assets/card/list/5.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/6.jpg"
            labLogoSrc="/assets/card/labLogo/3.png"
            price="@ AED 799"
            listSrc="/assets/card/list/6.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/7.jpg"
            labLogoSrc="/assets/card/labLogo/1.png"
            price="@ AED 999"
            listSrc="/assets/card/list/7.png"
          />
          <CardComponent
            testNameSrc="/assets/card/testName/8.jpg"
            labLogoSrc="/assets/card/labLogo/2.png"
            price="@ AED 1599"
            listSrc="/assets/card/list/8.png"
          />

          <CardComponent
            testNameSrc="/assets/card/testName/9.jpg"
            labLogoSrc="/assets/card/labLogo/3.png"
            price="@ AED 2399"
            listSrc="/assets/card/list/9.png"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
