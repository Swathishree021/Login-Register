import React, {useState} from 'react';

// State and Event handler 

export default function TextForm(props) {
const handleUpClick=()=>{
  //console.log("Uppercase was clicked: "+ text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("converted to uppercase", "success");
}

const handleLoClick=()=>{
  //console.log("Lowercase was clicked: "+ text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase", "success");
}
const handleClearClick=()=>{
  //console.log("Cleartext was clicked: "+ text);
  let newText = '';
  setText(newText)
  props.showAlert("Texted cleared", "success");
}
const handleCopy=()=>{
  console.log("Copytext was clicked");
  var text = document.getElementById("myBox");
  text.select ();
  navigator.clipboard.writetext(text.value);
  props.showAlert("Copied to clipboard", "success");

}


const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);
}

 // Declare a new state variable, which we'll call "count"
const [text, setText] = useState('');
// text="new text"; // wrong way to change the state
// setText("new text"); //correct way to change the state
  return (
<>
<div className="container" style={{color: props.mode==='dark'? 'white':'black'}} >
<h1 >{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white',color:props.mode==='dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>ClearText</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button>

</div>
<div className="containe my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
<h1> Your text summary</h1> 
<p>  {text.split(" ").length} words and {text.length} characters</p>
<p>  {0.008* text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
</div>
</>
  )
}
