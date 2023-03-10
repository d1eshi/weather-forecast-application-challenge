import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Forecast from './pages/ForecastPage'
import { Home } from './pages/Home'
import Search from './pages/Search'

function App() {
  return (
    <Flex bgGradient='linear(to-br, cyan.700, gray.900)' boxShadow='xl' direction='column' bgColor='cyan.700'>
      <Navbar />
      <Box mt={3} mb={10} minW='50%' mx=' auto'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/forecast' element={<Home />} />
        </Routes>
      </Box>
    </Flex>
  )
}

export default App
