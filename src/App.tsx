import { useEffect, useState } from 'react'

import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react'

import { BirthDaySlider } from './components/BirthDaySlider'
import { GridBottom } from './components/GridBottom'
import { MothersDaySlider } from './components/MothersDaySlider'
import { SecurityBox } from './components/SecurityBox'
import { WeatherFooter } from './components/WeatherFooter'
import { WeatherData } from './components/WeatherFooter/types'

export function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  const lat = -23.60130512729346
  const lng = -46.645420595784444

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric&lang=pt_br`
      )
      const data = await response.json()
      setWeatherData({ ...data })
      // console.log(data)
    }
    fetchData()
  }, [lat, lng])

  return (
    <Box w={'full'} h={'100vh'} bgGradient="linear(135deg, red.500, red.800)">
      <Box w={'1920px'} h={'1080px'} overflow={'hidden'}>
        <MothersDaySlider />
      </Box>
    </Box>
    // <Flex
    //   w="full"
    //   h="100vh"
    //   bgGradient="linear(135deg, red.500, red.800)"
    //   // bgGradient="linear(276deg,#2b87da 33%,#29c4a9 77%)"
    //   flexDir={'column'}
    // >
    //   <Flex p={8} flexDir={'column'} gap={4} flexGrow={1}>
    //     <Grid
    //       w={'full'}
    //       templateRows={'1fr'}
    //       templateColumns={'repeat(3, 1fr)'}
    //       gap={4}
    //     >
    //       <GridItem>
    //         <BirthDaySlider />
    //       </GridItem>
    //       <GridItem colSpan={2}>
    //         <SecurityBox />
    //       </GridItem>
    //     </Grid>
    //     <Grid
    //       w={'full'}
    //       templateRows={'1fr'}
    //       templateColumns={'repeat(3, 1fr)'}
    //       gap={4}
    //       flexGrow={1}
    //     >
    //       <GridItem colSpan={3}>
    //         <GridBottom />
    //       </GridItem>
    //     </Grid>
    //   </Flex>
    //   <WeatherFooter weatherData={weatherData} />
    //   {weatherData && <pre>{JSON.stringify(weatherData, null, 2)}</pre>}
    // </Flex>
  )
}
