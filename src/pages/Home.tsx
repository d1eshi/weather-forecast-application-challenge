import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ListResults } from '../components/ListResults'
import { SearchEngine } from '../components/SearchEngine'

export const Home = () => {
  return (
    <>
      <SearchEngine />
      {/* <Link to='/search'> */}
      {/* <Flex align='baseline' gap={2} as='form'>
        <Input variant='filled' placeholder='New York. 99, 133. 3400' type='text' id='location' />
        <Button colorScheme='blue' type='submit'>
          Search
        </Button>
      </Flex> */}
      {/* </Link> */}
      <ListResults />
    </>
  )
}
