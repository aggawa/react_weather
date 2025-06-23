import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import { Link } from 'react-router-dom'

function WeatherCard({ weathers }) {
   return (
      <Grid container spacing={2.5}>
         {weathers.map((weather) => (
            <Grid size={2.4} key={weather.id}>
               <Link to={`/detail/${weather.id}`}>
                  <Grid></Grid>
               </Link>
            </Grid>
         ))}
      </Grid>
   )
}

export default WeatherCard

// 여기까지 했음 / 정보 못 불러옴 / 방식부터가 잘못됨 / 뜯어고쳐야함
