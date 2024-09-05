import styles from './ContactForm.module.css'
import Button from '../Buttons/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('User');
  const [email, setEmail] = useState('user@gmail.com');
  const [msg, setMsg] = useState('Your Message');
  const submitForm = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMsg(e.target[2].value)
    /* console.log("Name:", e.target[0].value);
    console.log("E-mail:", e.target[1].value);
    console.log("Message:", e.target[2].value); */

  }
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

        <form onSubmit={submitForm}>
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
            <textarea type="text" name='msg' className={styles.text} />
          </div>

          <div className={styles.submitBtn}>
          <Button text='submit'/>
          </div>
          <div>{name + " (" + email + ") sent: " + msg}</div>
        </form>
      </div>
      <div className={styles.right}>
        <img src="\Img\Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  )
}

export default ContactForm