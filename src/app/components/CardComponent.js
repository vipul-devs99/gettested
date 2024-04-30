import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const CardComponent = ({ testNameSrc, labLogoSrc, price, listSrc }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="shadow-lg rounded-2xl hover:shadow-slate-400 pb-4 hover:bg-slate-50/50 ">
        <div className="bg-theme1 py-10 px-5 border rounded-t-2xl">
        <img
              className="h-full w-full p-5 object-cover"
              src={testNameSrc}
              alt="logo"
            />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div className="flex justify-center items-center">
          <div className="border-[3px] border-theme1 bg-white rounded-full h-20 w-20 -mt-10">
            <img
              className="h-full w-full p-5 object-cover"
              src={labLogoSrc} 
              alt="logo"
            />
          </div>
        </div>
        <div className="h-fit">
          <h1 className="font-raleway text-[18px] text-center font-bold py-5">
            <span className="">Special Price</span>{" "}
            <span className="text-theme1 block">{price}</span>
          </h1>

          {/* ==== image  ==  */}

          <Image
            width={500}
            height={500}
            className="w-full h-full"
            src={listSrc}
            alt="card1"
          />
        </div>
        <div className=" my-6 mt-8">
          <button
            onClick={handleOpenModal}
            className="w-8/12 py-2 px-2 flex justify-center items-center bg-theme1 hover:bg-theme1h text-lg text-white rounded-lg mx-auto"
          >
            <span>Book Now</span> <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
