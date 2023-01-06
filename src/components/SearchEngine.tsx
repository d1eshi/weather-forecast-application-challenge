import React from 'react'
import { Box, Flex, Input, Select, Icon, Text } from '@chakra-ui/react'
import { apiWeather } from '../../api/axios'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fillWeatherRes, selectWeatherRes } from '../../redux/slices/weatherResponseSlice'
import { useNavigate } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/outline'

const API_KEY = import.meta.env.VITE_API_KEY
export const SearchEngine = () => {
  const [location, setLocation] = React.useState('')
  const [typeOfSearch, setTypeOfSearch] = React.useState<string>('name')
  const [weather, setWeather] = React.useState(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLDivElement> & React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let url: string = ''

    switch (typeOfSearch) {
      case 'name':
        url = `?q=${location}&appid=${API_KEY}`
        break
      case 'latlon':
        const [lat, lon] = location.split(',')

        url = `?lat=${lat.trim()}&lon=${lon.trim()}&appid=${API_KEY}`

        break
      case 'zip':
        const [code, country] = location.split(',')
        url = `?$zip=${code},${country}&appid=${API_KEY}`
        break
      default:
        break
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

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeOfSearch(e.target.value)
  }

  const placeHolderForTypeOfSearch =
    typeOfSearch === 'name'
      ? 'New York'
      : typeOfSearch === 'latlon'
      ? '99, 13'
      : typeOfSearch === 'zip'
      ? '94040, us'
      : undefined

  return (
    <div>
      <Flex align='center' gap={3} as='form' onSubmit={handleSubmit}>
        {/* <FormLabel htmlFor='location'>Location:</FormLabel> */}
        <Flex gap={2} w={['61%', '71%']}>
          <Input
            autoFocus
            variant='filled'
            placeholder={placeHolderForTypeOfSearch}
            type='text'
            id='location'
            value={location}
            onChange={handleChange}
            _focus={{ bg: '#eee' }}
          />
          <Select maxW='9em' bg='#eee' onChange={handleChangeSelect}>
            <option defaultChecked value='name'>
              Name City
            </option>
            <option value='latlon'>Cordinates</option>
            <option value='zip'>ZIP Code</option>
            {/* <option></option> */}
          </Select>
        </Flex>
        <Flex w='13%' gap={2}>
          <Icon cursor='pointer' transition='ease-out ' _hover={{ boxSize: 7 }} as={MagnifyingGlassIcon} boxSize={6} />
          <Icon cursor='pointer' transition='ease-out ' _hover={{ boxSize: 7 }} as={MapPinIcon} boxSize={6} />
        </Flex>

        <Flex fontSize='1.5rem'>
          <button name='metric'>°C</button>
          <Text as='p' mx={1} color='#000'>
            |
          </Text>
          <button name='imperial'>°F</button>
        </Flex>
        {/* <Icon as={MapPinIcon} boxSize={6} /> */}
      </Flex>
    </div>
  )
}
