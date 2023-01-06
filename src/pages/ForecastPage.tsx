import React, { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { Forecast } from '../components/Forecast'
import { SearchEngine } from '../components/SearchEngine'
import { TemperatureAndDetails } from '../components/TemperatureAndDetails'
import { TimeAndLocation } from '../components/TimeAndLocation'

interface Props {}

const ForecastPage: FC<Props> = () => {
  const weather = useAppSelector(state => state.weatherRes.response)
  return (
    <>
      <SearchEngine />
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} />
      <Forecast title='hourly forecast' items={weather.hourly} />
      <Forecast title='daily forecast' items={weather.daily} />
    </>
  )
}

export default ForecastPage
