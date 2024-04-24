import React from 'react';
import {
    Meta, StoryObj,
} from '@storybook/react';
import { Input } from 'shared/ui/Input/Input';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    render: () => <Input placeholder="text" value="12345" />,
};
