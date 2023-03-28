import { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elysium Realm | Terms of Use</title>
        <meta name="description" content="Our terms of use govern the use of our website and outline the rules and regulations that you must agree to when using our services." />
        <meta name="keywords" content="terms of use, website usage, terms and conditions, website rules, user agreement, website policies, legal agreement, website terms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Elysium Realm | Terms of Use" />
        <meta property="og:description" content="Our terms of use govern the use of our website and outline the rules and regulations that you must agree to when using our services." />
        <meta name="twitter:title" content="Elysium Realm | Terms of Use" />
        <meta name="twitter:description" content="Our terms of use govern the use of our website and outline the rules and regulations that you must agree to when using our services." />
      </Head>

      <div className="flex flex-grow flex-col bg-white rounded-lg m-10">
        <h2 className="text-5xl font-bold text-center m-10">Contact</h2>
        <div className="mx-10">
          <ol>
            <li>Github: alexandrocw</li>
            <li>LinkedIn: alexandrocw</li>
            <li>Email: alexandrowijaya.aw2@gmail.com</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Contact;