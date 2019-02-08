// Test away!
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

afterEach( cleanup );


describe('Testing the controls component', () => {
    it('should render control component', () => {
        render(<Controls />)
    });

    it('should toggle buttons', () => {
        const { getByText } = render(<Controls closed={false} locked={true} />)
        getByText(/lock gate/i);
        getByText(/close gate/i);
    })

    it('should not disable when open and unlocked', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />);
        const toggleLockButton = getByText(/lock gate/i);
        expect(toggleLockButton).toHaveAttribute('disabled', '')
    })

    it('should not close when already closed', () => {
        const { getByText } = render(<Controls closed={true} />)
        getByText(/open gate/i);
    })
})
