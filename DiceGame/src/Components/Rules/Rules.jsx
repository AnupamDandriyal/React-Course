import styles from "./Rules.module.css"
const Rules = () => {
  return (
    <div className={styles.main}>
      <h3>How to play dice game</h3>
      <p>Select any number.</p>
      <p>Click on dice image.</p>
      <p>After clicking on dice if selected number is equal to dice number, you will get points as dice.</p>
      <p>If you get wrong guess then 2 points will be deducted.</p>
    </div>
  )
}

export default Rules