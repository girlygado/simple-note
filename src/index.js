import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'

import { GlobalProvider } from './context/GlobalContext'

ReactDOM.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
    document.getElementById('root')
)