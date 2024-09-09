import Modal from "./Modal"
import {Field, Form, Formik} from 'formik'

const AddAndUpdate = ({isOpen, onClose}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik initialValues={{
          name:'',
          email:'',
        }}
          onSubmit={(values) => {
          console.log(values)
        }}
        >
        <Form className="flex gap-3 flex-col pb-11">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <Field name="name" className='rounded-md h-10 px-2 font-normal'/>
          </div>
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <Field name="email" className='rounded-md h-10 px-2 font-normal' />
          </div>
          <button className="bg-violet-500 text-white h-10 mt-5 w-[60%] m-auto rounded-md">Add Contact</button>
            
        </Form>
      </Formik>
      </Modal>
      
    </div>
  )
}

export default AddAndUpdate