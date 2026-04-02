import Article from "../../Component/Article/Article";
import Footer from "../../Component/Footer/Footer";
import MyNavbar from "../../Component/MyNavbar/MyNavbar";


const Blog = () => {
    return(
        <div>
        <MyNavbar />
            <h1>Daftar Artikel</h1>
            <Article />
            <Footer />
        </div>
    )
}
export default Blog;