import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])

  return (
    <div className="text-center font-bold">
      <h1>oopps...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  );
}

export default NotFoundPage;