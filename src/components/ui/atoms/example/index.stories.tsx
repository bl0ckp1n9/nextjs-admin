import { ComponentStory, ComponentMeta } from '@storybook/react'

import Index from './index'

export default {
  title: 'Index',
  component: Index
} as ComponentMeta<typeof Index>

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />

export const Default = Template.bind({})
