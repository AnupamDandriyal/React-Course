import { AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom'
const Modal = ({ onClose, isOpen, children }) => {
  
  return createPortal(
    
    <>{isOpen &&
      <>
        <div className="min-h-[200px] max-w-[80%] bg-violet-200 m-auto p-4 relative z-20 rounded-md">
          <div className='flex justify-end'>
            <AiOutlineClose className='text-2xl' onClick={onClose} />
        </div>
        <div className='text-black font-medium'>
        {children}
        </div>
   
        </div>
        <div onClick={onClose} className=' absolute top-0 backdrop-blur h-screen w-screen z-10' />
      </>
    }
    </>
  ,document.getElementById('modal-root'));

}

export default Modal