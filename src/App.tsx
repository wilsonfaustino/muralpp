import { Flex, Grid, GridItem, Image } from '@chakra-ui/react'

import { BirthDaySlider } from './components/BirthDaySlider'
import { GridBottom } from './components/GridBottom'
import { SecurityBox } from './components/SecurityBox'

export function App() {
  return (
    <Flex
      w="full"
      h="100vh"
      bgGradient="linear(135deg, gray.100, gray.400)"
      flexDir={'column'}
    >
      <Flex p={8} flexDir={'column'} gap={4} flexGrow={1}>
        <Grid
          w={'full'}
          // h={'full'}
          templateRows={'1fr'}
          templateColumns={'repeat(3, 1fr)'}
          gap={4}
        >
          <GridItem>
            <BirthDaySlider />
          </GridItem>
          <GridItem colSpan={2}>
            <SecurityBox />
          </GridItem>
        </Grid>
        <Grid
          w={'full'}
          templateRows={'1fr'}
          templateColumns={'repeat(3, 1fr)'}
          gap={4}
        >
          <GridItem colSpan={3} h={'300px'}>
            <GridBottom />
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        w={'full'}
        h={'110px'}
        px={8}
        alignItems={'center'}
        justifyContent={'end'}
        bgColor={'gray.100'}
        boxShadow={'0px -2px 4px rgba(0, 0, 0, 0.1)'}
        borderTop={'2px solid'}
        borderColor={'gray.400'}
      >
        <Image src={'/logoPaintpack.svg'} h={'70px'} />
      </Flex>
    </Flex>
  )
}
