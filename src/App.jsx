import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import Sneakers from './Pages/Sneakers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collections/:type" element={<Collections/>}/>
        <Route path="/sneakers/:type" element={<Sneakers/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
