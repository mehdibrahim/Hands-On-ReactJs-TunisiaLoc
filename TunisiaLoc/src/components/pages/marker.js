import React from 'react';
import InfoWindow from './infowindow';


function Marker (props){
return (
    <React.Fragment>
      <div
        style={{
          background:"green" ,
          border: "1.4px solid white",
          borderRadius:20,
          height: 5,
          width: 5
        }}
      />
      <InfoWindow
        show={props.show}
        data={props.data}
      />
    </React.Fragment>
  );
    }
  export default Marker;