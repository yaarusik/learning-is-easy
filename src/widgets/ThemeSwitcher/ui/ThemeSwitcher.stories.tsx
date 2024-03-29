import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
    render: () => <ThemeSwitcher />,
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <ThemeSwitcher />,
};
