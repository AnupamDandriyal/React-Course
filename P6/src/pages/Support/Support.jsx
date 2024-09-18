import { Stack } from "@chakra-ui/react"
import DashboardLayout from "../../Components/DashboardLayout"
import SupportCard from "./Components/SupportCard"
import ContactCard from "./Components/ContactCard"
import { IoMdMail } from 'react-icons/io';
import { AiTwotoneMessage } from 'react-icons/ai';
import Contact from "../Dashboard/Components/Contact";


const Support = () => {
  return (
    <DashboardLayout title='Support'>
      <Stack spacing='60px'>
      <SupportCard leftComponent={<ContactCard />} title='Contact Us'
        text='Have a question or just want to know more? Feel free to reach out to us.'
        icon={IoMdMail}
      ></SupportCard>
      <SupportCard leftComponent={<Contact imgUrl = '/Visual.svg'/>} title='Live Chat'
        text="Don't have time to wait for your answers? Chat with us now!"
        icon={AiTwotoneMessage}
      ></SupportCard>
      </Stack>
    </DashboardLayout>
    
  )
}

export default Support