import { Center, Container, FormControl, HStack, Input, Stack, Text, FormLabel, InputGroup, InputRightElement, Button, Checkbox, Box, FormErrorMessage, useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string, ref} from 'yup';
import Card from '../../../components/Card'
import { useMutation } from 'react-query';
import { signupUser } from '../../../api/query/userQuery';



const signupValidationSchema = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email('Email is invalid').required('Email is required'),
  password: string().min(6, 'Password must be atleast of 6 characters')
    .required('Password is required'),
  repeatPassword: string()
    .oneOf([ref('password'), null], 'Password must match')
  .required('Repeat password is required')
})


const Signup = () => {

  const [email, setEmail] = useState('');
  

  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading, } = useMutation(
    {
      mutationKey: ['signup'],
      mutationFn: signupUser,
      onSuccess: (data) => { 
        if (email) {
          navigate(`/register-email-verify/${email}`);
        }
      
      },
      onError: (error) => {
        toast({
          title: 'Signup Error',
          description: error.message,
          status:'error'
        })
      }
    }
  );

  console.log(email)

  return (
    <Container>
      <Center minH='100vh'>
        <Card>
          <Text fontWeight='medium' textStyle='h1'>Welcome to Crypto App</Text>
          <Text mt='16px' color='black.60' textStyle='p2'>Create a free account by filling data below</Text>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              password: '',
              repeatPassword:'',
            }}

            onSubmit={(values) => {
              setEmail(values.email);
              mutate({
                firstName: values.name,
                lastName: values.surname,
                email: values.email,
                password:values.password,
              });
              
            }}
            validationSchema={signupValidationSchema}
          >
            {()=>(
            <Form>
              <Stack spacing={6} mt='5'>
                  <HStack>
                    <Field  name='name'>
                      {({field,meta}) => (
                         <FormControl isInvalid={!!(meta.error && meta.touched)}>
                         <FormLabel htmlFor = 'name'>
                           Name
                         </FormLabel>
                          <Input {...field} name='name' placeholder='James' />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                        </FormControl>
                        
                      )}
                    </Field>

                    <Field name='surname'>
                      {({field,meta}) => (
                         <FormControl isInvalid={!!(meta.error && meta.touched)}>
                         <FormLabel htmlFor = 'surname'>
                           Surname
                         </FormLabel>
                          <Input {...field} name='surname' placeholder='Arthur' />
                          <FormErrorMessage>{meta.error}</FormErrorMessage>
                       </FormControl>
                      )}
                    </Field>
                  </HStack>
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
                <Checkbox><Text fontSize='sm' >I agree with <Box cursor='pointer' as='span' color='p.purple' fontWeight='medium' >Terms and Conditions</Box></Text></Checkbox>
                <Button isLoading={isLoading} type='submit' colorScheme='gray'>Create Account</Button>
                <Text fontSize='sm' alignSelf='center'>Already have an account? <Link cursor='pointer' to='/signin'><Text color='p.purple' as='span' fontWeight='medium' >Log in</Text></Link></Text>
              </Stack>
            </Form>
          )}
          </Formik>
          
        </Card>
      </Center>
    </Container>
   
  )
}

export default Signup
