import Link from "next/link";

const Footer = () => {
	return (
		<div className="flex flex-col bg-black p-10 text-white text-lg text-left">
			<div className="flex mb-4">
				<div className="w-1/3 text-2xl font-bold">
					<Link href="/"><h1><span className="text-red-300">Elysium</span> <span className="text-purple-500">Realm</span></h1></Link>
				</div>

				<div className="w-1/3 flex flex-col">
					<Link href="/" className="hover:text-purple-500">Home</Link>
					<Link href="/blog" className="hover:text-purple-500">Blog</Link>
					<Link href="/projects" className="hover:text-purple-500">Projects</Link>
					<Link href="/about" className="hover:text-purple-500">About</Link>
					<Link href="/help" className="hover:text-purple-500">Help &amp; Support</Link>
				</div>

				<div className="w-1/3 flex flex-col">
					<Link href="https://www.linkedin.com/in/alexandrocw/" className="hover:text-purple-500">LinkedIn</Link>
					<Link href="https://github.com/alexandrocw" className="hover:text-purple-500">Github</Link>
				</div>
			</div>

			<div className="text-center">
				<p>&copy; Copyright 2023 Elysium Realm</p>
			</div>
		</div>
	);
}

export default Footer;