import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import "./About.css"
const About = () => {
  return (
  <div>
    <Header />
    <div className="content">
      <div className="article">
      <h1>Luxury Rental Car</h1>
        <p>Rental Mobil Mewah – Solusi Perjalanan Elegan dan Nyaman
            Rental mobil mewah hadir sebagai solusi bagi Anda yang mengutamakan kenyamanan, gaya, 
            dan prestise dalam setiap perjalanan. Kami menyediakan berbagai 
            pilihan mobil premium dengan kondisi prima dan interior eksklusif 
            untuk memenuhi kebutuhan bisnis, acara resmi, maupun liburan pribadi.
            Dengan layanan profesional, proses pemesanan yang mudah, serta pilihan 
            sewa fleksibel, kami berkomitmen memberikan pengalaman berkendara yang aman dan berkelas. 
            Jadikan setiap perjalanan Anda lebih istimewa bersama layanan rental mobil mewah kami.</p>
      </div>
    </div>
    <Footer />
  </div>

  )
}

export default About
