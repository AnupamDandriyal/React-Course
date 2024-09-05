import styles from './ContactForm.module.css'
import Button from '../Buttons/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

const ContactForm = () => {
  return (
    <div className={`container ${styles.contactform}`}>
      <div className={styles.left}>
      <div className={styles.btns}>
          <Button text="via support chat"
            icon={ <MdMessage fontSize="20px" />}
          />
          <Button text="via call"
            icon={<FaPhoneAlt fontSize="16px"/>} 
          />
        </div>
        <Button isOutline={true} text="via email form" icon={<HiMail fontSize="16px" />}></Button>
        <form>
          <div className={styles.inputContainer}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" name='name' className={styles.input} />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="email" className={styles.label}>E-Mail</label>
            <input type="email" name='email' className={styles.input} />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="msg" className={styles.label}>Message</label>
            <input type="text" name='msg' className={styles.text} />
          </div>

          <div className={styles.submitBtn}>
          <Button text='submit'/>
          </div>
          
        </form>
      </div>
      <div className={styles.right}>
        <img src="\Img\Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  )
}

export default ContactForm