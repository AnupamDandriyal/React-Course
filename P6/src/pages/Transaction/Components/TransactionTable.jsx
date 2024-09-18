import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  Tag,
} from '@chakra-ui/react'

const TransactionTable = () => {

  const tableData = [{
    id: 'HD82NA2H',
    date: '2022-06-09',
    time: '07:06 PM',
    type: {
      name: 'INR Deposit',
      tag: 'E-Transfer'
    },
    amount: '+ ₹81,123.10',
    status: 'Pending'
  },
  {
    id: 'HD82NA2H',
    date: '2022-07-09',
    time: '02:48 PM',
    type: {
      name: 'INR Withdraw',
      tag: 'Wire Transfer'
    },
    amount: '- ₹81,123.10',
    status: 'Processing'
  },
  {
    id: 'HD82NA2H',
    date: '2022-05-04',
    time: '03:10 PM',
    type: {
      name: 'Buy',
      tag: ''
    },
    amount: '+ 12.48513391 BTC',
    status: 'Cancelled'
  },
  {
    id: 'HD82NA2H',
    date: '2022-11-10',
    time: '04:12 PM',
    type: {
      name: 'Sell',
      tag: ''
    },
    amount: '- 0.36401628 BTC',
    status: 'Completed'
  },
  {
    id: 'HD82NA2H',
    date: '2022-07-09',
    time: '02:48 PM',
    type: {
      name: 'BTC Deposit',
      tag: ''
    },
    amount: '+4.13946104 BTC',
    status: 'Completed',
  },
  {
    id: 'HD82NA2H',
    date: '2022-11-09',
    time: '01:15 PM',
    type: {
      name: 'BTC Withdraw',
      tag: ''
    },
    amount: '- 10.0000000 BTC',
    status: 'Completed'
  },
    
  ];

  const statusColor = {
    Pending: '#797E82',
    Processing: '#F5A508',
    Completed: '#059669',
    Cancelled:'#DC2626', 
}

  return (
    <TableContainer>
      <Table variant='simple' colorScheme='gray'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color='p.black'>
          {
            tableData.map((data) => (
              <Tr key={data.id} >
                <Td fontSize='sm' fontWeight='medium'>{data.id}</Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize='sm' fontWeight='medium'>{data.date}</Text>
                    <Text fontSize='xs' color='black.60'>{data.time}</Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack  spacing={0}>
                    <Text fontSize='sm' fontWeight='medium'>{data.type.name}</Text>
                    <Text fontSize='xs' color='black.60'>{data.type.tag}</Text>
                  </Stack>
                </Td>
                <Td fontSize='sm' fontWeight='medium'>{data.amount}</Td>
                <Td fontSize='sm' fontWeight='medium'>
                  <Tag borderRadius='full' color='white' bg={statusColor[data.status]}>{data.status}</Tag>
                </Td>
              </Tr> 
              
            ))
          }
         
        </Tbody>
      
      </Table>
    </TableContainer>
  )
}

export default TransactionTable