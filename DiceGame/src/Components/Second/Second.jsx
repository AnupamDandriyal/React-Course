import { useState } from "react"
import styles from "./Second.module.css"
import Button from "../Button/Button"
import Game from "../Game/Game"
import Rules from "../Rules/Rules"
const Second = () => {
  const [score,setScore] = useState(0)
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className={styles.right}>
          <div className={styles.btns}>
            <Button text='1' type='btn'/>
            <Button text='2' type='btn'/>
            <Button text='3' type='btn'/>
            <Button text='4' type='btn' isActive={true} />
            <Button text='5' type='btn'/>
            <Button text='6' type='btn'/>
          </div>
          <p>Select Number</p>
        </div>
      </div>
      <Game />
      <Rules />
    </div>

   
    
  )
}

export default Second