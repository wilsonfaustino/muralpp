export type Weather = {
  main: string
  description: string
  icon: string
}

export type WeatherData = {
  weather: Weather[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  sys: {
    sunrise: number
    sunset: number
  }
  name: string
}

export type WeatherFooterProps = {
  weatherData: WeatherData | null
}
