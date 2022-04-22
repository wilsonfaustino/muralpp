import { ComponentMeta, ComponentStory } from '@storybook/react'

import { IconMission } from '.'

export default {
  title: 'IconMission',
  component: IconMission,
} as ComponentMeta<typeof IconMission>

const Template: ComponentStory<typeof IconMission> = (args) => <IconMission {...args} />

export const Default = Template.bind({})
