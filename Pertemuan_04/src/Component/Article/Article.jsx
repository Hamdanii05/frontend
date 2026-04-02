import { useState } from "react";

const Article = ({post = []}) => {
    const [search, setSearch] = useState("");
    const [fitler, setFilter]  = useState(post)

    const handleChangeSearch = (e) => {
        setSearch (e.target.value);
        console.log(search);
    };

    const filteredPost = post.filter(item =>
        item.Title.toLowerCase().includes(search.toLowerCase())
    );


    return (
    <div>
        Cari artikel : <input type="text" onChange={handleChangeSearch}></input>
        <br />
        <small>Di temukan <b>{filteredPost.length}</b> data dengan pencarian kata <b>{search}</b></small>

    {
        filteredPost.map((post, index) => {
            return(
                <div key={index}>
                    <h3>{post.Title}</h3>
                    <small>
                        {post.author} -Date: {post.date} , tags: {post.tags}
                    </small>
                </div>
            )
        })
    }
    </div>
  )
}

export default Article;
