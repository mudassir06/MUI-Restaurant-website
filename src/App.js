import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import PagenotFound from "./pages/PagenotFound"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/menu" element={<Menu/>} />
  <Route path="*" element={<PagenotFound/>} />
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
