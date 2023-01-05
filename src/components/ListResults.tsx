import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export const ListResults = () => {
  return (
    <Box mt={6} cursor='pointer'>
      <SimpleGrid columns={2} border='1px solid #edf2f7' borderRadius={3} p={2} maxW='50%'>
        <Box>
          <Text fontSize='lg' fontWeight={300}>
            New York
          </Text>
          <Text fontSize='xl'>Tuesday - May 22</Text>
          <Text fontSize='4xl' fontWeight={400}>
            7:42 AM
          </Text>
        </Box>
        <SimpleGrid justifyContent='center' alignItems='center' gap={1}>
          <Flex align='center' gap={1}>
            <Text fontSize='2xl' fontWeight={400}>
              33° C
            </Text>
            <Box>
              <Text fontSize='2xs'>33° C</Text>
              <Text fontSize='2xs'>33° C</Text>
            </Box>
          </Flex>
          <Text cursor='pointer' textDecor='ActiveBorder' color='blue.900' colorScheme='blue'>
            See more
          </Text>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}
