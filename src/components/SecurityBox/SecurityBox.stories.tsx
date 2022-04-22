import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SecurityBox } from '.'

export default {
  title: 'SecurityBox',
  component: SecurityBox,
} as ComponentMeta<typeof SecurityBox>

const Template: ComponentStory<typeof SecurityBox> = (args) => <SecurityBox {...args} />

export const Default = Template.bind({})
