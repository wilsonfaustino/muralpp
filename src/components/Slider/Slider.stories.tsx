import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Slider } from '.'

export default {
  title: 'Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
