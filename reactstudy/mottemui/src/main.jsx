import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Merong from './Merong.jsx'
import Sumin6 from './Sumin6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<App/>} >
           <Route index element={<Merong />} />
           <Route path="/merong" element={<Merong />} />
           <Route path="/sumin6" element={<Sumin6 />} />
         </Route>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
