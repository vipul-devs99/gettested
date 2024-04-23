  import "./globals.css";
  import "react-toastify/dist/ReactToastify.css";
  import { ToastContainer, toast } from "react-toastify";
  import Head from "next/head";


  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Head>
        <title>Quick Home Service Blood Tests</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Schedule your convenient at-home blood test today. Fast, reliable, and professional service."
        />
         
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BVXZK9W5QP"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BVXZK9W5QP');
              `
            }}
          />
        </Head>

        <body>
          <ToastContainer />
          {children}
        </body>
      </html>
    );
  }
