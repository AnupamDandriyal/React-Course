import { LuUserCircle2 } from "react-icons/lu";
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import { deleteDoc, doc } from 'firebase/firestore';
import {db} from "../config/firebase"
import AddAndUpdate from "./AddAndUpdate";
import useDisclouse from "../Hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclouse();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success('Succefully Deleted')
    } catch (error) {
      console.log(error)
      toast.error('Attempt was unsuccesful ')
    }
  }
  return (
    <div key={contact.id} className='bg-yellow flex justify-between rounded-md p-1.5'>
              <div className="flex gap-3 items-center w-[80%]">
                <LuUserCircle2 className='text-orange text-3xl'/>
                <div className='text-black font-medium'>
                  <h1 className='font-medium'>{contact.name}</h1>
                  <p className='text-sm'>{contact.email}</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
              <RiEditCircleLine onClick={onOpen} className='text-2xl cursor-pointer'/>
              <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-red-900 text-2xl cursor-pointer' />
      </div>
      <AddAndUpdate contact={contact} isOpen={isOpen} onClose={onClose} isUpdate />
            </div>
  )
}

export default ContactCard