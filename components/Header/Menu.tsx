import styles from '../../styles/components/header/Menu.module.scss';
// @ts-ignore
import Link from "next/link";

export const Menu = ({open, setOpen}) => {
    return (
        <div>
            <button className={styles.close} onClick={() => setOpen(!open)}>x</button>
            <nav className={styles.menu}>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/stories">
                    <a className={styles.link}>World</a>
                </Link>
                <Link href="/automobile">
                    <a className={styles.link}>Automobiles</a>
                </Link>
                <Link href='/real' >
                    <a className={styles.link}>Real Estate</a>
                </Link>
                <Link href='/finance'>
                    <a className={styles.link}>Finance</a>
                </Link>
            </nav>
        </div>
    )
}