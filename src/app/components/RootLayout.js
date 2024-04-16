// components/RootLayout.js

import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Book Your Appointment - Quick Home Service Blood Tests</title>
        <meta
          name="description"
          content="Schedule your convenient at-home blood test today. Fast, reliable, and professional service."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BVXZK9W5QP"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BVXZK9W5QP');
            `,
          }}
        />
      </Head>
      <ToastContainer />
      {children}
    </>
  );
}
