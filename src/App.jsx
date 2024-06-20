import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import LandingPage from './LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
