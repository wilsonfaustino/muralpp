import { useEffect, useState } from 'react'

import { Grid } from '@chakra-ui/react'

import { IconMission } from '../IconMission'
import { IconValues } from '../IconValues'
import { IconVision } from '../IconVision'
import { PrincipleBox } from '../PrincipleBox'

import type { GridBottomProps } from './types'

export function GridBottom({ prop = 'GridBottom' }: GridBottomProps) {
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentItem === 2) {
        setCurrentItem(0)
      }
      setCurrentItem(currentItem + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentItem])
  return (
    <Grid
      h={'full'}
      templateRows={'1fr'}
      templateColumns={'repeat(3, 1fr)'}
      gap={4}
    >
      <PrincipleBox
        active={currentItem === 0}
        title={'Nossa Missão'}
        description={
          'Desenvolver serviços inovadores para o mercado de embalagem, tornando o fluxo de trabalho de pessoas e empresas mais inteligentes e integrados.'
        }
        icon={<IconMission />}
      />
      <PrincipleBox
        active={currentItem === 1}
        title={'Nossa Visão'}
        description={
          'Ser referência na América do Sul em inovação para o mercado de embalagem.'
        }
        icon={<IconVision />}
      />
      <PrincipleBox
        active={currentItem === 2}
        title={'Nossos Valores'}
        description={
          'Respeito às pessoas, à Diversidade e ao Meio Ambiente Responsabilidade • Ética e Transparência • Qualidade Inovação • Pontualidade • Paixão.'
        }
        icon={<IconValues />}
      />
    </Grid>
  )
}
