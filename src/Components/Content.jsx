import React, { useState } from 'react';

const Content = (props) => {

  const [text, settext] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    settext(e.target.value)

  }

  const handleUpperClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);

  }
  const handleLowerClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);

  }
  const handleclearClick = () => {
    let newtext = " ";
    settext(newtext);

  }
  const handlespaceClick = () => {
    let newtext = text.replace(/\s+/g, ' ').trim();
    settext(newtext);
  }



  return (
    <>
      <div className="container my-3 Scroll  " style={{ color: props.mode === 'dark' ? 'white' : '#171c32' }} >
        <h1 >Enter Your Text</h1>
        <textarea className="form-control wi" style={{ backgroundColor: props.mode === 'dark' ? '#171c32' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleInputChange} id="exampleFormControlTextarea1 xbox" columns="12" rows="12" /><br />
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Click me</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Click To Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Click To clear</button>
        <button className="btn btn-primary mx-2" onClick={handlespaceClick}>remove Extar Space</button>
       
        <div className="container">
          <h1>Text-Sumary</h1>
          <p> <b>Words :</b> {text ? text.replace(/\s+/g, ' ').trim().split(" ").length : 0} <b>Character :</b> {text.length}</p>
          <h3> Word Read Time :{0.04 * text.split(" ").length}</h3>
          <h2>Previwe Text </h2>
          <p> {text}</p>

        </div>
      </div>
    </>
  );
};

export default Content;
