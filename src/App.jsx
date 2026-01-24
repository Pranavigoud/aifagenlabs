import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AIServicesSolutions from './components/AIServicesSolutions'
import FlagshipProducts from './components/FlagshipProducts'
import InnovationLabs from './components/InnovationLabs'
import SuccessStories from './components/SuccessStories'
import Footer from './components/Footer'
import Services from './components/Services'
import ProductsPage from './components/ProductsPage'
import InnovationLabsPage from './components/InnovationLabsPage'
import CaseStudiesPage from './components/CaseStudiesPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import CollaboratePage from './components/CollaboratePage'
import ChatWidget from './components/ChatWidget'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero setCurrentPage={setCurrentPage} setIsChatOpen={setIsChatOpen} />
          <AIServicesSolutions setCurrentPage={setCurrentPage} />
          <FlagshipProducts setCurrentPage={setCurrentPage} />
          <InnovationLabs setCurrentPage={setCurrentPage} />
          <SuccessStories setCurrentPage={setCurrentPage} />
        </>
      ) : currentPage === 'services' ? (
        <Services setCurrentPage={setCurrentPage} />
      ) : currentPage === 'products' ? (
        <ProductsPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'innovation-labs' ? (
        <InnovationLabsPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'case-studies' ? (
        <CaseStudiesPage />
      ) : currentPage === 'about' ? (
        <AboutPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'collaborate' ? (
        <CollaboratePage />
      ) : null}
      
      <Footer />

      {/* Floating Chat Icon - Appears on all pages */}
      <div 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 transform hover:scale-110 active:scale-95 z-40">
        <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </div>

      {/* Chat Widget */}
      {isChatOpen && <ChatWidget setIsChatOpen={setIsChatOpen} />}
    </div>
  )
}

export default App
