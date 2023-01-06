import { Box, Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ListResults } from '../components/ListResults'
import { SearchEngine } from '../components/SearchEngine'
import { TemperatureAndDetails } from '../components/TemperatureAndDetails'
import { TimeAndLocation } from '../components/TimeAndLocation'
import { Forecast } from '../components/Forecast'
import { getFormattedWeatherData } from '../../services/weatherService'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fillWeatherRes } from '../../redux/slices/weatherResponseSlice'

export const Home = () => {
  const [units, setUnits] = React.useState('metric')
  const [query, setQuery] = React.useState({ q: 'berlin' })
  const weather = useAppSelector(state => state.weatherRes.response)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const getInitialWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units })
      dispatch(fillWeatherRes(data))
    }
    getInitialWeather()
  }, [query, units])

  return (
    <>
      {weather && (
        <>
          <SearchEngine />
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title='hourly forecast' items={weather.hourly} />
          <Forecast title='daily forecast' items={weather.daily} />
        </>
      )}
    </>
  )
}
