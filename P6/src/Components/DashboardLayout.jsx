
import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "../Components/Sidebar"
import Topbar from "../Components/Topbar"

const DashboardLayout = ({title,children}) => {
  return (
    <Flex>
      <Sidebar />
      <Box flexGrow={1}>
        <Topbar title={title} />
        <Box px='4'>{children}</Box>
      </Box>
    </Flex>
  )
}

export default DashboardLayout