
import styles from  './Home.module.css'
const Home = () => {
  return (
    <div className={styles.container}>
      <img src="https://w7.pngwing.com/pngs/622/442/png-transparent-say-hello-to-new-people-illustration.png" alt="homepic" />
      <h1>Hellow People</h1>
      <p>Quickly design and customize mobile-first sites with Bootstrap, the worlds most popular front-end open 
        source toolkit, featuring Sass variables and misins, responsive grid systems, extensive prebuilt components, and powerful JavaScript plugins.
      </p>
      <div className={styles.btns}>
      <button className={styles.bluebtn}>Getting Started</button>
      <button>Contact-Us</button>
      </div>
      
    </div>
  )
}

export default Home