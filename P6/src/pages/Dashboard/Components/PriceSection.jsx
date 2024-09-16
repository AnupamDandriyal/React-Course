
import { Button, Flex, HStack, Icon, Stack, Image, Text, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { AiOutlineRise } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

const PriceSection = () => {
  const timeStamps = ["7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM"]
  return (
    <CustomCard>
      <Flex justify='space-between' align='start'>
      <Stack color='black.80' >
          <Text fontSize='sm'>Current Price</Text>
          <HStack>
          <HStack align='flex-end'>
            <Text color='black' textStyle='h2' fontWeight='medium'>₹26,670.25</Text>
            <HStack color='	#46b108' textStyle='h6' fontWeight='medium'>
              <Icon as={AiOutlineRise} />
              <Text> 0.04%</Text>
            </HStack>
          </HStack>
        </HStack>
        </Stack>
        <HStack>
        <Button bgColor='purple.400' color='white' > <FaCirclePlus />&nbsp; Buy </Button>
        <Button bgColor='purple.400' color='white'> <FaCircleMinus />&nbsp; Sell</Button>
      </HStack>
      </Flex>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <Flex justify='end'>
          <TabList bg='black.5' p='5px' borderRadius='4px'>
            {
              ["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab _selected={{bg:"white"}} key={tab} fontSize='sm' p='3px' borderRadius='4px'>{tab}</Tab>
              ))
            }
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w='100%' src="/Graph.svg" alt="graph" mt='50px' mb='5px' />
            <Flex justifyContent='space-between'>
            {timeStamps.map((timeStamp) => (
              <Text key={timeStamp} fontSize='sm' color='gray'>
                {timeStamp}
              </Text>
            ))}
      </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>   
    </CustomCard>
  )
}

export default PriceSection