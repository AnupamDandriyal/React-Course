import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Please Sign In</h1>
      <form>
        <div className={styles.entry}>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder='jamesarthur@gmail.com' />
        </div>

        <div className={styles.entry}>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='jArthur@123' />
        </div>

        <div>
          <label htmlFor="remember"><input type="checkbox" name="remember" />Remember me</label>
        </div>
        <button type='submit' className={styles.submit}>Submit</button>
      </form>
    </div>
  )
}

export default Contact