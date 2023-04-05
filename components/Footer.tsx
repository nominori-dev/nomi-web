import Link from "next/link";

export default function Footer() {
    return (
        <footer className="rounded-lg shadow text-center">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-900 sm:text-center">© 2023 <Link href="https://co.bdv.pw/contact" className="hover:underline">Aleksei Shevtsov</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 sm:mt-0">
                    <li>
                        <Link href="https://github.com/nominori-dev" className="mr-4 hover:underline md:mr-6 ">Github</Link>
                    </li>
                    <li>
                        <Link href="/projects" className="mr-4 hover:underline md:mr-6">Projects</Link>
                    </li>
                    <li>
                        <Link href="https://co.bdv.pw/contact" className="mr-4 hover:underline md:mr-6">BDV Foundation</Link>
                    </li>
                    <li>
                        <Link href="mailto:nominori@bdv.pw" className="hover:underline">nominori@bdv.pw</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}