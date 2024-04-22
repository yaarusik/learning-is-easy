import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/counter/model/selector/getCounter';

// createSelector мемоизирует значение
export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value,
);
