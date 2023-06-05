import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = () => {
        setText((""))
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase())
    }

    const handleCopyClick = () => {
        var text = document.getElementById("textArea")
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const handleRemoveSpaceClick = () =>{
        let newtext = text.split(/[ ]+/)
        setText(newtext.join(" "))
    }

    return (
        <>
            <div className="container my-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="textArea" hint="Enter Text Here" value={text} onChange={handleTextChange} rows="10"></textarea>

                <button className='btn btn-primary mt-3' onClick={handleUpClick}>Convert To UpperCase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerClick}>Convert To LowerCase</button>
                <button className='btn btn-primary mt-3' onClick={handleRemoveSpaceClick}>Remove Extra Spaces</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleCopyClick}>Copy</button>
                <button className='btn btn-primary mt-3' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words {text.length} letters</p>
                <p>{0.008 * text.length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
