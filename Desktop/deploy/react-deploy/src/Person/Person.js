import React from 'react';


const person = (props) =>{

   const  stylePerson = {
       boxShadow: '0 5px 10px  black',
       padding:'20px',
       width: '600px',
       margin: '0 auto',
       marginBottom: '10px',
       backgroundColor: '#21dafb'
   }
    return (
        <div style={stylePerson}>
        <h2>{props.name} {props.age}</h2>
        </div>
    )
}
export default person