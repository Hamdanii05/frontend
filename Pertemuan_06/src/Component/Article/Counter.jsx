import "./Counter.css"
import { useState } from "react";

const Counter = () => {
const [count , setCount] = useState(0)
    return(
        <div>
        <p>{count}</p>
            <button className="btn1" onClick={() => setCount(count - 1)} >Kurang</button>
            <button className="btn2" onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    )
}
export default Counter;