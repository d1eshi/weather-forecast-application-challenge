import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const TimeAndLocation = () => {
  return (
    <>
      <Flex align='center' justify='center' my={5}>
        <Text fontWeight={400} fontSize='2xl' color='whiteAlpha.800'>
          Tuesday, 31 May 2022 | Local time: 12:46 PM
        </Text>
      </Flex>

      <Flex align='center' justify='center' my={2}>
        <Text fontWeight={600} fontSize='4xl'>
          Berlin, DE
        </Text>
      </Flex>
    </>
  )
}
