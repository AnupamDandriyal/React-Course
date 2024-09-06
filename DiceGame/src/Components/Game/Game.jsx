import styles from "./Game.module.css"
import Button from "../Button/Button"
const Game = () => {
  return (
    <div className={styles.main}>
      <img src="/img/dice_1.png" alt="dice" />
      <p>Click on the dice to roll</p>
      <Button text="Reset Score" type='primaryBtn' />
      <Button text="Show Rule" type='primaryBtn' isDark = {true} />
    </div>
  )
}

export default Game