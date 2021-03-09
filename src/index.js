import { render } from '@testing-library/react';
import ReactDOM from 'react-dom'
import App from './app'
import './app.css'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)