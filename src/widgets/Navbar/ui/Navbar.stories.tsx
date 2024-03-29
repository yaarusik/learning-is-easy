import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Navbar } from 'widgets/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    render: () => <Navbar />,
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <Navbar />,
};
