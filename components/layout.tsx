import {ReactNode} from "react";
// @ts-ignore
import Header from "./Header/header.tsx";
// @ts-ignore
import Footer from "./footer.tsx";

import styles from '../styles/common.module.scss'

export default function Layout({children}: {children:ReactNode}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}