import "./Header.css"
import { FaUserCircle} from "react-icons/fa"
import { NavLink } from "react-router-dom"
const Header = () => {
    return (
        <nav className="head">
            <ul>
                <li>
                    <NavLink  to={"/"} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink  to={"/car"} className={({isActive}) => isActive ? "active" : ""}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={"/tentang"} className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to={"/news"} className={({isActive}) => isActive ? "active" : ""}>Cars</NavLink>
                </li>
            </ul>
            <div className="icons">
                <FaUserCircle/>
            </div>
        </nav>
    )
}
export default Header;