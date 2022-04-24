import { Flex, Grid, GridItem } from '@chakra-ui/react'

import { BirthDaySlider } from './components/BirthDaySlider'
import { GridBottom } from './components/GridBottom'
import { SecurityBox } from './components/SecurityBox'

export function App() {
  return (
    <Flex h="100vh" bgGradient="linear(135deg, gray.100, gray.400)" p={8}>
      <Grid
        w={'full'}
        h={'full'}
        templateRows={'repeat(2, 1fr)'}
        templateColumns={'repeat(3, 1fr)'}
        gap={4}
      >
        <GridItem>
          <BirthDaySlider />
        </GridItem>
        <GridItem colSpan={2} h={'full'}>
          <SecurityBox />
        </GridItem>
        <GridItem colSpan={3}>
          <GridBottom />
        </GridItem>
      </Grid>
    </Flex>
  )
}
