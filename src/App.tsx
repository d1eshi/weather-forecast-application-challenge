import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Navbar />
      <Box mt={3} mx='auto' maxW='50%'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
