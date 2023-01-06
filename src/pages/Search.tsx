import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { SearchEngine } from '../components/SearchEngine'

const Search = () => {
  return (
    <>
      <Flex direction='column'>
        <SearchEngine />
        <Box>
          <Text mt={3} fontSize='2xl'>
            Some tips for a sucess search
          </Text>
          <UnorderedList>
            <ListItem>The basics, put the name of a city.</ListItem>
            <ListItem>
              The latitude and longitude of a city, separate for a comma. Example:{' '}
              <Text as='span' fontWeight={600}>
                40, -74
              </Text>
              . First latitude, second longitude.
            </ListItem>
            <ListItem>
              For the zip code, you{' '}
              <Text as='span' fontWeight={600}>
                need to especify code country
              </Text>
              . Example:{' '}
              <Text as='span' fontWeight={600}>
                94040, us
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </>
  )
}

export default Search
