import { useState } from 'react'
import './bootstrap.min.css'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
   <Footer/>
   <ToastContainer/>
   </>
  )
}

export default App
