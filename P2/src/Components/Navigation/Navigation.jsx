import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className= {`${styles.navigation} container`}>
      <div className='logo'>
        <img src="/Img/Frame 2 1.png" alt="logo" />
      </div>
      <ul>
        <li href='#'>Home</li>
        <li href='#'>About</li>
        <li href='#'>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navigation