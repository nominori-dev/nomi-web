export default function Footer() {
    return (
        <footer className="rounded-lg shadow text-center">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-900 sm:text-center">© 2023 <a href="https://co.bdv.pw/contact" className="hover:underline">Aleksei Shevtsov</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 sm:mt-0">
                    <li>
                        <a href="https://github.com/nominori-dev" className="mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a href="/projects" className="mr-4 hover:underline md:mr-6">Projects</a>
                    </li>
                    <li>
                        <a href="https://co.bdv.pw/contact" className="mr-4 hover:underline md:mr-6">BDV Foundation</a>
                    </li>
                    <li>
                        <a href="mailto:nominori@bdv.pw" className="hover:underline">nominori@bdv.pw</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}