import { AspectRatio, Image } from '@chakra-ui/react'

// import type { ImgCampaignProps } from './types'

export function ImgCampaign() {
  return (
    <AspectRatio w={'full'} ratio={16 / 9}>
      <Image
        src={`/campanha_agasalho/campanha_agasalho_2022.jpg`}
        rounded={'xl'}
        objectFit={'cover'}
      />
    </AspectRatio>
  )
}
