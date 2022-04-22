import { ComponentMeta, ComponentStory } from '@storybook/react'

import { IconVision } from '.'

export default {
  title: 'IconVision',
  component: IconVision,
} as ComponentMeta<typeof IconVision>

const Template: ComponentStory<typeof IconVision> = (args) => <IconVision {...args} />

export const Default = Template.bind({})
