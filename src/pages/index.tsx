import {ReactElement} from "react";
import classNames from "classnames";

import styles from 'components/home/Home.module.scss';

export default function Home():ReactElement {

    return (
            <div className={classNames('container', styles.home)}>
                <h1>Hello Next JS</h1>
            </div>
        )     
}