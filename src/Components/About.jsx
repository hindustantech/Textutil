// import React, { useState } from 'react'

 const About = (props) => {
    // const [mystyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
      
    // })
    // const[textbtn,setTextbtn]=useState('Enable Dark Mode')

    // const togol = () => {
    //     if (mystyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setTextbtn('Enable Dark Mode')
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border:'1px solid white'
    //         })
    //         setTextbtn('Enable Light Mode')
    //     }
    // }
    return (

        <div className="accordion my-3" id="accordionPanelsStayOpenExample" style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button"  style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}     >
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed"  style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div onClick={togol} type="button" className="btn btn-primary">{textbtn}</div>
            </div> */}
        </div>
    )
}
export default About;