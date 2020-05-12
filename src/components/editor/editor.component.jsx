import React from "react";
import "./editor.styles.css";


const Editor = ({text, handleChange}) => (
    <div className="editor-component">
        <form action="">
          <textarea name="text" id="editor" cols="60" rows="15" value={text} onChange={handleChange} />
        </form>  
    </div>
)

export default Editor;