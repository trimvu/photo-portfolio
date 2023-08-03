import React from 'react'
import { fireEvent, render} from '@testing-library/react'
import About from './About'
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('about page features', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
        <MemoryRouter history={history}>
            <About />
        </MemoryRouter>
    );

    const contactButton = getByTestId('contact-button')
    
    test('renders a button that generates brings you to home page', () => {
        
        expect(contactButton).toBeInTheDocument()

    })

    test('navigate to the /home page', () => {
        fireEvent.click(contactButton)
        setTimeout(() => {
            expect(history.location.pathname).toBe('/contact');
        }, 100);
    })

})