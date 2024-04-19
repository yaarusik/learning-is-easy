import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    render: () => <Button theme={ButtonTheme.CLEAR}>button</Button>,
};

export const ClearInverted: Story = {
    render: () => <Button theme={ButtonTheme.CLEAR_INVERTED}>button</Button>,
};

export const Outline: Story = {
    render: () => <Button theme={ButtonTheme.OUTLINE}>button</Button>,
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <Button theme={ButtonTheme.OUTLINE}>button</Button>,
};

export const OutlineSizeM: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Button size={ButtonSize.M} theme={ButtonTheme.BACKGROUND_INVERTED}>
            button
        </Button>
    ),
};

export const OutlineSizeL: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Button size={ButtonSize.L} theme={ButtonTheme.BACKGROUND_INVERTED}>
            button
        </Button>
    ),
};

export const OutlineSizeXL: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    render: () => (
        <Button size={ButtonSize.XL} theme={ButtonTheme.BACKGROUND_INVERTED}>
            button
        </Button>
    ),
};

export const BackgroundTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <Button theme={ButtonTheme.BACKGROUND}>button</Button>,
};

export const BackgroundInvertedTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => <Button theme={ButtonTheme.BACKGROUND_INVERTED}>button</Button>,
};

export const SquareSizeM: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Button square size={ButtonSize.M} theme={ButtonTheme.BACKGROUND_INVERTED}>
            {'>'}
        </Button>
    ),
};

export const SquareSizeL: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Button square size={ButtonSize.L} theme={ButtonTheme.BACKGROUND_INVERTED}>
            {'>'}
        </Button>
    ),
};

export const SquareSizeXL: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    render: () => (
        <Button square size={ButtonSize.XL} theme={ButtonTheme.BACKGROUND_INVERTED}>
            {'>'}
        </Button>
    ),
};
