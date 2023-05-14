import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="relative w-full z-20 top-0 left-0`">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-14">
                    <span className="sm:text-2xl text-gray-900 hover:text-gray-800"><Link href='/'>🛠 nominori-dev</Link></span>
                    <div className="flex space-x-2 text-lg sm:text-xl text-gray-900 underline">
                        <Link className="hover:text-gray-600 hover:transition-all" href='/'>main</Link>
                        <Link className="hover:text-gray-600 hover:transition-all" href='https://github.com/nominori-dev'>github</Link>
                        <Link className="hover:text-gray-600 hover:transition-all" href='/projects'>projects</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}