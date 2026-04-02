import './App.css'
import Card from './components/Card/Card';
import Content from './components/Content/Content'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Content nama="Ucup" membership="Platinum"/>
    <Content nama="Budi" membership="Gold"/>
    <Content nama="Asep" membership="Silver"/>
    <h3>Yuk berlangganan membership!</h3>

    <div className="card-wrapper">
              <Card title="Free" prize={0}
        benefit1="Gratis tanpa biaya langganan"
        benefit2="Bisa melihat katalog & update terbaru"
        benefit3="Akses dasar ke fitur utama"
        benefit4="Dukungan komunitas" />

              <Card title="Gold" prize={10000}
              isPopular={true}
        benefit1="Prioritas layanan pelanggan"
        benefit2="Akses premium terpilih"
        benefit3="Promo & diskon khusus member"
        benefit4="Dukungan komunitas di utamakan" />

              <Card title="Platinum" prize={20000}
        benefit1="Akses penuh ke seluruh fitur premium"
        benefit2="Prioritas tertinggi suport dan layanan"
        benefit3="Penawaran ekslusif & earlyy access"
        benefit4="Promo & diskon khusus member" />
    </div>
    </>
  );
};

export default App;
