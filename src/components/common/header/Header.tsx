import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Logo } from "components/icon";
import { Burger } from "./components/burger/Burger";
import { Menu } from "./components/menu/Menu";

import styles from './styles.module.scss';

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { section } = router.query;

  return (
    <header className={styles.header}>
      <div className='container flex-center'>
        <Link href='/'>
          <a className={styles.logo}>
            <Logo />
          </a>
        </Link>
        <nav className={styles.nav}>
          <Link href="/home" className={styles.active}>
            <a className={classNames(styles.link, { [styles.active]: section === 'home' })}>Home</a>
          </Link>
          <Link href="/world" className={styles.active}>
            <a className={classNames(styles.link, { [styles.active]: section === 'world' })}>World</a>
          </Link>
          <Link href="/automobiles" className={styles.active}>
            <a className={classNames(styles.link, { [styles.active]: section === 'automobiles' })}>Automobiles</a>
          </Link>
          <Link href='/realestate' className={styles.active}>
            <a className={classNames(styles.link, { [styles.active]: section === 'realestate' })}>Real Estate</a>
          </Link>
          <Link href='/business' className={styles.active}>
            <a className={classNames(styles.link, { [styles.active]: section === 'business' })}>Finance</a>
          </Link>
        </nav>
        <Burger open={open} setOpen={setOpen} />
        {open && <Menu open={open} setOpen={setOpen} />}
      </div>
    </header>
  )
}