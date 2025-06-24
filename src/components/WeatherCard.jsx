import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function WeatherCard({ weathers }) {
   const cityNames = ['seoul', 'incheon', 'busan', 'jeju']

   const dispatch = useDispatch()
   const { WeatherDetails, error } = useSelector((state) => state.weathers)

   useEffect(() => {
      for (city of cityNames) {
         dispatch(fetchWeathers(city))
      }
   }, [dispatch, cityNames])

   // 배열로 해야함 / 개별로 나오기에 다른곳에 저장해둬야함

   return (
      <Grid container spacing={2.5}>
         {/* {weathers.map((weather) => (
            <Grid size={2.4} key={weather.id}>
               <Link to={`/detail/${weather.id}`}>
                  <Grid></Grid>
               </Link>
            </Grid>
         ))} */}
      </Grid>
   )
}

export default WeatherCard

// 여기까지 했음 / 정보 못 불러옴 / 방식부터가 잘못됨 / 뜯어고쳐야함
