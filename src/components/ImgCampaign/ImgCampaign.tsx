import { AspectRatio, Image } from '@chakra-ui/react'

import type { ImgCampaignProps } from './types'

export function ImgCampaign(props: ImgCampaignProps) {
  return (
    <AspectRatio w={'full'} ratio={16 / 9}>
      <Image src={props.imgSrc} rounded={'xl'} objectFit={'cover'} />
    </AspectRatio>
  )
}
