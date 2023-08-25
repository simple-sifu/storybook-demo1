import type { Meta, StoryObj} from '@storybook/react'

import Light from './Light';

const meta: Meta<typeof Light> ={
    component: Light,
    title: 'Example/Light',
    argTypes: {
        variant: {
            control: { type: 'select'},
            options: ['green', 'yellow', 'red']
        }
    }
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

export const Grouped: Story = {
    render: () => (
        <div
            style = {{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                border: '1px solid black',
                width: 'max-content',
                padding: 10,
                backgroundColor: 'black'
            }}
        >
            <Light variant='red' />
            <Light variant='yellow' />
            <Light variant='green' />
        </div>
    )
};