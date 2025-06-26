import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherDetails } from '../features/weatherSlice'
import { useEffect } from 'react'

import { MarginDiv } from '../styles/StyledComponent'
import Grid from '@mui/material/Grid'
// import Rating from '@mui/material/Rating'

import './css/WeatherDetail.css'

function WeatherDetail() {
   const { cityName } = useParams()
   const dispatch = useDispatch()
   const { weatherDetails, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      if (cityName) {
         dispatch(fetchWeatherDetails(cityName))
      }
   }, [dispatch, cityName])
   if (error) return <p>Error:{error}</p>

   console.log(weatherDetails)

   return (
      <MarginDiv $marginTop="10px">
         {/* {WeatherDetails && ( */}
         <Grid container>
            <Grid size={9}>
               <h3>{weatherDetails.name}</h3>
               <p>온도: {weatherDetails.main.temp}</p>
               <p>체감 온도: {weatherDetails.main.feels_like}</p>
               <p>날씨 상태: {weatherDetails.weather[0].description}</p>
               <p>습도: {weatherDetails.main.humidity}%</p>
               <p>흐림 정도: {weatherDetails.clouds.all}</p>
            </Grid>
            <Grid size={3}>
               <img src={'https://openweathermap.org/img/wn/' + weatherDetails.weather[0].icon + '@2x.png'} alt={weatherDetails.weather[0].description} />
            </Grid>
         </Grid>
         {/* )} */}
      </MarginDiv>
   )
}

export default WeatherDetail
