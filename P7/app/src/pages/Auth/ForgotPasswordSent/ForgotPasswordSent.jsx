import { Box, Button, Center, Container, Icon, Text, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from "react-router-dom"


const ForgotPasswordSent = () => {
  return (
    <Container>
      <Center minH = '100vh'>
        <Card
           p={{
            base: '4',
            md:'10'
          }}
          showCard={true}
        > 
          <VStack spacing={6}>
            <Icon as={ FaCheckCircle } boxSize='48px' color='green' />
            <Text textStyle='h4' fontWeight='medium'>Succesfully Sent</Text>
            <Text textAlign='center' textStyle='p2' color='black.60' >
              We have sent you instructions about how to reset yout password to<Text fontWeight='550' as='span' color='p.black'>jenny.wilson@gmail.com </Text>. Please follow the instructions from the email.
            </Text>
           
          </VStack>
        </Card>
      </Center>
    </Container>
  
  )
}

export default ForgotPasswordSent