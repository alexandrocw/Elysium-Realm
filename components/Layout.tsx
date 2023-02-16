import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children?: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
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