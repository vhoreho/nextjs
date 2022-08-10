import { FC } from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void
}

export const Burger: FC<Props> = ({ open, setOpen }) => {
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