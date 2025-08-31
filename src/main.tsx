
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import ErrorBoundary from './components/ErrorBoundary'

console.log('Bootstrapping app...')

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <ErrorBoundary>
    <HashRouter>
      <App />
    </HashRouter>
  </ErrorBoundary>
)
