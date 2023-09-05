

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import InfoWindow from './infowindow';

class SimpleMap extends Component {

    state = {
      center: {
        lat:35.67622,
        lng:  10.83576,
      },
      zoom: 10,
      show : false,
      etat: [],
      index:'',
      datas:[]
    }
  

  _onChildClick = (key, childProps) => {
    this.setState({
      show: !this.state.show})
  }
  render() {
   // let index=this.state.index
    let datas=this.state.datas
    let etat=this.state.etat
    return ( 
      <div style={{ height: '100vh', width: '100%',margin:"10px",padding:"10px",
       }}>
         { (()=>{ for(let l=0 ; l< localStorage.length;l++){
               let data = JSON.parse(localStorage.getItem(localStorage.key(l)))
               
               let fen={show:false}
               
               
              datas[l]=data
              etat[l]=fen
   
              }
           })()}
         <InfoWindow 
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDy7o_n2MG9ZJiqs1jHuNfiKZaAfnIPuVQ' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onChildClick={this._onChildClick}>
             
               
              
            
          
           {datas.map((data,i) =>(
             
             
            <Marker
            lat={data.alt}
            lng={data.long}
            show={this.state.show}
            data={data}
            
            
            />
           
           )
           )}
           

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;