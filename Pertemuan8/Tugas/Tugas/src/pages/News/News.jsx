import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
  Spinner,
  Button,
} from "reactstrap";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://myfakeapi.com/api/cars/"
        );

        setCars(response.data.cars);
      } catch (error) {
        setErrorMsg("Gagal memuat data mobil");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <Container className="mt-4">

      {loading && (
        <div className="d-flex flex-column align-items-center my-5">
          <Spinner color="primary" />
          <p className="text-muted mt-2">Memuat data mobil...</p>
        </div>
      )}

      {errorMsg && <p className="text-danger">{errorMsg}</p>}

      <Row>
        {cars.map((car) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={car.id}>
            <Card className="h-100 shadow-sm">
              <img
                alt={car.car}
                src={`https://source.unsplash.com/400x250/?${car.car}`}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <CardBody>
                <CardTitle tag="h5">{car.car}</CardTitle>
                <CardText className="text-muted mb-1">
                  Brand: {car.car_make}
                </CardText>
                <CardText className="fw-bold text-danger">
                  ${car.price} / Jam
                </CardText>

                <Button color="primary" block>
                  Detail
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cars;
