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
        props.alert("Copied Successfully!","success")
    }

    const handleRemoveSpaceClick = () =>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.alert("Extra spaces successfully removed!","success")
    }

    return (
        <>
            <div className="container my-3" style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"black":"white"}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="textArea" hint="Enter Text Here" value={text} onChange={handleTextChange} rows="10" style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"black":"white"}}></textarea>

                <button className='btn btn-primary mt-3 me-2' onClick={handleUpClick}>To UpperCase</button>
                <button className='btn btn-primary mt-3 me-2' onClick={handleLowerClick}>To LowerCase</button>
                <button className='btn btn-primary mt-3 me-2' onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
                <button className='btn btn-primary mt-3 me-2' onClick={handleCopyClick}>Copy</button>
                <button className='btn btn-primary mt-3' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{backgroundColor : props.mode==="light"?"white":"#212529", color : props.mode==="light"?"black":"white"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words {text.length} letters</p>
                <p>{0.008 * text.length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text to preview here"}</p>
            </div>
        </>
    )
}
