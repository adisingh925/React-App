import React from 'react'

export default function About(props) {

    let myStyle = {
        color : props.mode==="light"?"black":"white",
        backgroundColor : props.mode==="light"?"white":"#212529"
    }

    return (
        <div className="container my-3" style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion my-4" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Convert to Uppercase</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Our "Convert to Uppercase" feature allows you to easily transform your text into uppercase letters. Whether you need to capitalize an entire sentence, make your text stand out, or meet specific formatting requirements, this tool simplifies the process with just a click.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Convert to Lowercase</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}> 
                        With our "Convert to Lowercase" function, you can effortlessly convert your text to lowercase. This tool is useful when you want to standardize your text, maintain consistency, or simply prefer lowercase formatting. Achieve the desired case effortlessly and save valuable time in the process.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Remove Extra Spaces</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Our "Remove Extra Spaces" option is designed to help you clean up your text by eliminating unnecessary spaces. Whether you accidentally included multiple spaces between words or encountered irregular spacing while copying text, this tool efficiently removes any excess spaces and ensures your text appears clean and professional.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
