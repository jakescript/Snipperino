import React from "react"
import ReactDOM from "react-dom"
const app = document.querySelector("#app");

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "jake"
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, app)