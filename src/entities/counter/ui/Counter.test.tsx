import { ComponentRender } from 'shared/config/tests/componentRender';
import { screen } from '@testing-library/react';
import { Counter } from 'entities/counter';
import { userEvent } from '@storybook/test';

describe('Counter', () => {
    test('test render', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toBeInTheDocument();
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('increment', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 5 } },
        });

        const decrementButton = screen.getByTestId('decrement-btn');
        await userEvent.click(decrementButton);

        expect(screen.getByTestId('value-title')).toHaveTextContent('4');
    });
});
