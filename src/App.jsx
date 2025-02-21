import react from 'react'
import './App.css'
import "./style.css"
import Navbar from './components/Navbar'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import SpaceCraft from './pages/SpaceCraft'

import { Routes, Route } from 'react-router-dom'
import ErrorBoundary from './lib/ErrorBoundary'

function App() {


  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          
          <Route path="/destination" element={<Destination />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/spacecraft" element={<SpaceCraft />} />          
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
