(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){e.exports=t(26)},,,,,function(e,n,t){},function(e,n,t){},,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(11),i=t.n(o),s=(t(18),t(12)),c=(t(19),t(5)),l=t.n(c),d=(t(23),function(e){var n=e.text,t=e.handleChange;return r.a.createElement("div",{className:"editor-component"},r.a.createElement("form",{action:""},r.a.createElement("textarea",{name:"text",id:"editor",cols:"60",rows:"15",value:n,onChange:t})))}),m=(t(24),new l.a.Renderer),u=function(e){var n=e.text;return r.a.createElement("div",null,r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:l()(n,{renderer:m})}}))},h=(t(25),function(e){return r.a.createElement("div",{className:"header"},e.text)});var f="\n# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \n\nHeres some code, `<div></div>`, between 2 backticks.\n\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n You can also make text **bold**... whoa!\n Or _italic_.\n Or... wait for it... **_both!_**\n And feel free to go crazy ~~crossing stuff out~~.\n\n There's also [links](https://www.freecodecamp.com), and\n > Block Quotes!\n\n And if you want to get really crazy, even tables:\n\n Wild Header | Crazy Header | Another Header?\n ------------ | ------------- | ------------- \n Your content can | be here, and it | can be here....\n And here. | Okay. | I think we get it.\n\n - And of course there are lists.\n   - Some are bulleted.\n      - With different indentation levels.\n         - That look like this.\n\n\n 1. And there are numbererd lists too.\n 1. Use just 1s if you want! \n 1. But the list goes on...\n - Even if you use dashes or asterisks.\n * And last but not least, let's not forget embedded images:\n\n ![React Logo w/ Text](https://goo.gl/Umyytc)\n ",v=function(){var e=Object(a.useState)(f),n=Object(s.a)(e,2),t=n[0],o=n[1];return l.a.setOptions({breaks:!0,gfm:!0}),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"heading"},"React Markdown Previewer"),r.a.createElement("div",{className:"AppWrap"},r.a.createElement("div",{className:"editorWrap"},r.a.createElement(h,{text:"Editor",className:"editorHeader"}),r.a.createElement(d,{text:t,handleChange:function(e){console.log(e.target.value),o(e.target.value)}})),r.a.createElement("div",null,r.a.createElement(h,{text:"Previewer"}),r.a.createElement(u,{text:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.e09dd8d7.chunk.js.map