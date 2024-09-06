import styles from './Button.module.css'
const Button = (props) => {
  return (
    (props.type=='btn') ?
      <button className={(props.isActive) ? styles.active : styles.btn}>{props.text}</button>
      :
      <button className={(props.isDark ) ? styles.dark: styles.primaryBtn}>{props.text}</button>
    
  )
}

export default Button