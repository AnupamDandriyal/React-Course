
import { Box, Button, Card, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import {FormControl,FormLabel,} from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react'
const ContactCard = () => {
  return (
    <Card p='6' borderRadius='16px' flexGrow={1}>
        <Text fontWeight='medium' fontSize='sm'>You will recieve response within 24 hours of time of submit</Text>
        <Stack spacing={3}  mt={4}>
          <HStack flexDir={
            {
              base: 'column',
              md:'row'
            }
          }
          >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='James' />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type='text' placeholder='Arthur' />
          </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='jamesarthur@gmail.com' />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea type='text' placeholder='Your Message' />
          </FormControl>
          <Checkbox defaultChecked><Text fontSize='xs'> I agree with <Box as='span' color='p.purple'>Terms and Conditions</Box></Text></Checkbox>
          <Stack spacing={2} >
            <Button fontSize='sm'>Send a Message</Button>
            <Button fontSize='sm' colorScheme='gray'>Book a Meeting</Button>
          </Stack>
        </Stack>        
      </Card>
    )
}

export default ContactCard