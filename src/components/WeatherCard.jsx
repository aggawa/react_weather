import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCardDetails } from '../features/weatherSlice'

function WeatherCard() {
   const [cityWeather, setCityWeather] = useState([])
   const dispatch = useDispatch()
   const { cardDetails, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      const cityNames = ['seoul', 'busan', 'incheon', 'daegu', 'jeju', 'daejeon', 'gwangju', 'suwon', 'ulsan', 'gangneung']

      for (const city of cityNames) {
         dispatch(fetchCardDetails(city))
      }
   }, [dispatch])

   useEffect(() => {
      if (cardDetails) {
         console.log(cardDetails)
         setCityWeather((prevState) => [...prevState, cardDetails])
      }
   }, [cardDetails])

   if (error) return <p>Error:{error}</p>

   return (
      <Grid container spacing={2.5} style={{ margin: '10rem 0 1rem 0' }}>
         {cityWeather.map((cardDetails) => (
            <Grid size={2.4} key={cardDetails.name}>
               <Link to={`/weather/${cardDetails.name}`} style={{ textDecoration: 'none' }}>
                  <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#E4F4FE' }}>
                     <CardContent>{cardDetails.name}</CardContent>
                     <CardContent style={{ display: 'flex' }}>
                        <Typography>{cardDetails.main.temp}</Typography>
                        <Typography>
                           <img src={'https://openweathermap.org/img/wn/' + cardDetails.weather[0].icon + '.png'} alt={cardDetails.weather[0].description} />
                        </Typography>
                     </CardContent>
                  </Card>
               </Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default WeatherCard
