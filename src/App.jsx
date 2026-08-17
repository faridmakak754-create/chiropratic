import React from 'react'
import HomePage from './pages/HomePage'
import {  Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TreatmentPage from './pages/TreatmentPage'
import GalleryPage from './pages/GalleryPage'
import PrivacyPolicy from './pages/PrivacyPage'
import TermsConditions from './pages/TermsConditionPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
 
   <ScrollToTop />
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
     <Route path='/contact' element={<ContactPage />} />
     <Route path='/treatments' element={<TreatmentPage />} />
     <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/privacy' element={<PrivacyPolicy />} />
      <Route path='/terms' element={<TermsConditions />} />
   </Routes>
    </div>
  )
}

export default App