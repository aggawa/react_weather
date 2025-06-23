import { Wrap, Main } from '../styles/StyledComponent'
import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard'
import Footer from '../components/Footer'

function Home() {
   return (
      <Wrap>
         <Header />
         <Main>
            <WeatherCard />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home
