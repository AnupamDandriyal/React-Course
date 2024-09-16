import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../Components/DashboardLayout"
import PortfolioSection from "./Components/PortfolioSection"
import PriceSection from "./Components/PriceSection"
import TransactionSection from "./Components/TransactionSection"
import Loans from "./Components/Loans"
import Contact from "./Components/Contact"


const Dashboard =  () => {
  return (
    <DashboardLayout title='Dashboard'>
      <Grid gridTemplateColumns={{
        base: 'repeat(1,1fr)',
        xl:'repeat(2,1fr)'
      }}
      gap='6'>
        <GridItem colSpan={{
          base: 1,
          xl:2,
        }}>
        <PortfolioSection/>
        </GridItem>
        <GridItem colSpan={1}>
        <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
        <TransactionSection />
        </GridItem>
        <GridItem colSpan={1}>
        <Loans imgUrl = '/Loan.svg' />
        </GridItem>
        <GridItem colSpan={1}>
        <Contact imgUrl = '/Visual.svg' />
        </GridItem>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard