import { Wrap, Main } from '../styles/StyledComponent'
import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard'
import Footer from '../components/Footer'

// 1. WeatherCard.jsx에서 저장시 페이지에서 카드 리스트가 재생성됩니다.
// 2. 카드 리스트 순서가 계속 바뀝니다. (뒤로가기, 새로고침, 저장 등)
// 3. 카드를 클릭하여 상세정보를 확인하고 뒤로가기를 하면 카드가 하나가 더 생깁니다.

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
