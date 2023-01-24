import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../index';

describe('Header', () => {
    it('toggles the darkmode option', () => {
        const mockToggle = jest.fn();
        render(<Header dark={true} onToggleDarkMode={mockToggle()} />);
        const toggle = screen.getByRole(/button/i);
        fireEvent.click(toggle);
        expect(toggle).toHaveBeenCalledTimes(1);
    });

})
