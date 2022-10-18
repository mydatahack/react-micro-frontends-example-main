import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { GlobalStyles } from './GlobalStyles'
import { AppExample1 } from './pages/AppExample1/AppExample1'
import { AppExample2 } from './pages/AppExample2/AppExample2'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app-1" element={<AppExample1 />} />
        <Route path="/app-2" element={<AppExample2 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
