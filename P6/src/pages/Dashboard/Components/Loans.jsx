import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"


const Loans = ({imgUrl}) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize='cover' bgRepeat='no-repeat'> 
      <Tag bg='purple.400' color='white'>Loans</Tag>
      <Text fontWeight='500' mt='4' textStyle='h5'>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</Text>
    </CustomCard>
  )
}

export default Loans