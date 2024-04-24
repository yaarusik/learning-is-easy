import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { IStateSchema } from 'app/providers/StoreProvider/config/stateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface IStoreProviderProps {
    initialState?: DeepPartial<IStateSchema>
    children?: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema);

    return <Provider store={store}>{children}</Provider>;
};
