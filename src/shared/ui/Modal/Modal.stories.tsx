import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    render: (args) => <Modal isOpen {...args}>Lorem ipsum </Modal>,
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: (args) => <Modal isOpen {...args}>Modal content</Modal>,
};
