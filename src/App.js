import React, { Component } from 'react'
import imgFruit from "./components/image/maca.png"
import "./style.css";


class App extends Component {
    state = {
        name: "David",
        age: 28,
        favoriteFood: "Espaguete",
        favoriteMusic: ["Mutter", "Sonnen", "Amerika"]
    }
    render(){
        return(
            <div className="all-conteiner">
                <h1>{this.state.name}</h1>
                <h2>{this.state.age}</h2>
                <h3>{this.state.favoriteFood}</h3>
                <h1>My favorite Songs of the Hammstein</h1>
                <ul className="conteiner-songs">
                    <li>{this.state.favoriteMusic[0]}</li>
                    <li>{this.state.favoriteMusic[1]}</li>
                    <li>{this.state.favoriteMusic[2]}</li>
                </ul>
                <div>
                    <figure>
                        <img src={imgFruit}/>
                        <figcaption>Maça</figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}


export default App;
