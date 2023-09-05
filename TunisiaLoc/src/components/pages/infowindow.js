import React from 'react';

function InfoWindow (props){
return (
    props.show ? (<div className="fenetre" style={{ border: "2px solid yellow",
    borderRadius:20,backgroundColor:"white", width: 150, height: 150}}>
  
      <h1 className='FullName'>{props.data.FullName}</h1>
     <li className='City'>{props.data.City}</li>
     <li className='Adress'> {props.data.Adress}</li>
     <li className='Price'>{props.data.Price} </li>
     <li className='Phone'>{props.data.Phone} </li>
      </div>) : null
  );
}
  export default InfoWindow;