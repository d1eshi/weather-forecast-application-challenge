import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default App
