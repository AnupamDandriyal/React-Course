import styles from './ContactForm.module.css'
import Button from '../Buttons/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

const ContactForm = () => {
  return (
    <div className={`container ${styles.contactform}`}>
      <div className="left">
      <div className={`${styles.btns}`}>
          <Button text="via support chat"
            icon={ <MdMessage fontSize="20px" />}
          />
          <Button text="via call"
            icon={<FaPhoneAlt fontSize="16px"/>} 
          />
      </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default ContactForm