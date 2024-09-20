import React from 'react'
import Card from '../../../components/Card'
import { Button, Center, Container, FormControl, FormErrorMessage, FormLabel, Icon, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { object, ref, string, } from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { verifyForgotToken } from '../../../api/query/userQuery';

const resetPasswordValidationSchema = object({
  password: string().min(6, 'Password must be atleast of 6 characters')
  .required('Password is required'),
  repeatPassword: string()
  .oneOf([ref('password'), null], 'Password must match')
.required('Repeat password is required')
})

const ResetPassword = () => {

  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();

  const {  mutate, isLoading } = useMutation({
 mutationKey: ['verify-forgot-token'],
 mutationFn:verifyForgotToken,
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: 'error'
      });
      navigate('/signup');
    },
    onSettled: () => {
      navigate:('/reset-success')
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
        <Card>
          <Stack spacing={4}>
            <Text textStyle='h2' fontWeight='500'>Reset Password</Text>
            <Text color='black.60' fontSize='16px'>Enter your new password.</Text>
            <Formik
            initialValues={{
              email: '',
            }}

            onSubmit={(values) => {
              mutate({ password: values.password,token });
            }}
            validationSchema={resetPasswordValidationSchema}
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