import React from "react"
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import axios from "axios";

class Editor extends React.Component{
    constructor(){
        super()
        this.state = {
            code: `console.log("Hello World")`,
            title: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.titleChange = this.titleChange.bind(this)
        this.shareSnippet = this.shareSnippet.bind(this)
        this.run = this.run.bind(this)
    }

    handleChange(newVal){
        this.setState({
            code: newVal
        });
    }

    titleChange(ev){
        this.setState({title: ev.target.value})
        console.log(this.state.title)
    }

    run(){
        try {
            const code = (new Function(this.state.code))()
        } catch (error) {
            console.log(error)
        }
    }

    async shareSnippet(){
        try {
            console.log(this.state)
            await axios.post("/api/posts", {
                title: this.state.title,
                content: this.state.code
            })
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div className="wrapper">
                <div className="editor-container">
                    <AceEditor
                        mode="javascript"
                        theme="monokai"
                        onChange={this.handleChange}
                        name="test"
                        placeholder="code here...."
                        value={this.state.code}
                        fontSize={14}
                        wrapEnabled={true}
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
                    <div id="controls">
                        <p>Title this snippet</p>
                        <input
                            type="text"
                            placeholder="my amazing snippet!"
                            value={this.state.title}
                            onChange={this.titleChange}
                        />
                        <p> ( code output shown in dev tools console)</p>
                        <button onClick={this.run}>execute</button>
                        <button onClick={this.shareSnippet}> share snippet! </button>
                    </div>

            </div>
        )
    }
}

export default Editor
