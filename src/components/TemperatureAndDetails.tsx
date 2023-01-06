import { Box, Flex, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaTemperatureHigh, FaSadTear, FaWind } from 'react-icons/fa'
import { WiDaySunny, WiHumidity, WiSunset, WiDirectionDown, WiDirectionUp } from 'react-icons/wi'

export const TemperatureAndDetails = () => {
  return (
    <>
      <Flex align='center' justify='center' py={4}>
        <Text fontSize='2xl' color='cyan.300'>
          Cloudy or whatever
        </Text>
      </Flex>

      <Flex align='center' justify='space-between' py={2}>
        <Image boxSize={20} src='http://openweathermap.org/img/wn/01d@2x.png' alt='' />
        <Text fontSize='5xl'>34°</Text>

        <Flex direction='column' gap={2}>
          <Flex align='center' justify='center' color='white' fontWeight={400}>
            <Icon as={FaTemperatureHigh} boxSize={18} mr={1} />
            <Text>Real fell: {''}</Text>
            <Text as='span' fontWeight={500} ml={1}>
              32°
            </Text>
          </Flex>

          <Flex align='center' justify='center' color='white' fontWeight={400}>
            <Icon as={WiHumidity} boxSize={18} mr={1} />
            <Text>Humidity: {''}</Text>
            <Text as='span' fontWeight={500} ml={1}>
              65%
            </Text>
          </Flex>

          <Flex align='center' justify='center' color='white' fontWeight={400}>
            <Icon as={FaWind} boxSize={18} mr={1} />
            <Text>Wind: {''}</Text>
            <Text as='span' fontWeight={500} ml={1}>
              11 km/h
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex color='white' fontSize='sm' align='center' justify='center' gap={2}>
        <Icon fontSize='1.8rem' as={WiDaySunny} />
        <Text>
          Rise:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            06:45 AM
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>

        <Icon fontSize='1.8rem' as={WiSunset} />
        <Text>
          Set:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            06:45 AM
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>

        <Icon fontSize='1.8rem' as={WiDirectionUp} />
        <Text>
          High:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            06:45 AM
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>

        <Icon fontSize='1.8rem' as={WiDirectionDown} />
        <Text>
          Low:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            06:45 AM
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>
      </Flex>
    </>
  )
}
