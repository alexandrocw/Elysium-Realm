import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Elysium Realm | Home</title>
        <meta name="description" content="Find paradise in a website here" />
        <meta name="keywords" content="paradise, elysium" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="m-10 flex flex-grow lg:flex-row flex-col justify-between items-center text-white">
        <div className="w-1/2 p-10 space-y-5">
          <h1 className="text-6xl">Discover fun things<br/>in a single site</h1>
          <h2 className="text-4xl">Get started by checking<br/> the latest blog and projects</h2>
        </div>

        <div className="w-1/2 flex flex-col text-white border-2 border-white m-10 rounded-lg pt-2">
          <h3 className="text-center m-2 font-bold">What's going on?</h3>
          <div className="bg-white text-black px-4 py-2 mb-2 w-full hover:bg-gray-200">
            <h4 className="font-bold text-blue-500">Latest Project</h4>
            <div>
              <p className="font-bold">New site Elysium Realm!</p>
              <p>This site is still on progress, because learning never stop...</p>
              <p>By Alexandro C.W. On Wed Feb 15 2023</p>
              <p>Tag(s): Full Stack Project</p>
              <p>Latest Updated On Wednesday 15 Februari 2023</p>
            </div>
          </div>

          <div className="bg-white text-black px-4 py-2 hover:bg-gray-200">
            <h4 className="font-bold text-blue-500">Latest Blog Post</h4>
            <div>
              <p className="font-bold">New blog post!</p>
              <p>This new blog post will be used for testing...</p>
              <p>By Author On Wed Feb 15 2023</p>
              <p>Tag(s): Uncategorized</p>
              <p>Latest Updated On Wed Feb 15 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage;