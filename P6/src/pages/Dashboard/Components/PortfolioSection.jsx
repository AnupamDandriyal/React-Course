import { Button, HStack, Icon, Stack,Tag,Text } from "@chakra-ui/react"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { PiHandDepositBold } from "react-icons/pi";
import { PiHandWithdrawBold } from "react-icons/pi";


const PortfolioSection = () => {
  return (
    <HStack
      bg='white' borderRadius='xl' p='6' 
      align={{
        base: 'flex-start',
        xl:'center'
      }}
      flexDir={{
        base: 'column',
        xl:'row'
      }}
      spacing={{
        base: 4,
        xl:0
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl:16,
        }}
        align={{
          base: 'flex-start',
          xl:'center'
        }}
        flexDir={{
          base: 'column',
          xl:'row'
        }}
      >
      <Stack>
        <HStack color='black.80'>
          <Text fontSize='sm'>Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text color='black' textStyle='h2' fontWeight='medium'>₹ 112,312.24</Text>
      </Stack>
      <Stack marginRight='140px'>
        <HStack color='black.80' >
          <Text fontSize='sm'>Wallet Balance</Text>
        </HStack>
          <HStack spacing={5}
            align={{
              base: 'flex-start',
              sm:'center'
              }}
              flexDir={{
                base: 'column',
                sm:'row'
              }}
          >
          <HStack>
            <Text color='black' textStyle='h2' fontWeight='medium'>22.39401000</Text>
            <Tag fontSize='xs' colorScheme="gray">BTC</Tag>
          </HStack>
          <HStack>
            <Text color='black' textStyle='h2' fontWeight='medium'>₹ 1,300.00</Text>
            <Tag fontSize='xs' colorScheme="gray">INR</Tag>
          </HStack>
        
        </HStack>
       
      </Stack>
      </HStack>
      <HStack>
        <Button bgColor='purple.400' color='white' > <PiHandDepositBold />&nbsp; Deposit </Button>
        <Button bgColor='purple.400' color='white'> <PiHandWithdrawBold />&nbsp; WithDraw</Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection


/* 1:24 */