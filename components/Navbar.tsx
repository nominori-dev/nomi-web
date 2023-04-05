import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 drop-shadow-2xl border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    <span className="sm:text-2xl text-gray-900 font-black font-semibold hover:text-gray-800"><Link href='/'>nominori-dev</Link></span>
                    <div className="flex space-x-2 text-xl font-semibold text-gray-900 underline">
                        <Link className="hover:text-gray-600 hover:transition-all" href='/'>main</Link>
                        <Link className="hover:text-gray-600 hover:transition-all" href='https://github.com/nominori-dev'>github</Link>
                        <Link className="hover:text-gray-600 hover:transition-all" href='/projects'>projects</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}