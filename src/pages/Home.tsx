import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ListResults } from '../components/ListResults'
import { SearchEngine } from '../components/SearchEngine'
import { TemperatureAndDetails } from '../components/TemperatureAndDetails'
import { TimeAndLocation } from '../components/TimeAndLocation'
import { Forecast } from '../components/Forecast'

export const Home = () => {
  return (
    <>
      <SearchEngine />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast />

      {/* <ListResults /> */}
    </>
  )
}
