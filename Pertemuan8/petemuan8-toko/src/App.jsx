// import './App.css'
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Customer from "./Components/Customer/Customer"
// import Profile from "./Profile";

function App() {
const a = 10;
const b = 20;
console.log(a + b);

  return (
    <>
    <Header />
    <h1>To-do List</h1>
    <ol>
      <li>Mengerjakan tugas front end</li>
      <li>Mempelajari tutorial react js</li>
      <li>Murojaah 30 Juz</li>
    </ol>
    {/* <Profile nama="Cecep" alamat="Cirebon" umur={25}/> */}
    <Customer nama="ucup" alamat="depok" membership="Premium"/>
    <Customer nama="Aji" alamat="Cilacap" membership="Gold"/>
    <Customer nama="Solihin" alamat="Bandung" membership="Platinum"/>
    <img src="https://picsum.photos/200/300" alt="picture" />
    <Footer nama="Tarom" />
    </>
  )
}

export default App;
