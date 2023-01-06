import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { WeatherResponseFormatted } from '../../interfaces/weather'
import { useAppSelector } from '../../redux/hooks'
import { formatToLocalTime } from '../../services/weatherService'

interface Props {
  weather: WeatherResponseFormatted
}

export const TimeAndLocation: React.FC<Props> = ({ weather: { dt, timezone, country, name } }) => {
  return (
    <>
      <Flex align='center' justify='center' my={5}>
        <Text fontWeight={400} fontSize='2xl' color='whiteAlpha.800'>
          {formatToLocalTime(dt, timezone)}
        </Text>
      </Flex>

      <Flex align='center' justify='center' my={2}>
        <Text fontWeight={600} fontSize='4xl'>
          {name}, {country}
        </Text>
      </Flex>
    </>
  )
}
