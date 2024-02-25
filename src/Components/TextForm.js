import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log('convert to uppercase was clicked');
        setText(text.toUpperCase());
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick=()=>{
        //console.log('convert to uppercase was clicked');
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase","success");

    }
    const handleOnChange=(event)=>{
        //console.log('handle on change');
        setText(event.target.value);
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("text cleared","success");

    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");

    }
    const handleRemoveExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("extra spaces removed","success");

    }
    const remedywordCount = (arr)=>{
        return arr.filter((val) => val!="").length;
    }


    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'style={{color: props.darkmode==='dark'? 'grey':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor: props.darkmode==='dark'? 'grey':'white',color: props.darkmode==='light'? 'grey':'white'}}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container"style={{color: props.darkmode==='light'? 'grey':'white'}}>
            <h2>Your Text Summary</h2>
            {/* {let arr = text.split(/[ ]+/);
            arr.filter(value, index array)=>{
                value !=""
            }} */}
            <p>{remedywordCount(text.split(/[ ]+/))}words and {text.length}characters</p>
            {/* <p>{text.split(/[ ]+/).filter((value)=>{value!=""}).length}words and {text.length}characters</p> */}
            <p>{0.008 * text.split(/[ ]+/).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}

TextForm.propTypes={
    heading: PropTypes.string
}

