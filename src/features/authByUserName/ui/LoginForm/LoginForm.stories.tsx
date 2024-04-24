import React from 'react';
import {
    Meta, StoryObj,
} from '@storybook/react';
import { LoginForm } from './index';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    render: () => <LoginForm />,
};
