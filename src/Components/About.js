import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // });
    // const [btnText, setbtnText] = useState("enable dark mode");

    // const toggleDarkMode = ()=>{
    //     if(myStyle.backgroundColor == 'white'){
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         }    )  
    //         setbtnText("enable light mode");  
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor: 'white',
    //             color: 'black'
    //         })
    //         setbtnText("enable dark mode");
    //     }
    // }

    let myStyle = {
        color: props.darkmode=='dark'?'white':'grey',
        backgroundColor: props.darkmode=='dark'?'grey':'white'
    }

    return (
        <>
        <div className='container' style={myStyle}>
            <h2 className='my-2'>About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or any other.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number and character. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, excels douments, pdf documents, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='container'>
        <button type="button" className="btn btn-primary my-3" onClick={toggleDarkMode}>{btnText}</button>
        </div> */}
        </>
    )
}
