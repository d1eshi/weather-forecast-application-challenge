import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface WeatherRes {
  response: []
}

const initialState: WeatherRes = {
  response: [],
}

export const weatherResSlice = createSlice({
  name: 'weatherResponse',
  initialState,
  reducers: {
    fillWeatherRes: (state, action: PayloadAction<[]>) => {
      state.response = action.payload
    },
  },
})

export const { fillWeatherRes } = weatherResSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectWeatherRes = (state: RootState) => state.weatherRes.response

export default weatherResSlice.reducer
