import { render } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

test('App', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
})