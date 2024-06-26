import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'page/MainPage',
    component: MainPage,
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
    render: () => <MainPage />,
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <MainPage />,
};
