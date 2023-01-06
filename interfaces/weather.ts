export interface WeatherReponse {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface WeatherResponseFormatted {
  country: string
  details: string
  dt: number
  feels_like: number
  humidity: number
  icon: string
  lat: number
  lon: number
  name: string
  speed: number
  sunrise: number
  sunset: number
  temp: number
  temp_max: number
  temp_min: number
  timezone: string
  hourly: WeatherHourly[]
  daily: WeatherDaily[]
}

interface WeatherHourly {
  icon: string
  temp: number
  title: string
}

interface WeatherDaily {
  icon: string
  temp: number
  title: string
}

export interface Clouds {
  all: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}
