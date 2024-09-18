import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from "@chakra-ui/react"
import DashboardLayout from "../../Components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./Components/TransactionTable";
import {BsSearch} from 'react-icons/bs'


const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count:349,
    },
    {
      name: "Deposit",
      count:114,
    },
    {
      name: "Withdraw",
      count:55
    },
    {
      name: "Trade",
      count:50,
    },
  ]
  return (
    <DashboardLayout title='Transactions'>
      <Flex justify='end' mb='3'>
        <Button leftIcon={<Icon fontSize='x-large' as={AiOutlineDownload} />} bg='purple.400' color='white'>Export CSV</Button>
      </Flex>
      <Card borderRadius='16px'>
        <Tabs>
          <TabList pt='4' display='flex' justifyContent='space-between'>
            <HStack>
            {tabs.map((tab) => (
              <Tab key={tab.name} display='flex' gap='2' pb='4'>{tab.name}
                <Tag colorScheme="gray" borderRadius='full'>{tab.count}</Tag>
              </Tab>
            ))}
            </HStack>
          <InputGroup maxW='260px' pr='6'>
            <InputLeftElement pointerEvents='none'>
              <Icon as={BsSearch} />
            </InputLeftElement>
            <Input type='text' placeholder='Search by ID or destination' />
          </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
            <TransactionTable />
            </TabPanel>
            <TabPanel>
            <TransactionTable />
            </TabPanel>
            <TabPanel>
            <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
    
  )
}

export default Transactions