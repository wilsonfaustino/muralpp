import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SliderCompanyValues } from '.'

export default {
  title: 'SliderCompanyValues',
  component: SliderCompanyValues,
} as ComponentMeta<typeof SliderCompanyValues>

const Template: ComponentStory<typeof SliderCompanyValues> = (args) => <SliderCompanyValues {...args} />

export const Default = Template.bind({})
