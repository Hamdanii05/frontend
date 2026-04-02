import "./Data.css"
import { useState } from "react";
import { FaSearch } from "react-icons/fa"

const Data = ({ data = [] }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchText, setSearchText] = useState("");

  const cari =
    searchText === ""
      ? data
      : data.filter((mobil) =>
          mobil.nama_mobil.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Cari Mobil"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button onClick={() => setSearchText(searchInput)} className="tmb">
          <FaSearch />
        </button>

        <br />
        {searchText && (
          <small>
            Di temukan <b>{cari.length}</b> data dengan pencarian kata: <b>{searchText}</b>
          </small>
        )}
      </div>

      <div className="konten">
        {cari.map((date, index) => (
          <div className="kartu" key={index}>
            <div className="kartu-head">
              <img src={date.gambar} alt={date.nama_mobil} />
            </div>
            <div className="kartu-body">
              <p>{date.nama_mobil}</p>
              <p className="harga">{date.harga_sewa}</p>
              <button className="tombol">Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
