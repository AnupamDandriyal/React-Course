import './App.css'
import Navbar from './Components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "./config/firebase";
import ContactCard from './Components/ContactCard';
import AddAndUpdate from './Components/AddAndUpdate';
import useDisclouse from './Hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './Components/NotFound';

function App() {

  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclouse();
  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactsList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      const filteredContacts = contactsList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()));
      setContacts(filteredContacts);
      return filteredContacts;
    })
  }
  

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          });
          setContacts(contactsList);
          return contactsList;
        })
        
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
        <input onChange={filterContacts}  type="text"
          className='border bg-transparent rounded-md 
          flex-grow h-10 text-white pl-9 pb-0.8' />
        
      </div>
      
          <AiFillPlusCircle onClick={onOpen} className='text-white text-5xl cursor-pointer' />
    
      </div>
      <div className='mt-5 flex flex-col gap-3'>
        { contacts.length <= 0 ? <NotFound />:
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact = {contact} />

          ))
        }
      </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
    </>
    
  )
}

export default App
