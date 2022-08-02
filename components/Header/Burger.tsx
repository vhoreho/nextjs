import styles from '../../styles/components/header/Burger.module.scss'

export const Burger = ({open, setOpen}) => {
    return (
        <button className={`${styles.button} ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}