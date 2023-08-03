import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Contact from './Contact'
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('contact page features', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
        <MemoryRouter history={history}>
            <Contact />
        </MemoryRouter>
    );

    const emailButton = getByTestId('email-button')
    const phoneButton = getByTestId('phone-button')

    describe('email button and phone button', () => {
        
        test('renders two buttons that emails me and phones me', () => {
            
            expect(emailButton).toBeInTheDocument()
            expect(phoneButton).toBeInTheDocument()
    
        })

        test('opens up email', () => {
            fireEvent.click(emailButton)
            expect(emailButton).toHaveAttribute('href', 'mailto: vutriminh@gmail.com')
        })

        test('opens up phone', () => {
            fireEvent.click(phoneButton)
            expect(phoneButton).toHaveAttribute('href', 'tel:484-365-3631')
        })

    })

})