import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PrincipleBox } from '.'

export default {
  title: 'PrincipleBox',
  component: PrincipleBox,
} as ComponentMeta<typeof PrincipleBox>

const Template: ComponentStory<typeof PrincipleBox> = (args) => <PrincipleBox {...args} />

export const Default = Template.bind({})
