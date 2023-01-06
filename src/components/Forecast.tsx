import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { DayItemWeather } from '../../interfaces/weather'
import { useAppSelector } from '../../redux/hooks'
import { iconUrlFromCode } from '../../services/weatherService'

interface Props {
  title: string
  items: DayItemWeather[]
}

export const Forecast: React.FC<Props> = ({ title, items }) => {
  return (
    <>
      <Flex align='center' justify='start' mt={6} color='white'>
        <Text fontWeight={500} casing='uppercase'>
          {title}
        </Text>
      </Flex>
      <Divider my={2} />

      <Flex align='center' justify='space-between' color='white'>
        {items?.map(item => (
          <Flex flexDirection='column' align='center' justify='center'>
            <Text fontWeight={400} fontSize='sm'>
              {item.title}
            </Text>
            <Image src={iconUrlFromCode(item.icon)} boxSize={12} />
            <Text fontWeight={500}>{`${item?.temp?.toFixed() ?? 10}°`}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  )
}
