import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../Component/Header/Header";
import "./PageError.css";

const PageError = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="error-wrapper">
        <div className="error-left">
          <span className="error-code">404</span>
          <h2>Oops! Halaman tidak ditemukan</h2>
          <p>
            Sepertinya halaman yang kamu tuju sudah dihapus, dipindahkan,
            atau URL-nya salah.
          </p>

          <div className="error-action">
            <NavLink to="/" className="btn-primary">Ke Beranda</NavLink>
            <button className="btn-secondary" onClick={() => navigate(-1)}>
              Kembali
            </button>
          </div>
        </div>

        <div className="error-right">
          <div className="circle"></div>
          <div className="circle small"></div>
        </div>
      </div>
    </div>
  );
};

export default PageError;
