import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-7xl font-bold underline bg-cyan-500 text-purple-800 shadow-xl animate-bounce'>
        Hello Swift Dispatch !!!
      </div>
    </>
  )
}

export default App
