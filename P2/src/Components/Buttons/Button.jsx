import styles from './Button.module.css'
const Button = (props) => {
  console.log(props);
  return (
    <button className={`${styles.primaryBtn}`}> {props.icon} &nbsp; {props.text}</button>

  )
}

export default Button