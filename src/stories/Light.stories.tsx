import type { Meta, StoryObj} from '@storybook/react'

import Light from './Light';

const meta: Meta<typeof Light> ={
    component: Light,
    title: 'Light'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {}

export const Yellow: Story = {
    args: {
        variant: 'red',
    }
}

export const Red: Story = {
    args: {
        variant: 'red',
        
    }
}

export const Another: Story = {
    args: {
        variant: 'red'
    },
    render: (args) => <Light {...args} />,
};

export const AnotherExample: Story = {
    render: () => <Light variant='blue' />,
};