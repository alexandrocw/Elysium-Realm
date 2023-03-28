import { NextPage } from "next";
import Head from "next/head";

const Terms: NextPage = () => {
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
        <h2 className="text-5xl font-bold text-center m-10">Terms of Use</h2>
        <div className="m-5 mx-10 text-justify">
          <ol className="list-disc">
            <li>The information provided on Elysium Realm is for general informational purposes only and is not intended to be a substitute for professional advice. Users should consult with qualified professionals for advice specific to their individual situations.</li>
            <li>Elysium Realm makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</li>
            <li>Elysium Realm shall not be liable for any loss or damage arising from the use of the website or any information, products, services, or related graphics contained on the website.</li>
            <li>Links to third-party websites are provided as a convenience to users. Elysium Realm has no control over the content or availability of these websites and does not endorse any opinions, products, or services offered by them.</li>
            <li>Elysium Realm may collect and store personal information from users, such as name and email address for registration purposes. This information will be kept confidential and not shared with third parties, except as required by law.</li>
            <li>Cookies and similar technologies may be used to gather anonymous usage data, such as the pages users visit and the duration of their visit with prior notice. This data will be used to improve the website's performance and user experience.</li>
            <li>Third-party services may be used to serve ads on the website, and these services may use cookies to track user behavior and provide relevant advertisements. Users may opt-out of personalized ads by adjusting their ad settings or by installing an ad-blocking extension.</li>
            <li>Google AdSense may be used to serve ads on the website, and these ads may be personalized based on user behavior. By using the website, users consent to the use of cookies and similar technologies for advertising purposes.</li>
            <li>Elysium Realm reserves the right to modify these terms of use at any time without prior notice. Continued use of the website after any such changes constitutes acceptance of the new terms of use.</li>
            <li>Elysium Realm reserves the right to suspend or terminate access to the website at any time for any reason without prior notice.</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Terms;