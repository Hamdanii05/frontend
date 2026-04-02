import MyNavbar from "../../Component/MyNavbar/MyNavbar"
import Footer from "../../Component/Footer/Footer"
import { Container } from "react-bootstrap"
const About = () => {
    return(
        <div className='d-flex min-vh-100 flex-column'>
        <MyNavbar />
        <Container className="flex-fill">
        <h1>About PeTIK Blog</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nihil, in excepturi praesentium suscipit voluptatem quam sequi quia nobis dolor sint repudiandae veritatis soluta
            ea nulla et corrupti, sit aut perferendis?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat libero exercitationem et quas quia, 
            veritatis mollitia impedit ea ex quidem assumenda quod quis velit doloremque asperiores magnam repellendus corrupti porro?
        </p>
        </Container>
      
        <Footer />
        </div>
    )
}
export default About