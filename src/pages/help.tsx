import Head from "next/head";
import { MouseEvent, useState } from "react";

interface FormData {
  subject: string;
  message: string;
}

const HelpPage = () => {
  const [current, setCurrent] = useState("help-privacy");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrent((event.target as HTMLButtonElement).value)
  }

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const form = document.querySelector('form') as HTMLFormElement;
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    const formData: FormData = {
      subject: subjectInput.value,
      message: messageInput.value,
    };
  }

  return (
    <>
      <Head>
        <title>Elysium Realm | Help &amp; Support</title>
        <meta name="description" content="Submit and issue and feedback here" />
        <meta name="keywords" content="help, support, issue" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-grow flex-col bg-white rounded-lg m-10">
        <div className="flex justify-evenly w-full font-bold">
          <button type="button" value="help-privacy" onClick={handleClick} className={`flex-grow rounded-lg p-2 ${current === 'help-privacy' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Privacy &amp; Policy</button>
          <button type="button" value="help-disclaimer" onClick={handleClick} className={`flex-grow rounded-lg p-2 ${current === 'help-disclaimer' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Disclaimer</button>
          <button type="button" value="help-issue-feedback" onClick={handleClick} className={`flex-grow rounded-lg p-2 ${current === 'help-issue-feedback' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Issue &amp; Feedback</button>
        </div>

        <div className="p-5 text-justify">
          {current === "help-privacy" ? 
          (
            <div>
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
          ) : current === "help-disclaimer" ?
          (
            <div className="list-disc">
              <ol className="list-disc">
                <li>
                  The information provided on Elysium Realm is for general informational purposes only and is not intended to be a substitute for professional advice. Users should consult with qualified professionals for advice specific to their individual situations.
                </li>
                <li>
                  Elysium Realm makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                </li>
                <li>
                  Elysium Realm shall not be liable for any loss or damage arising from the use of the website or any information, products, services, or related graphics contained on the website.
                </li>
                <li>
                  Links to third-party websites are provided as a convenience to users. Elysium Realm has no control over the content or availability of these websites and does not endorse any opinions, products, or services offered by them.
                </li>
              </ol>
            </div>
          ) : current === "help-issue-feedback" ? 
          (
            <div>
              <form id="issue-feedback">
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your message"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>Not found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default HelpPage;