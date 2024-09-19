import { Box, Button, Center, Container, Icon, Text, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from "react-router-dom"


const RegisterSuccesful = () => {
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
            <Text textStyle='h4' fontWeight='medium'>Succesfully Registered</Text>
            <Text textAlign='center' textStyle='p2' color='black.60' >
            Hurray! You have successfully created your account. Enter the app to explore all it’s features.
            </Text>
            <Button w='full'><Link to='/signin'>Enter the App</Link></Button>
           
          </VStack>
        </Card>
      </Center>
    </Container>
  
  )
}

export default RegisterSuccesful