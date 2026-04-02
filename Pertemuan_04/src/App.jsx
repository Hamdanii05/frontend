import './App.css'
import Article from './Component/Article/Article';
import Counter from './Component/Article/Counter';
import Lifecycle from './Component/lifecycle/Lifecycle';
import post from "./post.json"

function App() {

  return (
    <>
      <Article post={post}/>
      <h3>Top Author</h3>
      <ol>
        {post.map((post, index) => {
            return <li key={index}>{post.author}</li>
        })}
      </ol>
      <button onClick={() => alert ("hello world")}>Click Me!</button>
      <Counter/>
      <Lifecycle />
    </>
  )
}

export default App;