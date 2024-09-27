import styles from './Navbar.module.css'
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src="/public/logo.svg" alt="logo" />
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.navlinks}>
          <a href="#">Products</a>
          <p>&bull;</p>
          <a href="#">Solutions</a>
          <p>&bull;</p>
          <a href="#">Pricing</a>
        </div>
      </div>
      <div className={styles.right}>
        <Button className={styles.lightbtn} variant="outlined">Log In</Button>
        <Button className={styles.darkbtn} variant="contained">Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;
