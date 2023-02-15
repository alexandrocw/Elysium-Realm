import Link from "next/link";

const Navbar = () => {
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
			</div>
		</nav>
	);
}

export default Navbar;