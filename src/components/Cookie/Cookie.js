// src/components/Cookie.js
import React from 'react';
import './Cookie.css'; // Importe o arquivo CSS

const Cookie = ({ onClick }) => {
  return (
    <img
      src="https://media.licdn.com/dms/image/D4D03AQEqoPqtU5RXfQ/profile-displayphoto-shrink_400_400/0/1668464629201?e=1698278400&v=beta&t=sQGfhwFqoG7kplOYTrQbfujzZtxgHdvmEbOeNgViC4w"
      alt="Cookie"
      className="cookie-image" // Aplique a classe CSS aqui
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Cookie;
