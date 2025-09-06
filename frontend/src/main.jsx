import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  {ContextProvider}  from './ContextApi.jsx'

createRoot(document.getElementById('root')).render(
<ContextProvider>
  <React.StrictMode>
  <App />
  </React.StrictMode>
</ContextProvider>

)
