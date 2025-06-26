import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function WeatherCard({ weathers }) {
   const cityNames = ['seoul', 'incheon', 'busan', 'jeju', 'daegu', 'gangneung']

   const dispatch = useDispatch()
   const { weatherDetails, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      for (city of cityNames) {
         dispatch(fetchWeathers(city))
      }
   }, [dispatch, cityNames])

   // 배열로 해야함 / 개별로 나오기에 다른곳에 저장해둬야함

   return (
      <Grid container spacing={2.5}>
         {cityNames.map((cityName) => (
            <Grid size={2.4} key={cityName.name}>
               <Link to={`/weather/${cityName.name}`} style={{ textDecoration: 'none' }}>
                  <Card>
                     <Typography>{cityName.name}</Typography>
                     <CardContent>
                        <Typography>{cityName.main.temp}</Typography>
                        <CardMedia image={'https://openweathermap.org/img/wn/' + weatherDetails.weather[0].icon + '@2x.png'} />
                     </CardContent>
                  </Card>
               </Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default WeatherCard
