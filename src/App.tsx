import { Center, Flex, Grid, GridItem, Image } from '@chakra-ui/react'

import { BirthDaySlider } from './components/BirthDaySlider'
import { GridBottom } from './components/GridBottom'
import { SecurityBox } from './components/SecurityBox'

export function App() {
  return (
    <Flex
      w="full"
      h="100vh"
      // bgGradient="linear(135deg, gray.100, gray.400)"
      bgGradient="linear(276deg,#2b87da 33%,#29c4a9 77%)"
      flexDir={'column'}
    >
      <Flex p={8} flexDir={'column'} gap={4} flexGrow={1}>
        <Grid
          w={'full'}
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
          flexGrow={1}
        >
          <GridItem colSpan={3}>
            <GridBottom />
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        w={'full'}
        h={'110px'}
        px={8}
        alignItems={'center'}
        justifyContent={'space-between'}
        bgColor={'gray.100'}
        boxShadow={'0px -2px 4px rgba(0, 0, 0, 0.1)'}
        borderTop={'2px solid'}
        borderColor={'gray.400'}
      >
        <Center
          w={'300px'}
          h={'90px'}
          fontFamily={'heading'}
          border={'2px dashed gray'}
          borderRadius={'lg'}
          fontSize={'2xl'}
          fontWeight={'bold'}
        >
          Info Horas
        </Center>
        <Center
          w={'300px'}
          h={'90px'}
          fontFamily={'heading'}
          border={'2px dashed gray'}
          borderRadius={'lg'}
          fontSize={'2xl'}
          fontWeight={'bold'}
        >
          Previsão do tempo
        </Center>
        <Image src={'/logoPaintPack.svg'} h={'70px'} />
      </Flex>
    </Flex>
  )
}
