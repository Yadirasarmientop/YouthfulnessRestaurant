import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './sectionmenu.css';

export const WhiteSection = ({food}) => {
    

    return (
        
        <div className="row-white">
        
            <div className="col-lg-6 content-title">
                <div className="titles">
                {food.mainFoodCode}
                <hr/>
                </div>
                
                <p>
                {food.description}
                </p>
                <div className="btn-content">
                    <Link
                        to = {food.url}
                        className="btn"
                    >    
                        Get start it
                    </Link>
                </div>
            </div>
            <div className="col-lg-6">
                <img 
                    src={food.image}
                    alt={food.mainFoodCode}
                />
            </div>
        </div>
    )
}
