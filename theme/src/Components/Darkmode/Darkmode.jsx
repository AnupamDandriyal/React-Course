import { useEffect, useState } from 'react'
import styles from'./Darkmode.module.css'
import Sun from './Sun.svg'
import Moon from './Moon.svg'

const Darkmode = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === "light" ? 'dark' : 'light';
    setTheme(newTheme);
    console.log(newTheme);
    localStorage.setItem('selectedTheme',newTheme)
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme',theme)
  },[theme])
  return (
    <div className={styles.dark_mode}>
      <input type="checkbox"
        className={styles.dark_mode_input}
        id='darkmode-toggle'
        onClick={toggleTheme}
        checked={theme === 'dark'}
      />
      <label htmlFor="darkmode_toggle" className={styles.dark_mode_label}>
        <img className={styles.sun} src={Sun} alt="light" />
        <img className={styles.moon} src={Moon} alt="dark" />
      </label>
    </div>
  )
}

export default Darkmode