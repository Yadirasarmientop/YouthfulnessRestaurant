import React from 'react';
import { Link } from 'react-router-dom';


import './sectionmenu.css';

export const WhiteSection = ({id}) => {
    

   
    return (
        
        <div className="row-white">
        
            <div className="col-lg-6 content-title">
                <div className="titles">
                Breakfasts 
                <hr/>
                </div>
                
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipis cing elit.
                </p>
                <div className="btn-content">
                    <Link
                        to ="/breakfasts"
                        className="btn"
                    >    
                        Get start it
                    </Link>
                </div>
            </div>
            <div className="col-lg-6">
                <img 
                    src="/youthfulness/breakfast.jpg" 
                    alt="Breakfasts"
                />
            </div>
        </div>
    )
}
