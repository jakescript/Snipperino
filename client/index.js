import React from "react"
import ReactDOM from "react-dom"
import Editor from "./Editor"


class App extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Editor />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#app"))