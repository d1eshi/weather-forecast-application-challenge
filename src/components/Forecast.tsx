import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Forecast = () => {
  return (
    <>
      <Flex align='center' justify='start' mt={6} color='white'>
        <Text fontWeight={500} casing='uppercase'>
          hourly forecast
        </Text>
      </Flex>
      <Divider my={2} />

      <Flex align='center' justify='space-between' color='white'>
        <Flex flexDirection='column' align='center' justify='center'>
          <Text fontWeight={400} fontSize='sm'>
            04:30 PM
          </Text>
          <Image src='http://openweathermap.org/img/wn/01d@2x.png' boxSize={12} />
          <Text fontWeight={500}>32°</Text>
        </Flex>

        <Flex flexDirection='column' align='center' justify='center'>
          <Text fontWeight={400} fontSize='sm'>
            04:30 PM
          </Text>
          <Image src='http://openweathermap.org/img/wn/01d@2x.png' boxSize={12} />
          <Text fontWeight={500}>32°</Text>
        </Flex>

        <Flex flexDirection='column' align='center' justify='center'>
          <Text fontWeight={400} fontSize='sm'>
            04:30 PM
          </Text>
          <Image src='http://openweathermap.org/img/wn/01d@2x.png' boxSize={12} />
          <Text fontWeight={500}>32°</Text>
        </Flex>

        <Flex flexDirection='column' align='center' justify='center'>
          <Text fontWeight={400} fontSize='sm'>
            04:30 PM
          </Text>
          <Image src='http://openweathermap.org/img/wn/01d@2x.png' boxSize={12} />
          <Text fontWeight={500}>32°</Text>
        </Flex>

        <Flex flexDirection='column' align='center' justify='center'>
          <Text fontWeight={400} fontSize='sm'>
            04:30 PM
          </Text>
          <Image src='http://openweathermap.org/img/wn/01d@2x.png' boxSize={12} />
          <Text fontWeight={500}>32°</Text>
        </Flex>
      </Flex>
    </>
  )
}
