import React from 'react'
import Card from '../../../components/Card'
import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { object, ref, string, } from 'yup';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const signinValidationSchema = object({
    email: string().email('Email is invalid').required('Email is required'),
    repeatPassword: string()
    .oneOf([ref('password'), null], 'Password must match')
  .required('Repeat password is required')
  })
  return (
    <Container>
      <Center minH='100vh'>
        <Card>
          <Stack spacing={4}>
            <Text textStyle='h2' fontWeight='500'>Reset Password</Text>
            <Text color='black.60' fontSize='16px'>Enter your new password.</Text>
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
              <Stack spacing={4} mt='3'>
              <Field  name='password'>
                      {({field,meta}) => (
                         <FormControl isInvalid={!!(meta.error && meta.touched)}>
                         <FormLabel htmlFor = 'password'>
                           Password
                         </FormLabel>
                        <Input {...field} name='password' type='password' placeholder='Password@123' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                       </FormControl>
                      )}
                  </Field>
                
                  <Field name='repeatPassword'>
                      {({field,meta}) => (
                         <FormControl isInvalid={!!(meta.error && meta.touched)}>
                         <FormLabel htmlFor = 'repeatPassword'>
                           Repeat Password
                         </FormLabel>
                        <Input {...field} name='repeatPassword' type='password' placeholder='Password@123' />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                       </FormControl>
                      )}
                  </Field>
                  <Button colorScheme='gray' type='submit' color='black.60'><Link to='/reset-password-success'>Reset Password</Link></Button>      
                
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

export default ResetPassword