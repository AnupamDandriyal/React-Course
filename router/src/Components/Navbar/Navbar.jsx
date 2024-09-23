
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/027/971/388/small_2x/3d-render-round-warm-orange-fire-flame-icon-realistic-hot-sparks-light-gas-logo-design-for-emoticon-energy-power-ui-png.png" alt="logo" />
        <div className={styles.navlinks}>
          <ul>
            <li>
              <NavLink className={styles.navlink} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive })=>isActive ? `${styles.navlink} ${styles.active}`: styles.navlink} to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) => 
                  isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
                }  to='/contact'>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <button>Add User</button>
      </div>
   </div>
  )
}

export default Navbar