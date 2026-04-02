import { useParams } from "react-router-dom";
import MyNavbar from "../../Component/MyNavbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Component/Footer/Footer";

const DetailBlog = () => {
  const [post, setPost] = useState("");
  const [comment, setComment] = useState([])
  const {id} = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postesponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const commentResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        
        
        setPost(postesponse.data)
        setComment(commentResponse.data)
        
      } catch (error) {
        console.log(error.message);
        
      }
    }
      fetchData()
  }, [id])



  return (
    <div>
    <MyNavbar />
      <h1>Detail Blog</h1>
      <h3>UserId :{id}</h3>
      <h3>{post.title}</h3>
      <p><i>{post.body}</i></p>
      <hr />
      <h4>komentar</h4>
      {
        comment.filter((c) => c.postId === Number(id))
        .map((comment) => (
          <div key={comment.id} style={{border:"1px solid black", margin:"6px", padding:"6px"}}>

            <b>{comment.name}</b>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))
      }
      <Footer />
    </div>
  );
};

export default DetailBlog;