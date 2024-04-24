import { getCounter } from 'entities/counter/model/selector/getCounter/index';
import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
    });
});
