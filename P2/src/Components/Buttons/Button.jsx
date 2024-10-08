import styles from './Button.module.css'
const Button = (props) => {
  return (
    <button
      className={props.isOutline ? styles.OutlineBtn : styles.primaryBtn}>
      {props.icon} &nbsp; {props.text}</button>

  )
}

export default Button