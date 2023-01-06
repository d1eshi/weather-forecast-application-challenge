import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Flex direction='column' as='nav' align='center' my={3}>
        <Text fontWeight='400' fontSize='3xl'>
          Weather Forecast
        </Text>

        <Flex w='10%' justify='space-between'>
          <Link to='/'>Home</Link>
          <Link to='/favorites'>Favorites</Link>
        </Flex>

        {/* <Spacer />

        <Flex w='30%' sx={{ a: { fontWeight: 400 } }} justify='space-between' className='links_desktop'>
          <Link to='/'>Home</Link>
          <Link to='/favorites'>Favorites</Link>
          <a href=''>dark </a>
        </Flex> */}
        {/* 
      <Box className='links_mobile'>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
        <a href=''>dark </a>
      </Box> */}
      </Flex>
      <Divider />
    </>
  )
}
