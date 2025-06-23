import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `${AUTH_KEY}`,
   },
})

// 지금 날씨 불러오기
export const getWeathers = async (cityName) => {
   const responsse = await weatherApi.get(`weather?q=${cityName}`, {
      params: {
         appid: `${AUTH_KEY}`,
         units: 'metric',
         lang: 'kr',
      },
   })
   return responsse
}

export default weatherApi
