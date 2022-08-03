import Link from "next/link";

import styles from './styles.module.scss';

export const Menu = ({open, setOpen}) => {
    return (
        <div>
            <button className={styles.close} onClick={() => setOpen(!open)}>x</button>
            <nav className={styles.menu}>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/world">
                    <a className={styles.link}>World</a>
                </Link>
                <Link href="/automobiles">
                    <a className={styles.link}>Automobiles</a>
                </Link>
                <Link href='/realestate' >
                    <a className={styles.link}>Real Estate</a>
                </Link>
                <Link href='/business'>
                    <a className={styles.link}>Finance</a>
                </Link>
            </nav>
        </div>
    )
}