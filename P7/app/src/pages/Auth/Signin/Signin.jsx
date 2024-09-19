
import {  Center, Container, FormControl, HStack, Input, Stack, Text, FormLabel, Button, Checkbox, FormErrorMessage } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string, } from 'yup';
import Card from '../../../components/Card'



const Signin = () => {
  const signinValidationSchema = object({
    email: string().email('Email is invalid').required('Email is required'),
    password: string().min(6, 'Password must be atleast of 6 characters')
      .required('Password is required'),
  })
  

  return (
    <Container >
      <Center minH='100vh'>
        <Card>
          <Text fontWeight='medium' textStyle='h1'>Welcome to Crypto App</Text>
          <Text mt='16px' color='black.60' textStyle='p2'>Enter your credentials to access the account</Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
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
                  <HStack justifyContent='space-between'>
                    <Checkbox><Text fontSize='sm' >Remember me</Text></Checkbox>
                    <Link to='/forgot-password'>
                      <Text cursor='pointer' fontSize='sm' fontWeight='medium' color='p.purple'>Forgot Password?</Text>
                    </Link>
                    
                </HStack>
                <Stack spacing={3}>
                  <Button type='submit'>Log In</Button>
                  <Button variant='outline'><Link to ='/signup'>Create New Account</Link></Button>
               </Stack>
                
              </Stack>
            </Form>
          )}
          </Formik>
          
        </Card>
      </Center>
    </Container>
   
  )
}

export default Signin