import React from 'react';
import Tilt from 'react-tilt'
import face from './logo.png'
import './Logo.css'
const Logo = () => {
    return ( 
        <div>
            <Tilt className = "Tilt br2 ma3 shadow-2" options = {{max: 35}}style = { {height: 150,width: 150 }}>
            <div className = "Tilt-inner pa4" > <img style={{paddintTop:'5px'}}alt='logo' src={face}/> </div> 
            </Tilt>
        </div>
    )
}


export default Logo;