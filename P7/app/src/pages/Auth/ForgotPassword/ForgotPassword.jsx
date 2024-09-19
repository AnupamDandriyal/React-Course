import React from 'react'
import Card from '../../../components/Card'
import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Formik, Form, Field } from 'formik';
import { object, string, } from 'yup';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const signinValidationSchema = object({
    email: string().email('Email is invalid').required('Email is required'),
  })
  return (
    <Container>
      <Center minH='100vh'>
        <Card>
          <Stack spacing={4}>
            <Link to='/signin'>
              <Icon as={IoMdArrowRoundBack} boxSize='24px' />
            </Link>
            <Text textStyle='h2' fontWeight='500'>Forgot Password</Text>
            <Text color='black.60' fontSize='16px'>Enter your email address for which account you want to reset your password.</Text>
            <Formik
            initialValues={{
              email: '',
            }}

            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signinValidationSchema}
          >
            {()=>(
            <Form>
              <Stack spacing={6} mt='5'>
                  <Field  name='email'>
                      {({field,meta}) => (
                         <FormControl isInvalid={!!(meta.error && meta.touched)}>
                         <FormLabel htmlFor = 'email'>
                           Email
                         </FormLabel>
                        <Input {...field} name='email' placeholder='jamesarthur@gmail.com' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                       </FormControl>
                      )}
                  </Field>
                  <Button colorScheme='gray' type='submit' color='black.60'><Link to='/forgot-password-sent'>Reset Password</Link></Button>      
                
              </Stack>
            </Form>
          )}
          </Formik>
          </Stack>
        </Card>
      </Center>
    </Container>
    
  )
}

export default ForgotPassword