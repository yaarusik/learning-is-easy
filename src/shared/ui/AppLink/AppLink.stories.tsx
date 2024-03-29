import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    render: (args) => <AppLink theme={AppLinkTheme.PRIMARY} {...args}>Text</AppLink>,
};

export const Secondary: Story = {
    render: (args) => <AppLink theme={AppLinkTheme.SECONDARY} {...args}>Text</AppLink>,
};

export const Red: Story = {
    render: (args) => <AppLink theme={AppLinkTheme.RED} {...args}>Text</AppLink>,
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: (args) => <AppLink theme={AppLinkTheme.PRIMARY} {...args}>Text</AppLink>,
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: (args) => <AppLink theme={AppLinkTheme.SECONDARY} {...args}>Text</AppLink>,
};

export const RedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: (args) => <AppLink theme={AppLinkTheme.RED} {...args}>Text</AppLink>,
};
