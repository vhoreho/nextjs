import Link from "next/link";
import classNames from "classnames";
import { Instagram, Twitter, Facebook } from 'components/icon';
import styles from './styles.module.scss';

export function Footer() {
  const year = new Date().getFullYear();
  const containerClass = classNames('container', styles.container)

  return <footer className={styles.footer}>
    <div className={containerClass}>
      <div className={styles.copy}>
        &copy; {year} Best News
      </div>
      <nav className={styles.nav}>
        <Link href='/about'>
          <a className={styles.link}>About Us</a>
        </Link>
        <Link href='/help'>
          <a className={styles.link}>Help</a>
        </Link>
        <Link href='/advertise'>
          <a className={styles.link}>Advertise</a>
        </Link>
        <Link href='/policy'>
          <a className={styles.link}>Privacy Policy</a>
        </Link>
        <Link href='/terms'>
          <a className={styles.link}>Terms of Service</a>
        </Link>
      </nav>
      <ul className={styles.footerSocials}>
        <li className={styles.socialsItem}>
          <Link href='https://twitter.com/'>
            <a target='_blank'>
              <Twitter className={styles.socialsItemFill}/>
            </a>
          </Link>
        </li>
        <li className={styles.socialsItem}>
          <Link href='https://www.google.com'>
            <a target='_blank'>
              <Facebook className={styles.socialsItemFill}/>
            </a>
          </Link>
        </li>
        <li className={styles.socialsItem}>
          <Link href='https://instagram.com/'>
            <a target='_blank'>
              <Instagram className={styles.socialsItemFill}/>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </footer>
}