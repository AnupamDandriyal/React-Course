import styles from "./First.module.css"

const First = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src="img/Dices.png" alt="Dices" />
      </div>
      <div className={styles.right}>
        <h1>dice game</h1>
        <button className={styles.play}>Play Now</button>
      </div>
    </div>
  )
}

export default First