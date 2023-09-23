"use client";
import { GlobalStateProvider } from "@/context/Context";
import { Figtree } from "next/font/google";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import { usePathname } from "next/navigation";
import Layouts from "@/utils/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const figtree = Figtree({
  style: ["normal"],

  weight: ["400", "700", "900", "600"],

  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathName = usePathname();

  const shouldHideHeader = () => {
    // Specify the routes where you want to hide the header

    const hideHeaderRoutes = [
      "/search",

      "/",

      "/tattoo/[detail]",

      "/flash/[detail]",

      "/artist/[detail]",

      "/contactus",

      "/joinartist",

      "/all/[detail]",
    ];

    return hideHeaderRoutes.includes(pathName);
  };

  return (
    <html lang="en">
      <GlobalStateProvider>
        <body className={figtree.className}>
          <Layouts pathname={pathName}>
            {!shouldHideHeader() && <Header />}

            {children}
            
          </Layouts>

          <Footer />
        </body>
      </GlobalStateProvider>
    </html>
  );
}
