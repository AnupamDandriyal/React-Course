import './App.css'
import Navbar from './Components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./config/firebase";
import ContactCard from './Components/ContactCard';
import AddAndUpdate from './Components/AddAndUpdate';

function App() {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactsList = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactsList);
      }
      catch (error) {
        console.log(error);
      }
    }

    getContacts();
  },[])
  

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-2'>
      <div className='flex relative flex-grow items-center'>
      <FiSearch className='text-3xl text-white absolute ml-1 cursor-pointer'/>
        <input type="text"
          className='border bg-transparent rounded-md 
          flex-grow h-10 text-white pl-9  pb-2' />
        
      </div>
      
        <AiFillPlusCircle onClick={onOpen} className='text-white text-5xl cursor-pointer' />
    
      </div>
      <div className='mt-5 flex flex-col gap-3'>
        {
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact = {contact} />

          ))
        }
      </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose}/>
    </>
    
  )
}

export default App
