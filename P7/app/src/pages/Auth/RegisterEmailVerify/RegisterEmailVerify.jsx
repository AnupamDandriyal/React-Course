import { Button, Center, Container, Icon, Spinner, Text, useToast, VStack } from "@chakra-ui/react"
import Card from "../../../components/Card"
import {MdEmail} from 'react-icons/md'
import { useParams } from "react-router-dom"
import { useMutation, useQuery } from 'react-query';
import { sendVerificationMail } from "../../../api/query/userQuery";
import { useEffect } from "react";

const RegisterEmailVerify = () => {

  const toast = useToast();
  const { email } = useParams();
  if (email === '') {
    return <Center h='100vh'>Invalid Email</Center>
  }
  const {mutate,isLoading,isSuccess } = useMutation(
    {
     mutationKey: ['send-verification-mail'],
     mutationFn: sendVerificationMail,
      onSettled: (data) => { 
        console.log(data);
      },
      onError: (error) => {
        toast({
          title: 'SignUp Error',
          description: error.message,
          status:'error'
        })
      },
      enabled: !!email,
    });

  useEffect(() => {
      mutate({ email }); 
  },[email]);


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
             We have sent you an email verification to <Text fontWeight='550' as='span' color='p.black'>{email} </Text>. If you didn’t receive it, click the button below.
           </Text>
              <Button onClick={() => {
                mutate({email});
              }}
           isLoading={isLoading} w='full' variant='outline'>Re-Send Email</Button>
         </VStack>
       </Card>
      </Center>
    </Container>
  
  )
}

export default RegisterEmailVerify