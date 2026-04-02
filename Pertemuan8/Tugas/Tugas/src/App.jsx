import About from './pages/About/About'
import Home from './pages/Home/Home'
import './App.css'
import PageError from './pages/PageError/PageError'
import ProdukMobil from './pages/Product/ProdukMobil'
import {Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./pages/News/News"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tentang" element={<About/>}/>
      <Route path="/car" element={<ProdukMobil/>}/>
      <Route path="/news" element={<News />} />
      <Route path="*" element={<PageError/>}/>
    </Routes>
    </>
  )
}

export default App

