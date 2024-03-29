import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: () => <Button>button</Button>,
};

export const Clear: Story = {
    render: () => <Button theme={ThemeButton.CLEAR}>button</Button>,
};

export const Outline: Story = {
    render: () => <Button theme={ThemeButton.OUTLINE}>button</Button>,
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <Button theme={ThemeButton.OUTLINE}>button</Button>,
};
