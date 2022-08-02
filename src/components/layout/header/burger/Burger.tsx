import styles from './Burger.module.scss'
import classNames from "classnames";

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