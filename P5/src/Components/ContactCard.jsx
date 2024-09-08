import { LuUserCircle2 } from "react-icons/lu";
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri'

const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className='bg-yellow flex justify-between rounded-md p-1.5'>
              <div className="flex gap-4 items-center ">
              <LuUserCircle2 className='text-orange text-4xl'/>
              <div className='text-black font-medium'>
                <h1 className='font-medium'>{contact.name}</h1>
                <p className='text-sm'>{contact.email}</p>
              </div>
              </div>
              <div className='flex items-center'>
              <RiEditCircleLine className='text-2xl'/>
              <IoMdTrash className='text-purple-600 text-2xl' />
             </div>
              
            </div>
  )
}

export default ContactCard