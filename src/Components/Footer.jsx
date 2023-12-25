import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 TextUtiles</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
