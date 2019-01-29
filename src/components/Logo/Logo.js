import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'
const Logo = () => {
    return ( 
        <div>
            <Tilt className = "Tilt br2 ma5 shadow-2" options = {{max: 55}}style = { {height: 150,width: 150 }}>
            <div className = "Tilt-inner tc" > Logo </div> 
            </Tilt>
        </div>
    )
}


export default Logo;