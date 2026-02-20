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
        <CaseStudiesPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'about' ? (
        <AboutPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'collaborate' ? (
        <CollaboratePage />
      ) : null}
      
      <Footer setCurrentPage={setCurrentPage} />


    </div>
  )
}

export default App
