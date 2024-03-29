import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { PageError } from 'widgets/PageError/ui/PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    render: () => <PageError />,
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <PageError />,
};
