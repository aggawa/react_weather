import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />

         <Route path="/weather" element={<Detail />} />

         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
