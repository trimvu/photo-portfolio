import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders a button that generates a random card', () => {
    const { getByTestId } = render(<App />)
    const nameElement = getByTestId('random-button')

    expect(nameElement).toBeInTheDocument()
})