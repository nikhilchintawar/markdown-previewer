import React from 'react';
import marked from 'marked';
import "./previewer.styles.css";

const renderer = new marked.Renderer()
const Previewer = ({text}) => (
    <div>
        <div id="preview" dangerouslySetInnerHTML= {{__html: marked(text, {renderer: renderer})}} />      
    </div>
)

export default Previewer;