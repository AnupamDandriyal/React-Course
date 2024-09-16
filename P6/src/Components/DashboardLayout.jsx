
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidebar from "../Components/Sidebar"
import Topbar from "../Components/Topbar"
import SideDrawer from "./SideDrawer"

const DashboardLayout = ({ title, children }) => {
  const {isOpen,onClose,onOpen} = useDisclosure()
  return (
    <Flex>
      <Box
        display={{
          base: 'none',
          lg:'flex',
      }}
      >
         <Sidebar />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <Topbar title={title} onOpen={onOpen}/>
        <Container mt='6' maxW='70rem'>{children}</Container>
      </Box>
    </Flex>
  )
}

export default DashboardLayout