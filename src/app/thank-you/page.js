"use client"
import React from "react";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYou() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <Navbar />
      <div class="content ">
        <div class="wrapper-1 ">
          <div class="wrapper-2">
            <h1 className="thankYouH1">Thank you !</h1>
            <p>For Booking Your Appointment.</p>
            <p>We're thrilled to confirm that your appointment has been successfully scheduled. Our team will get back to you soon. </p>
            <button class="go-home" onClick={handleClick}>go home</button>
          </div>
          
        </div>
      </div>

     
      <Footer />
    </div>
  );
}
