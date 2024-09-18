import { Card, Flex, HStack, Icon, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdMail } from 'react-icons/io'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMdMail} boxSize={6} color='purple.400'/>
        <Text fontWeight='medium ' textStyle='h1'>Contact Us</Text>
        <Text textStyle='h6' fontSize='sm' color='black.60'>Have a question or just want to know more? Feel free to reach out to us.</Text>
      </Stack>
      <Card p='6' borderRadius='16px'>
        <Text fontWeight='medium' fontSize='sm'>You will recieve response within 24 hours of time of submit</Text>
        <HStack>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type='text' placeholder='James' />
        </FormControl>
        <FormControl>
          <FormLabel>Surname</FormLabel>
          <Input type='text' placeholder='Arthur' />
        </FormControl>
        </HStack>
      </Card>
    </Flex>
  )
}

export default SupportCard