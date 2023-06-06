import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.alert("Successfully Converted to Uppercase!","success")
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = () => {
        setText((""))
        props.alert("Text Cleared!","success")
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase())
        props.alert("Successfully Converted to Lowercase!","success")
    }

    const handleCopyClick = () => {
        var text = document.getElementById("textArea")
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.alert("Copied Successfully!","success")
    }

    const handleRemoveSpaceClick = () =>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.alert("Extra spaces successfully removed!","success")
    }

    const getLength = (string) =>{
        let len = string.trim().split(/\s+/).length
        if(string.trim().length === 0){
            return 0
        }else{
            return len
        }
    }

    return (
        <>
            <div className="container my-3" style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"black":"white"}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="textArea" hint="Enter Text Here" value={text} onChange={handleTextChange} rows="10" style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"black":"white"}}></textarea>

                <button disabled={getLength(text)===0} className='btn btn-primary mt-3 me-2' onClick={handleUpClick}>To UpperCase</button>
                <button disabled={getLength(text)===0} className='btn btn-primary mt-3 me-2' onClick={handleLowerClick}>To LowerCase</button>
                <button disabled={getLength(text)===0} className='btn btn-primary mt-3 me-2' onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
                <button disabled={getLength(text)===0} className='btn btn-primary mt-3 me-2' onClick={handleCopyClick}>Copy</button>
                <button disabled={getLength(text)===0} className='btn btn-primary mt-3' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"black":"white"}}>
                <h2>Your text summary</h2>
                <p>{getLength(text)} words {text.length} characters</p>
                <p>{parseFloat(0.008 * text.length).toFixed(2)} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
