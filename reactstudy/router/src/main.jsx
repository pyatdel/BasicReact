import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 99% 얘만 씀
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>  
)
