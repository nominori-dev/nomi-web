import React from "react";
import styles from '../../styles/Home.module.css'
import { Roboto } from '@next/font/google'
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[]
}


export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className="font-inter">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}