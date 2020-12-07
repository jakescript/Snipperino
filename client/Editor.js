import React from "react"
import AceEditor from "react-ace";
import Console from "./Console";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

class Editor extends React.Component{
    constructor(){
        super()
        this.state = {
            code: `console.log("Hello World")`,
            consoleMsg: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.run = this.run.bind(this)
    }

    handleChange(newVal){
        this.setState({
            code: newVal
        });
    }

    run(){
        try {
            ;(new Function(this.state.code))()
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div>
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
                <div>
                    <button onClick={this.run}>execute</button>
                </div>
                <Console code={this.state.code}/>
            </div>
        )
    }
}

export default Editor