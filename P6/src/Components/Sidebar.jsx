import { Box, Heading, HStack, Icon, Stack,Text } from '@chakra-ui/react'
import { RxDashboard } from 'react-icons/rx';
import { GrTransaction } from 'react-icons/gr';
import { BiSupport } from 'react-icons/bi';
import { Link,useLocation} from 'react-router-dom';


const Sidebar = () => {
  const loaction = useLocation()
  const isActiveLink = (link) => {
    return location.pathname == link
}

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link:"/"
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link:"/transactions"
    }
  ]
  return (
    <Stack justify='space-between' boxShadow={{base:'none',lg:'md'}} w={{base:'full',lg:'16rem'}} h="100vh" bg='white'>
      <Box>
      <Heading textAlign='center' pt='3.5rem' fontSize='20px' textColor='blueviolet' as="h1">CODERS-HUB</Heading>
      <Box mt='6' mx='3' fontWeight='medium' color='#797E82'>
        {
            navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack py='3' px='4' borderRadius='5px'
                _hover={{
                  bg: '#F3F3F7',
                  color: 'black',
                  fontWeight:'bold'
                } 
                }
              >
                <Icon as={nav.icon} />
                <Text fontSize='14px' >{nav.text}</Text>
              </HStack>
            </Link>
          ))
        }
      </Box>
      </Box>
      <Box m='6' mx='3' fontWeight='medium' color='#797E82'>
        <Link to='/support'>
        <HStack py='3' px='4' borderRadius='10px'
            _hover={{
              bg: '#F3F3F7',
              color: 'black',
              fontWeight:'bold'
            } 
            }
          >
            <Icon as={BiSupport} />
            <Text fontSize='14px' >Support</Text>
        </HStack>
        </Link>
      </Box>
    </Stack>
  )
}

export default Sidebar