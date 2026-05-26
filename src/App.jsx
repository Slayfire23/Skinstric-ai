import './App.css'
import Landing from './pages/Landing'
import IntroForm from './pages/IntroForm'
import Upload from './pages/Upload'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<IntroForm />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
