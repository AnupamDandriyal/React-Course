import {FaUserTie} from 'react-icons/fa'
import { Box, Container, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Button, HStack, Icon } from "@chakra-ui/react";
import {FaBars} from 'react-icons/fa'

const Topbar = ({title,onOpen}) => {
  return (
    <Box px='4' color='Blueviolet' bg='white'>
      <HStack h='16' justifyContent={"space-between"} maxW='70rem' mx='auto'> 
        <Icon as={FaBars} onClick={onOpen} cursor='pointer'
          display={{
            base: 'block',
            lg:'none'
        }}/>
        <Heading fontWeight='medium' fontSize='28px'>{title}</Heading>
        <Menu>
          <MenuButton h='42px' w='42px' color='blueviolet' /* borderRadius='50%' border='1px solid' */>
            <Icon as={FaUserTie} fontSize='24px'/>
          </MenuButton>
          <MenuList>
            <MenuItem>Login / Sign-Up</MenuItem>
            <MenuItem>Account Details</MenuItem>
            <MenuItem>Plans</MenuItem>
            <MenuItem>Reach Us</MenuItem>
            <MenuItem>Register for Session</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
    
  )
}

export default Topbar