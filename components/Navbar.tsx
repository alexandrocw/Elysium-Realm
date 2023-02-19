import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
	const router = useRouter();
	const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;
	const { data: session, status } = useSession();

	let login;
	if (status === 'loading') {
		login = (
			<></>
		)
	} else if (!session) {
		login = (
			<Link href="/api/auth/signin" className="p-5 text-white hover:text-purple-600">Log In</Link>
		)
	} else if (session) {
		login = (
			<div className="flex flex-col text-sm justify-center items-center text-white">
				<p>{session.user?.name}</p>
				<button type="button" onClick={() => signOut()} className="hover:text-purple-600"><a>Log Out</a></button>
			</div>
		)
	}

	return (
		<nav className="flex justify-between mx-10">
			<div className="text-2xl font-bold p-5">
				<Link href="/"><h1><span className="text-red-300">Elysium</span> <span className="text-purple-500">Realm</span></h1></Link>
			</div>
			<div className="text-xl flex h-full">
				<Link href="/" className="p-5 text-white hover:text-purple-600">Home</Link>
				<Link href="/blog" className="p-5 text-white hover:text-purple-600">Blog</Link>
				<Link href="/projects" className="p-5 text-white hover:text-purple-600">Projects</Link>
				<Link href="/about" className="p-5 text-white hover:text-purple-600">About</Link>
				<Link href="/help" className="p-5 text-white hover:text-purple-600">Help &amp; Support</Link>

				{login}
			</div>
		</nav>
	);
}

export default Navbar;