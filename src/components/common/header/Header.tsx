import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "components/icon";
import { Burger } from "./components/burger/Burger";
import { Menu } from "./components/menu/Menu";

import styles from './styles.module.scss';

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {section} = router.query;

  return <header className={styles.header}>
    <div className='container flex-center'>
      <Link href='/'>
        <a className={styles.logo}>
          <Logo/>
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.active}>
          <a className={router.pathname === '/' ? `${styles.linkActive}` : `${styles.link}`}>Home</a>
        </Link>
        <Link href="/world" className={styles.active}>
          <a className={section === 'world' ? `${styles.linkActive}` : `${styles.link}`}>World</a>
        </Link>
        <Link href="/automobiles" className={styles.active}>
          <a className={section === 'automobiles' ? `${styles.linkActive}` : `${styles.link}`}>Automobiles</a>
        </Link>
        <Link href='/realestate' className={styles.active}>
          <a className={section === 'realestate' ? `${styles.linkActive}` : `${styles.link}`}>Real Estate</a>
        </Link>
        <Link href='/business' className={styles.active}>
          <a className={section === 'business' ? `${styles.linkActive}` : `${styles.link}`}>Finance</a>
        </Link>
      </nav>
      <Burger open={open} setOpen={setOpen}/>
      {open && <Menu open={open} setOpen={setOpen}/>}
    </div>
  </header>
}