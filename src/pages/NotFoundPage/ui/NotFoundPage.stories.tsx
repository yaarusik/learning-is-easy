import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'page/NotFoundPage',
    component: NotFoundPage,
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
    render: () => <NotFoundPage />,
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <NotFoundPage />,
};
