import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import InnovationLabs from './components/InnovationLabs'
import SuccessStories from './components/SuccessStories'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Services from './components/Services'
import ProductsPage from './components/ProductsPage'
import InnovationLabsPage from './components/InnovationLabsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Solutions />
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
      ) : null}
      
      <Footer />
    </div>
  )
}

export default App
