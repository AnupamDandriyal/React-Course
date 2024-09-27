import styles from './Navbar.module.css'
import Button from '@mui/material/Button';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <NavLink to='/'><img src="/public/logo.svg" alt="logo" /></NavLink>
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.navlinks}>
          <NavLink to="/products" className={({isActive})=>(isActive ? styles.active : '')}>Products</NavLink>
          <p>&bull;</p>
          <NavLink to="/solutions" className={({isActive})=>(isActive ? styles.active : '')}>Solutions</NavLink>
          <p>&bull;</p>
          <NavLink to="/pricing" className={({isActive})=>(isActive ? styles.active : '')}>Pricing</NavLink>
        </div>
      </div>
      <div className={styles.right}>
        <Link to='/login'><Button className={styles.lightbtn} variant="outlined">Log In</Button></Link>
        <Link to='/get-started'><Button className={styles.darkbtn} variant="contained">Get Started</Button></Link>
      </div>
    </div>
  );
};

export default Navbar;
