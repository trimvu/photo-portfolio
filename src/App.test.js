import React from 'react'
import { fireEvent, render} from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('home page features', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
        <MemoryRouter history={history}>
            <App />
        </MemoryRouter>
    );

    const enterButton = getByTestId('enter-button')
    
    test('renders a button that generates brings you to home page', () => {
        
        expect(enterButton).toBeInTheDocument()

    })

    test('navigate to the /home page', () => {
        fireEvent.click(enterButton)
        setTimeout(() => {
            expect(history.location.pathname).toBe('/home');
        }, 100);
    })

})