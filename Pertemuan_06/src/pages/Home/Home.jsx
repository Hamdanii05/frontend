import React from 'react'
import MyNavbar from '../../Component/MyNavbar/MyNavbar'
import Footer from '../../Component/Footer/Footer'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import hero_image from "../../assets/hero.svg"

const Home = () => {
  const categories = ["Teknologi", "Otomotif", "Fashion", "Sport"];
  
  return (
    <div className='d-flex min-vh-100 flex-column'>
    <MyNavbar />
    <div className='bg-success text-light py-5 flex-fill d-flex align-items '>
      <Container className='flex-fill d-flex align-items-center '>
       <Row className='w-100 align-items-center'>
       
        <Col md="6" className='mb-4 mb-md-0'>
      <h1>Selamat Datang di PeTIK Blog</h1>
      <p className='lead'>
        Pesantren Teknologi Informasi dan Komunikasi (PeTIK)
        adalah lembaga pendidikan yang fokus pada pengembangan keterampilan IT,
        khususnya web development,mobile development dan jaringan
      </p>
      <p>
        Bergabunglah bersama kami dan tingkatkan keahlianmu di dunia digital
        bersama mentor dan praktisi industri!
      </p>
      <Button variant='light' size='lg' href='/post' className=''>
           Pelajari lebih lanjut
      </Button>
      </Col>
      <Col md="6">
      <img src={hero_image}alt="image" className='img-fluid'/>
      </Col>
    
      </Row>
      </Container>
    </div>
     

     {/*POpular categories */}
     <Container className='my-5'>
      <Row className='text-center mb-5'>
        <Col>
          <h2 className='fw-bold'>Kategori Terpopuler</h2>
          <p className='text-muted'>Explor kategori yang menarik</p>
        </Col>
      </Row>
      <Row className='g-4 justify-content-center'>
      {
        categories.map((ct, index) => (
          <Col md={4} key={index}>
          <Card className='text-center shadow-sm category-card'>
            <Card.Body>
              <Card.Title className='fw-bold'>{ct}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        ))
      }
      </Row>

     </Container>
      <Footer />
    </div>
  )
}

export default Home