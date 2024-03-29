import type { Preview } from '@storybook/react';

import '../../src/app/styles/index.scss';
import { RouterDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)],
    parameters: {},
};

export default preview;
