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
import { Circles } from 'react-loader-spinner'

interface IQuery {
  q?: string
  zip?: string
  lat?: number
  lon?: number
}

export const Home = () => {
  const [units, setUnits] = React.useState('metric')
  const [query, setQuery] = React.useState<IQuery>({ q: 'berlin' })

  const [isLoading, setIsLoading] = React.useState(true)
  const weather = useAppSelector(state => state.weatherRes.response)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    const getInitialWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units })
      dispatch(fillWeatherRes(data))
      setIsLoading(false)
    }
    getInitialWeather()
  }, [query, units])

  const handleLocationOnClick = () => {
    setIsLoading(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({ lat, lon })

        setIsLoading(false)
      })
    }
  }

  const handleUnitsChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) {
      setUnits(selectedUnit)

      return setIsLoading(true)
    }
    return
  }

  if (isLoading) {
    return (
      <>
        {isLoading && (
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            bgColor='#eee'
            position='absolute'
            sx={{ top: 0, left: 0 }}
            zIndex={1}
            w='100%'
            h='100vh'
          >
            <Circles color='#00BFFF' height={100} width={100} visible={isLoading} />
          </Box>
        )}
      </>
    )
  }

  return (
    <>
      {weather && (
        <>
          <SearchEngine handleUnitsChange={handleUnitsChange} handleLocationOnClick={handleLocationOnClick} />
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title='hourly forecast' items={weather.hourly} />
          <Forecast title='daily forecast' items={weather.daily} />
        </>
      )}
    </>
  )
}
