import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { LayoutProps } from "types/types";


const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col body-bg">
        <Navbar />
        { children }
      </div>
      <Footer />
    </>
  );
}

export default Layout;