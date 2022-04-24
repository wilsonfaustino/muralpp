import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GridBottom } from '.'

export default {
  title: 'GridBottom',
  component: GridBottom,
} as ComponentMeta<typeof GridBottom>

const Template: ComponentStory<typeof GridBottom> = (args) => <GridBottom {...args} />

export const Default = Template.bind({})
