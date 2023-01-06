import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <Flex direction='column' as='nav' align='center' mb={3} pt={3}>
        <Link color='#eee' to='/'>
          <Text fontWeight='400' fontSize='3xl'>
            Weather Forecast
          </Text>
        </Link>
      </Flex>
    </>
  )
}
