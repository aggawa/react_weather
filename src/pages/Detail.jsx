import { Wrap, Main } from '../styles/StyledComponent'
import Header from '../components/Header'
import WeatherDetail from '../components/WeatherDetail'
import Footer from '../components/Footer'

function Detail() {
   return (
      <Wrap>
         <Header />
         <Main>
            <WeatherDetail />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
