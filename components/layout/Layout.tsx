import React from "react";
import styles from '../../styles/Home.module.css'
import { Roboto } from '@next/font/google'

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[]
}

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={roboto.className}>
            <div className={styles.navbar}>
                <a href='#' className={styles.title}>nominori-dev</a>
                <ul>
                    <li><a id='navbar_link' href='https://github.com/nominori-dev'>Github</a></li>
                    <li><a id='navbar_link' href='https://www.bdv.pw/'>BDV</a></li>
                </ul>
            </div>
            <main>{children}</main>
            <div className='footer'>
                <h3>Backed by <a href='https://www.bdv.pw'>bdv.pw</a></h3>
                <small>Copyright @ 2022 Aleksei Shevtsov</small>
            </div>
        </div>
    )
}