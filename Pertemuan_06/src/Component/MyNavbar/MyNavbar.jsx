import { NavLink, Link } from "react-router-dom"
import "./MyNavbar.css"
import {Container, Nav, Navbar} from "react-bootstrap"
const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="success" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="text-white">PeTIK Blog</Navbar.Brand>
          <Nav className="my-auto">
          <Nav.Link>
            <NavLink to={"/"} className={({isActive}) => isActive ? "active" : "text-decoration-none"}>Home</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to={"/post"} className={({isActive}) => isActive ? "active" : ""}>Posts</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to={"/about"} className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</div>

  )
}

export default MyNavbar
 