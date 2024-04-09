import "../styles/globals.css";
import type { AppType } from "next/app";
import localFont from "next/font/local";



import { api } from "~/utils/api";
import RootLayout from "~/components/Layout";


const cashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cash",
  // display: "swap"
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (

    <RootLayout>
      <main className={`${cashDisplay.className} font-cash`}>
        <Component {...pageProps} />
      </main>
    </RootLayout>
   
  );
};
export default api.withTRPC(MyApp);