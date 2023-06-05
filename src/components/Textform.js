import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here")

    const handleUpClick = () =>{
        console.log("Button Clicked")
        setText("You have clicked uppercase button")
    }

    const handleTextChange = () =>{

    }

    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="textArea" value={text} onChange={handleTextChange} rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert To UpperCase</button>
        </div>
    )
}
