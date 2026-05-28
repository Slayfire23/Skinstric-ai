import './App.css'
import Landing from './pages/Landing'
import IntroForm from './pages/IntroForm'
import Upload from './pages/Upload'
import Selfie from './pages/Selfie'
import Analyzing from './pages/Analyzing'
import Results from './pages/Results'
import Demographics from './pages/Demographics'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/intro" element={<IntroForm />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/selfie" element={<Selfie />} />
        <Route path="/analyzing" element={<Analyzing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/demographics" element={<Demographics />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
