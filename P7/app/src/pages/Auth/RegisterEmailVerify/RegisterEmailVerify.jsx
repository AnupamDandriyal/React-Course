import { Button, Center, Container, Icon, Text, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import {MdEmail} from 'react-icons/md'


const RegisterEmailVerify = () => {
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
            <Icon as={MdEmail} boxSize='48px' color='p.purple' />
            <Text textStyle='h4' fontWeight='medium'>Email Verification</Text>
            <Text textAlign='center' textStyle='p2' color='black.60' >
              We have sent you an email verification to <Text fontWeight='550' as='span' color='p.black'>jenny.wilson@gmail.com </Text>. If you didn’t receive it, click the button below.
            </Text>
            <Button w='full' variant='outline'>Re-Send Email</Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  
  )
}

export default RegisterEmailVerify