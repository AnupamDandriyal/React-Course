import './App.css'
import Navbar from './Components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./config/firebase";
import { LuUserCircle2 } from "react-icons/lu";
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri'
import ContactCard from './Components/ContactCard';

function App() {

  const [contacts, setContacts] = useState([]);

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
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-2'>
      <div className='flex relative flex-grow items-center'>
      <FiSearch className='text-3xl text-white absolute ml-1 cursor-pointer'/>
        <input type="text"
          className='border bg-transparent rounded-md 
          flex-grow h-10 text-white pl-9  pb-2' />
        
      </div>
      
        <AiFillPlusCircle className='text-white text-5xl cursor-pointer' />
    
      </div>
      <div className='mt-5 flex flex-col gap-3'>
        {
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact = {contact} />

          ))
        }
      </div>
    </div>
  )
}

export default App
