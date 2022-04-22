import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PersonCard } from '.'

export default {
  title: 'PersonCard',
  component: PersonCard,
} as ComponentMeta<typeof PersonCard>

const Template: ComponentStory<typeof PersonCard> = (args) => <PersonCard {...args} />

export const Default = Template.bind({})
