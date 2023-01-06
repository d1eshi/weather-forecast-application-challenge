import React from 'react'
import { Box, Flex, Input, Select, Icon, Text, Button, FormHelperText, FormControl } from '@chakra-ui/react'
import { apiWeather } from '../../api/axios'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fillWeatherRes, selectWeatherRes } from '../../redux/slices/weatherResponseSlice'
import { useNavigate } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { getFormattedWeatherData, getWeatherData } from '../../services/weatherService'
import { Circles } from 'react-loader-spinner'

interface IQuery {
  q?: string
  zip?: string
  lat?: string | number
  lon?: string | number
}

interface Props {
  handleLocationOnClick?: () => void
  handleUnitsChange?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const API_KEY = import.meta.env.VITE_API_KEY
export const SearchEngine: React.FC<Props> = ({ handleLocationOnClick, handleUnitsChange }) => {
  const [location, setLocation] = React.useState('')
  const [units, setUnits] = React.useState('metric')
  const [typeOfSearch, setTypeOfSearch] = React.useState<string>('name')
  const [textHelpers, setTextHelpers] = React.useState({ placeHolder: 'New York', helper: 'Try with your city' })
  const [weather, setWeather] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    placeTextHelpers()
  }, [typeOfSearch])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLDivElement> & React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let url: string = ''
    let data
    setIsLoading(true)

    switch (typeOfSearch) {
      case 'name':
        data = await getFormattedWeatherData({ q: location.trim(), units })
        dispatch(fillWeatherRes(data))

        break
      case 'latlon':
        const [lat, lon] = location.split(',')

        data = await getFormattedWeatherData({ lat: lat.trim(), lon: lon.trim(), units })
        dispatch(fillWeatherRes(data))

        break
      case 'zip':
        const [code, country] = location.split(',')
        data = await getFormattedWeatherData({ zip: `${code.trim()},${country.trim()}`, units })

        dispatch(fillWeatherRes(data))
        break
      default:
        break
    }
    if (!data) return
    setIsLoading(false)
    navigate(`/forecast?${location}`)
  }

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeOfSearch(e.target.value)
  }

  const placeTextHelpers = () => {
    switch (typeOfSearch) {
      case 'name':
        setTextHelpers({ placeHolder: 'New York', helper: 'Try with your city' })
        break

      case 'latlon':
        setTextHelpers({
          placeHolder: '99, 13',
          helper: 'First latitude and second longitude. Separare with a comma',
        })
        break

      case 'zip':
        setTextHelpers({
          placeHolder: '94040, us',
          helper: 'Try with your zip code and country, separate them with a comma',
        })
        break

      default:
        break
    }
  }
  return (
    <>
      <Flex align='baseline' gap={3} as='form' onSubmit={handleSubmit}>
        {isLoading && (
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            bgColor='#eeeeeec9'
            position='absolute'
            sx={{ top: 0, left: 0 }}
            zIndex={1}
            w='100%'
            h='100%'
          >
            <Circles color='#00BFFF' height={100} width={100} visible={isLoading} />
          </Box>
        )}

        <Flex gap={2} w={['61%', '71%']}>
          <Input
            autoFocus
            variant='filled'
            placeholder={textHelpers.placeHolder}
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
        <Flex w='13%' gap={2} color='white'>
          <Icon
            maxW='1.5em'
            cursor='pointer'
            transition='ease-out'
            _hover={{ color: '#9ae1e1f0' }}
            as={MagnifyingGlassIcon}
            boxSize={6}
          />
          <Icon
            maxW='1.5em'
            onClick={handleLocationOnClick}
            _hover={{ color: '#9ae1e1f0' }}
            cursor='pointer'
            transition='ease-out'
            as={MapPinIcon}
            boxSize={6}
          />
        </Flex>

        <Flex fontSize='1.5rem' color='white'>
          <Button
            bg='transparent'
            fontWeight='300'
            fontSize='2rem'
            maxW='1em'
            onClick={handleUnitsChange}
            name='metric'
            _hover={{ fontSize: '2.2rem' }}
          >
            °C
          </Button>
          <Text as='p' mx={1}>
            |
          </Text>
          <Button
            bg='transparent'
            fontWeight='300'
            fontSize='2rem'
            maxW='1em'
            onClick={handleUnitsChange}
            name='imperial'
            _hover={{ fontSize: '2.2rem' }}
          >
            °F
          </Button>
        </Flex>
        {/* <Icon as={MapPinIcon} boxSize={6} /> */}
      </Flex>
      <FormControl display='flex' flexDir='column'>
        <FormHelperText color='#eee'>{textHelpers.helper}</FormHelperText>
      </FormControl>{' '}
    </>
  )
}
