import styles from './dropdown-item.module.css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const DropdownItem = (props: Props) => {
  return (
    <li className={styles.container}>
      <button {...props} className={styles.button} />
    </li>
  )
}

export { DropdownItem }
