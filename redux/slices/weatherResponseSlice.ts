import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { WeatherResponseFormatted } from '../../interfaces/weather'

interface WeatherRes {
  response: WeatherResponseFormatted
}

const initialState: WeatherRes = {
  response: {
    country: '',
    name: '',
    icon: '',
    details: '',
    speed: 0,
    dt: 0,
    feels_like: 0,
    humidity: 0,
    lat: 0,
    lon: 0,
    sunrise: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    sunset: 0,
    daily: [],
    hourly: [],
    timezone: '',
  },
}

export const weatherResSlice = createSlice({
  name: 'weatherResponse',
  initialState,
  reducers: {
    fillWeatherRes: (state, action: PayloadAction<WeatherResponseFormatted>) => {
      state.response = action.payload
    },
  },
})

export const { fillWeatherRes } = weatherResSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeatherRes = (state: RootState) => state.weatherRes.response

export default weatherResSlice.reducer
