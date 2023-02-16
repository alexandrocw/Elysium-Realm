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
      <Head>
        <script data-cfasync="false" src="//db033pq6bj64g.cloudfront.net/?bqpbd=977886" async />
      </Head>
      <div className="min-h-screen flex flex-col body-bg">
        <Navbar />
        { children }
      </div>
      <Footer />
    </>
  );
}

export default Layout;