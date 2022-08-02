import styles from './Menu.module.scss';
import Link from "next/link";

export const Menu = ({open, setOpen}) => {
    return (
        <div>
            <button className={styles.close} onClick={() => setOpen(!open)}>x</button>
            <nav className={styles.menu}>
                <Link href="/pages">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/stories">
                    <a className={styles.link}>World</a>
                </Link>
                <Link href="/pages/automobile">
                    <a className={styles.link}>Automobiles</a>
                </Link>
                <Link href='/real' >
                    <a className={styles.link}>Real Estate</a>
                </Link>
                <Link href='/pages/finance'>
                    <a className={styles.link}>Finance</a>
                </Link>
            </nav>
        </div>
    )
}