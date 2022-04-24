import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BirthDaySlider } from '.'

export default {
  title: 'BirthDaySlider',
  component: BirthDaySlider,
} as ComponentMeta<typeof BirthDaySlider>

const Template: ComponentStory<typeof BirthDaySlider> = (args) => <BirthDaySlider {...args} />

export const Default = Template.bind({})
