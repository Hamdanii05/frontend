import {Route, Routes} from "react-router-dom"
import './App.css'
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog.jsx';
import DetailBlog from './pages/DetailBlog/DetailBlog.jsx';
import Home from './pages/Home/Home';
import Error from "./pages/ErrorPage/Error.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post" element={<Blog/>}/>
      <Route path="/post/:id" element={<DetailBlog/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App;