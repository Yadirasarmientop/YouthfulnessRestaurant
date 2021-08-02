import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './sectionmenu.css';

export const BlackSection = ({food}) => {

   

    return (
      <div className="row">
              <div className="col-lg-6">
                  <img 
                      src={food.image} 
                      alt={food.mainFoodCode}
                  />
              </div>
              <div className="col-lg-6 ">
                  <div className="titles1">
                  {food.mainFoodCode} 
                  <hr/>
                  </div>
                  
                  <p className="paragraph">
                  {food.description}
                  </p>
                  <div className="btn-content">
                      <Link
                          to ={food.url}
                          className="btn"
                      >    
                          Get start it
                      </Link>
                  </div>
              </div>
              
          </div>
    )
}
