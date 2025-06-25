import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherDetails } from '../features/weatherSlice'
import { useEffect } from 'react'

import { MarginDiv } from '../styles/StyledComponent'
import Grid from '@mui/material/Grid'
// import Rating from '@mui/material/Rating'

function WeatherDetail() {
   const { cityName } = useParams()
   const dispatch = useDispatch()
   const { WeatherDetails, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      if (cityName) {
         dispatch(fetchWeatherDetails(cityName))
      }
   }, [dispatch, cityName])
   if (error) return <p>Error:{error}</p>

   return (
      <MarginDiv $marginTop="10px">
         {/* {WeatherDetails && ( */}
         <Grid container>
            <Grid size={9}>
               <h3>도시 이름</h3>
               <p>온도</p>
               <p>날씨 상태 눈 비 등</p>
               <p>습도</p>
               <p>흐림 정도</p>
               <p>강수량</p>
            </Grid>
            <Grid size={3}>
               <p>아이콘</p>
            </Grid>
         </Grid>
         {/* )} */}
      </MarginDiv>
   )
}

export default WeatherDetail
