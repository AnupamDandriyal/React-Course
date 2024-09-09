import Modal from "./Modal"
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { db } from '../config/firebase'
import {addDoc, collection,doc,updateDoc} from 'firebase/firestore'
import { toast } from "react-toastify"
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email:Yup.string().email("Invalid E-mail").required("Email is required")
})

const AddAndUpdate = ({ isOpen, onClose, isUpdate,contact}) => {
  
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success('Succefully Added')
    }
    catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (contact,id) => {
    try {
      const contactRef = doc(db, "contacts",id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success('Succefully Updated')
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
          isUpdate ? {
            name:contact.name,
            email:contact.email,
          }
            :
          {
          name:'',
          email:'',
        }}
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id):
            addContact(values);
        }}
        >
        <Form className="flex gap-3 flex-col pb-11">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
              <Field name="name" className='rounded-md h-10 px-2 font-normal' />
              <div className=" text-red-500 text-xs">
                <ErrorMessage name = "name" />
              </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
              <Field name="email" className='rounded-md h-10 px-2 font-normal' />
              <div className="text-red-500 text-xs">
                <ErrorMessage name = "email" />
              </div>
          </div>
          <button className="bg-violet-500 text-white h-10 mt-5 w-[60%] m-auto rounded-md">{isUpdate ? 'Update' : "Add"} Contact</button>
            
        </Form>
      </Formik>
      </Modal>
      
    </div>
  )
}

export default AddAndUpdate