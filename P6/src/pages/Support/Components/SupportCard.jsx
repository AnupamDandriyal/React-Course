import { Box, Button, Card, Flex, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoMdMail } from 'react-icons/io'
import {FormControl,FormLabel,} from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react'

const SupportCard = ({leftComponent,icon,title,text}) => {
  return (
    <Flex gap={6} flexDir={
      {
        base: 'column',
        xl:'row'
      }
    }>
      <Stack maxW='24rem'>
        <Icon as={icon} boxSize={6} color='purple.400'/>
        <Text fontWeight='medium ' textStyle='h1'>{title}</Text>
        <Text textStyle='h6' fontSize='sm' color='black.60'>{text}</Text>
      </Stack>
      <Box maxW='550px' w='full'>  {leftComponent}</Box>
    
    </Flex>
  )
}

export default SupportCard