import { Box, Flex, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaTemperatureHigh, FaSadTear, FaWind } from 'react-icons/fa'
import { WiDaySunny, WiHumidity, WiSunset, WiDirectionDown, WiDirectionUp } from 'react-icons/wi'
import { WeatherResponseFormatted } from '../../interfaces/weather'
import { useAppSelector } from '../../redux/hooks'
import { formatToLocalTime, iconUrlFromCode } from '../../services/weatherService'

interface Props {
  weather: WeatherResponseFormatted
}

export const TemperatureAndDetails: React.FC<Props> = ({
  weather: { details, icon, temp, temp_max, temp_min, sunrise, sunset, speed, humidity, feels_like, timezone },
}) => {
  return (
    <>
      <Flex align='center' justify='center' py={4}>
        <Text fontSize='2xl' color='cyan.300'>
          {details}
        </Text>
      </Flex>

      <Flex align='center' justify='space-between' py={2}>
        <Image boxSize={20} src={iconUrlFromCode(icon)} alt='' />
        <Text fontSize='5xl'>{`${temp.toFixed()}°`}</Text>

        <Flex direction='column' gap={2}>
          <Flex align='center' justify='center' color='white' fontWeight={400}>
            <Icon as={FaTemperatureHigh} boxSize={18} mr={1} />
            <Text>Real fell: {''}</Text>
            <Text as='span' fontWeight={500} ml={1}>
              {`${feels_like.toFixed()}°`}
            </Text>
          </Flex>

          <Flex align='center' justify='center' color='white' fontWeight={400}>
            <Icon as={WiHumidity} boxSize={18} mr={1} />
            <Text>Humidity: {''}</Text>
            <Text as='span' fontWeight={500} ml={1}>
              {`${humidity.toFixed()}°`}
            </Text>
          </Flex>

          <Flex align='center' justify='center' color='white' fontWeight={400}>
            <Icon as={FaWind} boxSize={18} mr={1} />
            <Text>Wind: {''}</Text>
            <Text as='span' fontWeight={500} ml={1}>
              {`${speed.toFixed()} km/h`}
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
            {`${formatToLocalTime(sunrise, timezone, 'hh:mm a')}`}
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>

        <Icon fontSize='1.8rem' as={WiSunset} />
        <Text>
          Set:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            {`${formatToLocalTime(sunset, timezone, 'hh:mm a')}`}
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>

        <Icon fontSize='1.8rem' as={WiDirectionUp} />
        <Text>
          High:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            {`${temp_max.toFixed()}°`}
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>

        <Icon fontSize='1.8rem' as={WiDirectionDown} />
        <Text>
          Low:{' '}
          <Text as='span' fontWeight={500} ml={1}>
            {' '}
            {`${temp_min.toFixed()}°`}
          </Text>
        </Text>
        <Text fontWeight={300}>{''}|</Text>
      </Flex>
    </>
  )
}
