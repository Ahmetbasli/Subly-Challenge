import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ContextProvider from './contexts/contexts'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
