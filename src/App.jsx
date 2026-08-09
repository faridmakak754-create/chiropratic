import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TreatmentPage from './pages/TreatmentPage'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
     <Route path='/contact' element={<ContactPage />} />
     <Route path='/treatments' element={<TreatmentPage />} />
   </Routes>
    </div>
  )
}

export default App