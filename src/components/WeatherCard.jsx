import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCardDetails } from '../features/weatherSlice'

function WeatherCard() {
   const [cityWeather, setCityWeather] = useState([])
   const dispatch = useDispatch()
   const { cardDetails, error } = useSelector((state) => state.weathers)

   // 렌더링 중 state 변경 시 에러
   // if (cardDetails) {
   //    setCityWeather((prevState) => [...prevState, cardDetails])
   // }

   useEffect(() => {
      const cityNames = ['seoul', 'busan', 'incheon', 'daegu', 'jeju', 'daejeon', 'gwangju', 'suwon', 'ulsan', 'gangneung']

      for (const city of cityNames) {
         dispatch(fetchCardDetails(city))
      }
   }, [dispatch])

   // cardDetails가 바뀔때만 실행
   useEffect(() => {
      if (cardDetails) {
         console.log(cardDetails)
         setCityWeather((prevState) => [...prevState, cardDetails])
      }
   }, [cardDetails])

   if (error) return <p>Error:{error}</p>

   // 배열로 / 개별로 나오기에 다른곳에 저장해둬야함

   return (
      <Grid container spacing={2.5}>
         {cityWeather.map((cardDetails) => (
            <Grid size={2.4} key={cardDetails.name}>
               <Card sx={{ maxWidth: 345 }}>
                  <CardContent>{cardDetails.name}</CardContent>
                  <CardContent>
                     <Typography>{cardDetails.main.temp}</Typography>
                     <Typography>
                        <img src={'https://openweathermap.org/img/wn/' + cardDetails.weather[0].icon + '.png'} alt={cardDetails.weather[0].description} />
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
         {/* <Grid>{cardDetails.name}</Grid> */}
      </Grid>
   )
}

export default WeatherCard
