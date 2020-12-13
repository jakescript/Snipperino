import React from "react"
import Editor from "./Editor"
import SnippetList from "./SnippetList"


class App extends React.Component{
  constructor(){
      super()
  }

  render(){
      return(
          <div>
              <Editor />
              <SnippetList />
          </div>
      )
  }
}

export default App
