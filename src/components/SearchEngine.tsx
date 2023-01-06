import React from 'react'
import axios from 'axios'
import { Box, Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { apiWeather } from '../../api/axios'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fillWeatherRes, selectWeatherRes } from '../../redux/slices/weatherResponseSlice'
import { Router } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const API_KEY = import.meta.env.VITE_API_KEY

export const SearchEngine = () => {
  const [location, setLocation] = React.useState('')
  const [weather, setWeather] = React.useState(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLDivElement> & React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Determine type of location (city name, zip code, or coordinates)
    let locationType: string
    let url: string

    const [firstParam, SecondParam] = location.split(',')
    const latLonSearch = Number(firstParam) && Number(SecondParam) ? true : false

    if (location.includes(',') && latLonSearch) {
      // Location is coordinates
      locationType = 'lat,lon'
      const [lat, lon] = location.split(',')

      url = `?lat=${lat.trim()}&lon=${lon.trim()}&appid=${API_KEY}`
    } else if (isNaN(Number(location))) {
      // Location is a city name
      locationType = 'q'
      url = `?${locationType}=${location}&appid=${API_KEY}`
    } else {
      // Location is a zip code
      const [code, country] = location.split(',')
      locationType = 'zip'
      url = `?${locationType}=${code},${country}&appid=${API_KEY}`
    }
    // Make API request
    apiWeather
      .get(url)
      .then(response => {
        setWeather(response.data)
        console.log(weather)

        // store response
        dispatch(fillWeatherRes(response.data))
        navigate(`/forecast?${location}`)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      <Flex align='baseline' gap={2} as='form' onSubmit={handleSubmit}>
        {/* <FormLabel htmlFor='location'>Location:</FormLabel> */}
        <Input
          autoFocus
          variant='filled'
          placeholder='New York. 99, 133. 3400'
          type='text'
          id='location'
          value={location}
          onChange={handleChange}
        />
        <Button colorScheme='blue' type='submit'>
          Search
        </Button>
      </Flex>
    </div>
  )
}
