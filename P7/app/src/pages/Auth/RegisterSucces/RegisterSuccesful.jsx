import { Box, Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import { FaCheckCircle } from 'react-icons/fa'
import { Link, useNavigate, useParams } from "react-router-dom"
import { verifyEmailAddressSignup } from "../../../api/query/userQuery"

const RegisterSuccesful = () => {

  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();

  const {  isSuccess, isLoading } = useQuery({
  queryKey: ['verify-email-token'],
  queryFn:()=>verifyEmailAddressSignup({token}),
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: 'error'
      });
      navigate('/signup');
    }
  })
  

  if (isLoading) {
    return (
      <Center h='100vh'>
        <Spinner />
      </Center>
    )
  }


  return (
    <Container>
      <Center minH='100vh'>
        {
          isSuccess &&
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
        }
       
      </Center>
    </Container>
  
  )
}

export default RegisterSuccesful




/* 2:29 */