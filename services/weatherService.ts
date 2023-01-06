import axios from 'axios'
import { DateTime } from 'luxon'
import { WeatherReponse, WeatherResponseFormatted } from '../interfaces/weather'
interface ISearchParams {
  q?: string
  zip?: string
  lat?: string | number
  exclude?: string
  lon?: string | number
  country?: string
  units?: string
}
interface data {
  data: {
    response: WeatherReponse
  }
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const API_KEY = '64d8e95012e40b04693860e8e0cb60a1'

export const getWeatherData = (infoType: string, searchParams: ISearchParams) => {
  const url = new URL(BASE_URL + '/' + infoType)
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }) as unknown as string

  console.log(url)

  return axios
    .get(url as unknown as string)
    .then<data>(response => response.data)
    .catch(error => console.error(error))
}

const formatCurrentWeather = (data: any) => {
  console.log({ data }, 'from the formatter')

  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data

  const { main: details, icon } = weather[0]

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  } as WeatherResponseFormatted
}

interface Day {
  dt: number
  temp: {
    day: number
  }
  weather: [
    {
      icon: string
    }
  ]
}

const formatForecastWeather = (data: any) => {
  let { timezone, daily, hourly } = data
  daily = daily.slice(1, 6).map((d: Day) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }
  })

  hourly = hourly.slice(1, 6).map((d: Day) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    }
  })

  return { daily, hourly, timezone }
}

export const getFormattedWeatherData = async (searchParams: ISearchParams) => {
  const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)

  const { lat, lon } = formattedCurrentWeather

  const formattedForecastWeather = await getWeatherData('onecall', {
    lat,
    lon,
    exclude: 'current,minutely,alerts',
    units: searchParams.units,
  }).then(formatForecastWeather)

  return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

export const formatToLocalTime = (secs: number, zone: string, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export const iconUrlFromCode = (code: string) => `http://openweathermap.org/img/wn/${code}@2x.png`
