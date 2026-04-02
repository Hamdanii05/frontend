import Data from "../../Component/Data/Data"
import Header from "../../Component/Header/Header"
import data from "../../data.json"
import Footer from '../../Component/Footer/Footer'
import "./Produk.css"
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
  import { useState } from "react";

const ProdukMobil = () => {
  const [formData, setFormData] = useState({
    nama_mobil: "",
    harga_mobil: "",
    file: null,
  });

  const [preview, setPreview] = useState(null);
  const [mobilList, setMobilList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      const file = files[0];
      setFormData({ ...formData, file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nama_mobil || !formData.harga_mobil || !formData.file) {
      alert("Semua field wajib diisi");
      return;
    }

    const newMobil = {
      id: Date.now(),
      nama_mobil: formData.nama_mobil,
      harga_mobil: formData.harga_mobil,
      foto: preview,
    };

    setMobilList([...mobilList, newMobil]);

    setFormData({
      nama_mobil: "",
      harga_mobil: "",
      file: null,
    });
    setPreview(null);
  };

  return (
    <div>
      <Header />
      <div><Data data={data}/></div>
      <Container className="d-flex justify-content-center mt-5">
        <Card style={{ width: "100%" }} className="shadow">
          <CardBody>
            <CardTitle tag="h5" className="mb-4 text-center">
              Tambah Data Mobil
            </CardTitle>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Nama Mobil</Label>
                <Input
                  type="text"
                  name="nama_mobil"
                  placeholder="Masukkan nama mobil"
                  value={formData.nama_mobil}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Harga Mobil</Label>
                <Input
                  type="number"
                  name="harga_mobil"
                  placeholder="Masukkan harga mobil"
                  value={formData.harga_mobil}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Foto Mobil</Label>
                <Input
                  type="file"
                  name="file"
                  onChange={handleChange}
                />
              </FormGroup>

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
              )}

              <Button color="primary" block>
                Simpan
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>

      <Container className="mt-5">
        <div className="row">
          {mobilList.map((mobil) => (
            <div className="col-md-4 col-sm-6 col-12 mb-4" key={mobil.id}>
              <Card className="car-card shadow">
                <img
                  src={mobil.foto}
                  alt={mobil.nama_mobil}className="car-image"/>

                <CardBody>
                  <CardTitle tag="h5" className="car-title">
                    {mobil.nama_mobil}
                  </CardTitle>

                  <p className="car-price">
                    $ {mobil.harga_mobil} / Jam
                  </p>

                  <Button color="primary" className="detail-btn">
                    Detail
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default ProdukMobil;
