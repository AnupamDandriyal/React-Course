import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { IoMdClose } from "react-icons/io";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign-Up');

  useEffect(() => {
    // Freeze the background when the popup is open
    document.body.style.overflow = 'hidden';

    // Clean up and allow scrolling when the popup is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className=" absolute left-0 top-0 w-[100%] h-[100%] m-auto z-[9999] bg-[#00000090] ">
      <form className="login-container bg-white p-10 rounded animate-fadeInOnce w-[max(23vw,450px)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="login-title flex justify-between">
          <h2 className="text-3xl font-semibold text-red-500">{currState}</h2>
          <IoMdClose className="cursor-pointer text-2xl hover:text-pink-800" onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-inputs flex flex-col gap-3 mt-4">
          {currState === 'Sign-Up' ?
            <input className="border border-red-500  rounded h-8 pl-2" type="text" placeholder="Your Name" required /> :
         ''   
        }
         
          <input className="border border-red-500 rounded h-8 pl-2" type="email" placeholder="Your Email" required />
          <input className="border border-red-500  rounded h-8 pl-2" type="password" placeholder="Password" required />
        </div>
        <button className="mt-4 border py-2 px-4 font-semibold rounded bg-red-500 text-white hover:text-red-500 hover:border-red-500 hover:bg-white">{currState === 'Sign-Up' ? 'Create Account' : 'Login'}</button>
        <div className="login-condition flex gap-1 mt-4 items-start">
          <input type="checkbox" required />
          <p className="text-gray-500 leading-[15px]">By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
        <div className="text-center mt-10">
        {currState === 'Sign-Up' ? 
          <p className="text-gray-500">Already have an account? <span className="text-red-400 cursor-pointer ml-2" onClick={() => setCurrState('Login')}>Login</span> </p>
          : 
          <p className="text-gray-500">Create Account <span className="text-red-400 cursor-pointer ml-2" onClick={()=>setCurrState('Sign-Up')}>Sign-Up</span> </p>
         }
        
        </div>
        
        
      </form>
    </div>
  )
}
LoginPopUp.propTypes = {
  setShowLogin : PropTypes.func.isRequired,
}

export default LoginPopUp