import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Flex direction='column' as='nav' align='center' mb={3} pt={3}>
        <Text fontWeight='400' fontSize='3xl'>
          Weather Forecast
        </Text>

        <Flex w='7em' justify='space-between'>
          <Link color='#eee' to='/'>
            Home
          </Link>
          <Link color='#eee' to='/favorites'>
            Favorites
          </Link>
        </Flex>
      </Flex>
    </>
  )
}
