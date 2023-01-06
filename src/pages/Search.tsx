import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { SearchEngine } from '../components/SearchEngine'

const Search = () => {
  return (
    <>
      <Flex direction='column'>
        <SearchEngine />
      </Flex>
    </>
  )
}

export default Search
