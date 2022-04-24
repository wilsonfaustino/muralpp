import { useEffect, useState } from 'react'

import { Grid } from '@chakra-ui/react'

import { Icons } from '../Icons'
import { PrincipleBox } from '../PrincipleBox'

import { companyTargets } from './companyTargets'

export function GridBottom() {
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev === 2 ? 0 : prev + 1))
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [currentItem])

  return (
    <Grid
      h={'full'}
      templateRows={'1fr'}
      templateColumns={'repeat(3, 1fr)'}
      gap={4}
    >
      {companyTargets.map((item, index) => (
        <PrincipleBox
          key={item.title}
          active={currentItem === index}
          title={item.title}
          description={item.description}
          icon={<Icons icon={item.icon} />}
        />
      ))}
    </Grid>
  )
}
