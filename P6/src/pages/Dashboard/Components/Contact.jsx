import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/CustomCard"

const Contact = ({imgUrl}) => {
  return (
    <CustomCard bg='purple.400' bgImage={imgUrl} bgSize='cover' bgRepeat='no-repeat' >
      <Tag color='purple.400' bg='white'>Contact</Tag>
      <Text fontWeight='500' color='white' mt='4' textStyle='h5'>
      Learn more about our real estate, mortgage, and  corporate account services
      </Text>
    </CustomCard>
  )
}

export default Contact