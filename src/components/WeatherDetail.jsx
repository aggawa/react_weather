import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeathers } from '../features/weatherSlice'
import { useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'

function WeatherDetail() {
   const { cityName } = useParams()
   const dispatch = useDispatch()
   const { WeatherDetails, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      if (cityName) {
         dispatch(fetchWeathers(cityName))
      }
   }, [dispatch, cityName])
   if (error) return <p>Error:{error}</p>

   return (
      <MarginDiv>
         {WeatherDetails && (
            <Grid container>
               <Grid size={9}>
                  <h2></h2>
               </Grid>
               <Grid size={3}></Grid>
            </Grid>
         )}
      </MarginDiv>
   )
}

export default WeatherDetail
