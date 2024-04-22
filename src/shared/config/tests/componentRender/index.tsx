import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export const ComponentRender = (
    component: ReactNode,
    options: IComponentRenderOptions = {},
) => render(
    <StoreProvider initialState={options.initialState}>
        <MemoryRouter initialEntries={[options.route || '/']}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    </StoreProvider>,
);
