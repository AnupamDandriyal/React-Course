import {FaUserTie} from 'react-icons/fa'
import { Box, Heading, Menu, MenuButton, MenuItem, MenuList, HStack, Icon } from "@chakra-ui/react";
import {FaBars} from 'react-icons/fa'
import useAuth from '../../../P7/app/src/hooks/useAuth';

const Topbar = ({ title, onOpen }) => {
  const {logout } = useAuth();
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
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
    
  )
}

export default Topbar