import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css';
import Form from './formulaire';
import Recherche from "./recherche";
import Maps from "./Maps";
import { render } from 'react-dom';
export default function HomePage() {
 
        return (
          <div>
           <header className="header">
           <br/>
          <h2 className="titre">TunisiaLoc</h2>  
           
          <br/>
          <Link to="/formulaire">
                    <button className="button" 
            >add</button>
                </Link>
            
              
          <br/>
          </header>
        
          <Link to="/Maps">
                  <Maps/> 
                </Link>
        

        </div>
         
        );
      
}

