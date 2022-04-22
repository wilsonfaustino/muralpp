import { ComponentMeta, ComponentStory } from '@storybook/react'

import { IconValues } from '.'

export default {
  title: 'IconValues',
  component: IconValues,
} as ComponentMeta<typeof IconValues>

const Template: ComponentStory<typeof IconValues> = (args) => <IconValues {...args} />

export const Default = Template.bind({})
