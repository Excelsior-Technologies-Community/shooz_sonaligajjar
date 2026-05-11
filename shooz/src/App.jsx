import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sneakers from './Pages/Sneakers'
import { WishlistProvider } from './context/WishlistContext'
import CollectionPage from './Pages/CollectionPage'
import Wishlist from './Pages/Wishlist'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:type" element={<Collections />} />
          <Route path="/sneakers/:type" element={<Sneakers />} />
          <Route path='/collection/:category' element={<CollectionPage/>}/>
          <Route path='/collectionPage/:category' element={<CollectionPage/>} />
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
      </WishlistProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
