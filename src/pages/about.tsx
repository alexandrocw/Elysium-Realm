import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import SkeletonBG from "../../public/skeleton-bg.png"

const AboutPage = () => {
  const [current, setCurrent] = useState("profile");

  return (
    <div>
      <Head>
        <title>Elysium Realm | About</title>
        <meta name="description" content="Get to know the creator of Elysium Realm" />
        <meta name="keywords" content="creator, elysium realm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-grow bg-white m-10 rounded-lg p-5 flex-wrap">
        <div className="w-1/3 flex flex-col justify-center items-center border-2 border-gray-200">
          <Image alt="" src={SkeletonBG} width={300} height={600} />
          <div>
            <h3>Alexandro C.W.</h3>
          </div>
        </div>

        <div className="w-2/3">
          <div className="flex justify-evenly">
            <button>Profile</button>
            <button>Educations</button>
            <button>Experiences</button>
            <button>Achievements</button>
            <button>Tech Stacks</button>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;