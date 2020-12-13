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
              <div id="header">
                <h1>Snipperino</h1>
                <p> share javascript code </p>
              </div>
              <Editor />
              <div id="snippet-cta">
                <p> view snippets blow </p>
              </div>
              <SnippetList />
          </div>
      )
  }
}

export default App
