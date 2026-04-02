import React, {Component} from "react";

export default class Lifecycle extends Component {
    constructor(props) {
        super (props);
        console.log("1. Constuctor: Komponen di buat");
        this.state = {
            count: 0,
        };
        
    }
        componentDidMount() {
        console.log("componentDidMount: Komponen sudah di render ke dom");
        
        // perubahan pada DOM : Mengubah teks button, warna teks dan background
        //button setelah komponen di mount

        document.getElementById("btn").textContent = "klik untuk tambah";
        document.getElementById("btn").style.backgroundColor = "#3674b5";
        document.getElementById("btn").style.color = "#fff";

        this.interval = setInterval(() => {
            console.log("Count sekarang :", this.state.count);
            
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(
            "3. componenDiUpdate: Komponen di perbarui",
        prevState.count,
        "->",
        this.state.count
        );
        
    }

    componentWillUnmount(){
        console.log("4. componenWillUnMount: komponen akan di hapus");
        clearInterval(this.interval)
        
    }

    increment = () => {
        this.setState({count : this.state.count + 1})
    }

    render() {
        console.log("komponen sedang di render");
        
        return(
            <div>
                <h2>React Lifecycle</h2>
                <p>count: {this.state.count}</p>
                <button id="btn" onClick={this.increment}>Tambah</button>
            </div>
        )
    }
}