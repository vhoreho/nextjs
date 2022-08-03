import classNames from "classnames";

import styles from './styles.module.scss'

export const Burger = ({open, setOpen}) => {
    const btnClass = classNames(styles.button, {
        'active': open
    })

    return (
        <button className={btnClass} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}