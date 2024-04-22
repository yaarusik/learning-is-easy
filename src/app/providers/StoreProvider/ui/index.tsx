import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    children?: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
