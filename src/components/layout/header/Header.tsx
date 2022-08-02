import Link from "next/link";
import Image from "next/image";

import styles from './Header.module.scss';
import logo from '../../../../public/logo.svg';
import {ActiveLink} from "../../ActiveLink";
import {Burger} from "./burger/Burger";
import {useState} from "react";
import {Menu} from "./menu/Menu";

export function Header() {
    const [open, setOpen] = useState(false);

    return <header className={styles.header} >
        <div className='container flex-center'>
            <Link href='/' >
                <a className={styles.logo}>
                    <Image
                        alt='Best News'
                        src={logo}
                    />
                </a>
            </Link>
            <nav className={styles.nav}>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a className={styles.link}>Home</a>
                </ActiveLink>
                <ActiveLink href="/world" activeClassName={styles.active}>
                    <a className={styles.link}>World</a>
                </ActiveLink>
                <ActiveLink href="/automobile" activeClassName={styles.active}>
                    <a className={styles.link}>Automobiles</a>
                </ActiveLink>
                <ActiveLink href='/realestate' activeClassName={styles.active}>
                    <a className={styles.link}>Real Estate</a>
                </ActiveLink>
                <ActiveLink href='/finance' activeClassName={styles.active}>
                    <a className={styles.link}>Finance</a>
                </ActiveLink>
            </nav>
            <Burger open={open} setOpen={setOpen} />
            {open && <Menu open={open} setOpen={setOpen}/>}
        </div>
    </header>
}