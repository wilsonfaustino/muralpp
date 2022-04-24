import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

import { GridBottom } from './components/GridBottom'
import { IconMission } from './components/IconMission'
import { IconValues } from './components/IconValues'
import { IconVision } from './components/IconVision'
import { PersonCard } from './components/PersonCard'
import { PrincipleBox } from './components/PrincipleBox'
import { SecurityBox } from './components/SecurityBox'

export function App() {
  return (
    <Flex
      h="100vh"
      // bg={'#ed1c24'}
      bgGradient="linear(135deg, gray.100, gray.400)"
      p={8}
    >
      <Grid
        w={'full'}
        h={'full'}
        templateRows={'repeat(2, 1fr)'}
        templateColumns={'repeat(3, 1fr)'}
        gap={4}
      >
        <GridItem>
          <Box
            rounded={'md'}
            p={4}
            h={'full'}
            pos={'relative'}
            // alignItems={'center'}
            // bgGradient={'linear-gradient(45deg, #edeaea 0%, #ffffff 99%)'}
          >
            {/* <Heading
              textAlign={'center'}
              color={'gray.600'}
              fontWeight={500}
              textColor={'gray.200'}
              letterSpacing={'0.2em'}
              textTransform={'uppercase'}
            >
              Aniversariantes
            </Heading> */}
            <PersonCard />
            <Box
              w={'full'}
              h={'150px'}
              zIndex={'1'}
              pos={'absolute'}
              bottom={'-10px'}
              left={0}
              bgImage="url('/birthday-cake.png')"
              bgPos={'bottom center'}
              bgSize={'300px'}
              bgRepeat={'no-repeat'}
            ></Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2} h={'full'}>
          <SecurityBox />
        </GridItem>
        <GridItem colSpan={3}>
          {/* <Grid
            h={'full'}
            templateRows={'1fr'}
            templateColumns={'repeat(3, 1fr)'}
            gap={4}
          >
            <PrincipleBox
              title={'Nossa Missão'}
              description={
                'Desenvolver serviços inovadores para o mercado de embalagem, tornando o fluxo de trabalho de pessoas e empresas mais inteligentes e integrados.'
              }
              icon={<IconMission />}
            />
            <PrincipleBox
              title={'Nossa Visão'}
              description={
                'Ser referência na América do Sul em inovação para o mercado de embalagem.'
              }
              icon={<IconVision />}
            />
            <PrincipleBox
              title={'Nossos Valores'}
              description={
                'Respeito às pessoas, à Diversidade e ao Meio Ambiente Responsabilidade • Ética e Transparência • Qualidade Inovação • Pontualidade • Paixão.'
              }
              icon={<IconValues />}
            />
          </Grid> */}
          <GridBottom />
        </GridItem>
      </Grid>
    </Flex>
  )
}
