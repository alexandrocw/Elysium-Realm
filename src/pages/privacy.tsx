import { NextPage } from "next";
import Head from "next/head";

const Privacy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elysium Realm | Privacy &amp; Policy</title>
        <meta name="description" content="Learn about our privacy policy and how we protect your personal information. Our policy covers how we collect, use, and disclose your data to ensure your privacy is always maintained" />
        <meta name="keywords" content="privacy policy, personal information, data collection, data use, data disclosure, user privacy, online privacy, confidentiality, gdpr, ccpa, data protection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Elysium Realm | Privacy &amp; Policy" />
        <meta property="og:description" content="Learn about our privacy policy and how we protect your personal information. Our policy covers how we collect, use, and disclose your data to ensure your privacy is always maintained" />
        <meta name="twitter:title" content="Elysium Realm | Privacy &amp; Policy" />
        <meta name="twitter:description" content="Learn about our privacy policy and how we protect your personal information. Our policy covers how we collect, use, and disclose your data to ensure your privacy is always maintained" />
      </Head>

      <div className="flex flex-grow flex-col bg-white rounded-lg m-10">
        <h1 className="text-5xl font-bold text-center m-10">Privacy &amp; Policy</h1>
        <div className="m-5 mx-10 text-justify">
          <ol className="list-disc">
            <li>
              Elysium Realm may collect and store personal information from users, such as name and email address for registration purposes. This information will be kept confidential and not shared with third parties, except as required by law.
            </li>
            <li>
              Cookies and similar technologies may be used to gather anonymous usage data, such as the pages users visit and the duration of their visit with prior notice. If there is no notice that means it have not been implemented. This data will be used to improve the website&apos;s performance and user experience.
            </li>
            <li>
              Third-party services may be used to serve ads on the website, and these services may use cookies to track user behavior and provide relevant advertisements. Users may opt-out of personalized ads by adjusting their ad settings or by installing an ad-blocking extension.
            </li>
            <li>
              Elysium Realm will take reasonable measures to protect the security of users&apos; personal information and will promptly notify users in the event of a data breach.
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Privacy;