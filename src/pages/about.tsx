import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import SkeletonBG from "../../public/skeleton-bg.png"
import { MouseEvent } from "react";

const AboutPage = () => {
  const [current, setCurrent] = useState("about-profile");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrent((event.target as HTMLButtonElement).value)
  }

  return (
    <>
      <Head>
        <title>Elysium Realm | About</title>
        <meta name="description" content="Get to know the creator of Elysium Realm" />
        <meta name="keywords" content="creator, elysium realm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-grow bg-white m-10 rounded-lg p-5 h-full">
        <div className="w-1/3 flex flex-col justify-center items-center border-2 border-gray-200">
          <Image alt="" src={SkeletonBG} width={300} height={600} />
          <div>
            <h3>Alexandro C.W.</h3>
            <p>Github: alexandrocw</p>
            <p>LinkedIn: alexandrocw</p>
            <p>alexandrowijaya.aw2@gmail.com</p>

            <p>Language ID/EN/JP(Basic)</p>
          </div>
        </div>

        <div className="w-2/3 border-2 border-gray-200">
          <div className="flex justify-evenly w-full font-bold">
            <button type="button" value="about-profile" onClick={handleClick} className={`flex-grow p-2 ${current === 'about-profile' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Profile</button>
            <button type="button" value="about-educations" onClick={handleClick} className={`flex-grow p-2 ${current === 'about-educations' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Educations</button>
            <button type="button" value="about-experiences" onClick={handleClick} className={`flex-grow p-2 ${current === 'about-experiences' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Experiences</button>
            <button type="button" value="about-achievements" onClick={handleClick} className={`flex-grow p-2 ${current === 'about-achievements' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Achievements</button>
            <button type="button" value="about-tech-stacks" onClick={handleClick} className={`flex-grow p-2 ${current === 'about-tech-stacks' ? 'bg-gray-200' : 'hover:bg-gray-200 '}`}>Tech Stacks</button>
          </div>

          <div className="p-5">
            {current === "about-profile" ? 
            (
              <div className="text-justify">
                <p>
                I&apos;m a Full Stack Developer. I have a good understanding of Front End and Back End 
                Development of website and android application. I can work with React JS Front End with 
                NodeJS for website, and React Native for android app. For database I usually use MongoDB 
                (with MongoDB atlas as storage) or Firebase (Firestore/Realtime database). I also have 
                personal website which built and deployed in alexandrocw.vercel.app (I had custom domain 
                name but haven&apos;t extended it and the website is still on progress)
                <br />
                <br />
                I have some website projects and android involving CRUD app 
                (blogging, personnel management system, and Discord/Line Bot).
                <br />
                <br />
                Right now I&apos;m learning more website, android app, making game, and artificial intelligence.
                <br />
                <br />
                I&apos;m familiar with version control using git with repository services such as Github 
                and Bitbucket. I can work with project and issue tracker like Jira.
                <br />
                <br />
                I&apos;m quite a fast learner. When there is a new knowledge, I will search for it until I have 
                a good understanding about it. I can work in a team too. I&apos;m pretty clumsy when involved 
                with work and need to ask many questions to fully understand the problem, but I will make 
                sure that the work is finished with good quality (I have high self confidence).
                <br />
                <br />
                Honesty is my principle. If I can do it, I will say I can, if not then I will clearly tell 
                what&apos;s the hard parts that I can&apos;t do.
                <br />
                <br />
                I can be quite humorous but still take my work seriously.
                </p>
              </div>
            ) : current === "about-educations" ? (
              <div>
                Universitas Gadjah Mada (August 2019 - August 2023) GPA 3.63/4.00
              </div>
            ) : current === "about-experiences" ? (
              <div>
                <ol className="list-disc">
                  <li>PT YLabs Inovasi Indonesia (August 2021 - November 2021)</li>
                  <li>Night Login UGM (January 2021 - Desember 2022)</li>
                  <li>Lembaga Penelitian dan Kajian Teknik Aplikatif FT UGM (December 2020 - December 2022)</li>
                  <li>FindIT UGM 2021 (January 2021 - Juner 2021)</li>
                  <li>Assistant Lecturer at Departemen Teknik Elektro dan Teknologi Informasi FT UGM</li>
                  <li>Lab Assistant at Departemen Teknik Elektro dan Teknologi Informasi FT UGM</li>
                  <li>Problem Setter Volunteer DTETI FT UGM COMRADE 2020</li>
                </ol>
              </div>
            ) : current === "about-achievements" ? (
              <div>
                <ol className="list-disc">
                  <li>Finalist Pekan Ilmiah Mahasiswa Nasional (PIMNAS 34).</li>
                  <li>Finalist Conference and Call for Paper International Development Student Conference (IDSC) 2020</li>
                  <li>Participate in BRI Data Hackathon 2021 and Joints Data Mining Competition 2021.</li>
                </ol>
              </div>
            ) : current === "about-tech-stacks" ? (
              <div>
                <ol className="list-disc">
                  <li>ReactJS</li>
                  <li>NodeJS</li>
                  <li>NextJS</li>
                  <li>Javascript/Typescript</li>
                  <li>TailwindCSS</li>
                  <li>Intermediate Python / C++</li>
                </ol>
              </div>
            ) : (
              <div>
                Not found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;