import React, {Component} from "react"
import axios from "axios"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

class SnippetList extends Component{
  constructor(){
    super()
    this.state = {
      snippetList: []
    }
  }

  async componentDidMount(){
    const snips = (await axios.get("/api/posts")).data
    this.setState({snippetList: snips});
  }

  render(){
    return(
        <div id="snippet-container">
          {this.state.snippetList.map(snip => {
            return(
              <div key={snip.id} className="snippet-wrapper">
                <h3>{snip.title}</h3>
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name="editor"
                    className="editor"
                    value={snip.content}
                    fontSize={14}
                    wrapEnabled={true}
                    height="250px"
                    editorProps={{ $blockScrolling: true }}
                />
              </div>
            )
          })}
        </div>
    )
  }
}

export default SnippetList
