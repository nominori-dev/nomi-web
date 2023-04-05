import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 drop-shadow-lg border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <span className="sm:text-2xl text-gray-900 font-semibold">nominori-dev</span>
                    <div className="flex space-x-2 text-gray-900">
                        <Link href='/'>main</Link>
                        <Link href='https://github.com/nominori-dev'>github</Link>
                        <Link href='/projects'>projects</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}