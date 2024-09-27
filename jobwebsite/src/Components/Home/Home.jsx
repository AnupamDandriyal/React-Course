import styles from './Home.module.css';
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h2>Trusted by over 2800+ companies</h2>
        <h1>Find Your <span>Remote Job</span><br/> Easy And Fast.</h1>
        <h3>A Platform when you can get your desired job withput any hasse</h3>
        <div className={styles.entry}>
          <input type="email" placeholder='Your Email Address' />
          <Button className={styles.darkbtn} variant="contained">Get Started</Button>
        </div>
      </div>
      
   </div>
  )
}

export default Home