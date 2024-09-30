import PropTypes from 'prop-types';
import styles from  './Button.module.css'
import { useState } from 'react';

const Button = ({ btns, setValue,value }) => {
  const [activeBtn, setActiveBtn] = useState(null);
  const handleClick = (btn) => {
    setActiveBtn(btn);
    if (btn !== '=' && btn !== 'C') {
      let newVal = value + btn;
      setValue(newVal);
    }
    else if (btn === 'C') {
      setValue('');
    }
    else if (btn === '=') {
        let result = eval(value);
        setValue(result); 
    }
  }
  return (
    <>
       <div className="container text-center">
        <div className="row">
          {
            btns.map((btn) => (
              <div key={btn} className="col">
                <button onClick={() => handleClick(btn)}
                  type="button"
                  className={`btn btn-info ${activeBtn === btn ? styles.active : ''}`}>{btn}</button>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}


Button.propTypes = {
  btns: PropTypes.arrayOf(PropTypes.string).isRequired, 
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,  
};

export default Button