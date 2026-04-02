import { use } from 'react'
import MyNavbar from '../../Component/MyNavbar/MyNavbar'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer';

const Error = () => {
    const navigate = useNavigate();
  return (
    <div>
    <MyNavbar />
      <h3>404 Halaman tidak di temukan</h3>
      <p>Oopps.. Halaman yang kamu cari tidak ada</p>
      <NavLink to={"/"}>Home</NavLink>
      <button onClick={() => navigate(-1)}>Kembali</button>
      <Footer />
    </div>
  )
}

export default Error
