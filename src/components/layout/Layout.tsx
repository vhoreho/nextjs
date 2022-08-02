import {ReactNode} from "react";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";

export function Layout({children}: {children:ReactNode}) {
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