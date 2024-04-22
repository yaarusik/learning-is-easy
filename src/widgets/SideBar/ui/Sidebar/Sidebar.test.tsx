import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/SideBar/ui';
import { ComponentRender } from 'shared/config/tests/componentRender';

describe('Button', () => {
    test('Test render', () => {
        ComponentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        ComponentRender(<Sidebar />);

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();

        fireEvent.click(toggleBtn);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
