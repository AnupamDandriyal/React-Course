import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


const reactElement = React.createElement(
    'a',
    { href: "https://google.com", target: "_blank" },
    'Click to visit Google'
)


createRoot(document.getElementById('root')).render(
    /* reactElement */
    <App />
)
