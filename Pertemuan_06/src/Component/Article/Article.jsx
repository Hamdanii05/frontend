import { useEffect, useState } from "react";
import Search from "../Search/Search.jsx";
import axios from "axios"
import { NavLink } from "react-router-dom";

const Article = () => {
    const [posts, setPosts] = useState([]);
    const [fitleredPost, setFilterPost]  = useState(posts)
    const [postTotal, setPostTotal] = useState(posts.length)
    const [authors, setAuthors] = useState([])

    // useEffect(() => {
        //sideEffect : membrsihkssn efek
        // console.log("komponen di pasang atau data berubah");

        // return() => {
        //     //cleanup : membersihkan efek
        //     console.log("membersihkan sebelum komponen di lepas");
            
        // };
    //     setFilterPost(post);
    //     setPostTotal(post.length)
        
    // }, [fitleredPost])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts", 
                );

                const UserResponse = await axios.get("https://jsonplaceholder.typicode.com/users", );
                

                setFilterPost(postsResponse.data);
                setPostTotal(postsResponse.data.length);
                setPosts(postsResponse.data);

                setAuthors(UserResponse.data);
            } catch (error) {
                console.log(error.message);
                
            }
        }

        fetchData();
    }, [])

    

    const onChangeSearch = (searchTerm) => {
        const filteredData = posts.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterPost(filteredData);
        setPostTotal(filteredData.length);
    }

    return (
    <div>
      <Search totalPost={postTotal} onSearchChange={onChangeSearch}/>
    {
        fitleredPost.map((post, index) => {
            const author = authors.find((user) => user.id == post.userId)
            return(
                <div key={index}>
                <NavLink to={`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                </NavLink>
                    <small>
                      -Author:<b><i>{author ? author.name :"Unknow"}</i></b> {post.name}   {post.date}  {post.tags}
                    </small>
                </div>
            )
        })
    }
    </div>
  )
}

export default Article;
