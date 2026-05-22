import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Landing from './pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Landing />

    </>
  )
}

export default App
