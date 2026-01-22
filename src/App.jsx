import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InnovationLabs from './components/InnovationLabs'
import SuccessStories from './components/SuccessStories'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Services from './components/Services'
import ProductsPage from './components/ProductsPage'
import InnovationLabsPage from './components/InnovationLabsPage'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import CollaboratePage from './components/CollaboratePage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <InnovationLabs />
          <SuccessStories />
          <CTA />
        </>
      ) : currentPage === 'services' ? (
        <Services />
      ) : currentPage === 'products' ? (
        <ProductsPage />
      ) : currentPage === 'innovation-labs' ? (
        <InnovationLabsPage />
      ) : currentPage === 'case-studies' ? (
        <CaseStudiesPage />
      ) : currentPage === 'about' ? (
        <AboutPage />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'collaborate' ? (
        <CollaboratePage />
      ) : null}
      
      <Footer />

      {/* Floating Chat Icon - Appears on all pages */}
      <div className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg transition duration-200 transform hover:scale-110 z-40">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>
    </div>
  )
}

export default App
