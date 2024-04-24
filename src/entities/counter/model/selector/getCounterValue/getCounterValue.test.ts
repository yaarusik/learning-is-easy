import { getCounterValue } from 'entities/counter/model/selector/getCounterValue/index';
import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
