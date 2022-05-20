import React from 'react'
import './email.css'

function Email() {
    const email = "nwekejohnbosco@gmail.com";
 

  return (
    <div className="email__container">
          <div className="email__content">
              {email.split('').map((char, index) => <span key={index} className='email_char'> {char}</span> )}
          </div>
      <div className="pole"> </div>
    </div>
  );
}

export default Email