import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { foods } from "../../../Data/FoodData";
import './sectionmenu.css';

export const BlackSection = () => {

    const [mainFood, setMainFood] = useState([]);

    useEffect(() => {
      setMainFood(foods);
    }, []);

    const {id, image, mainFoodCode,url} = mainFood;

    return (
        <div className="row">
               <div className="col-lg-6">
                    <img 
                        src={image} 
                        alt={mainFoodCode}
                    />
                </div>
                <div className="col-lg-6 ">
                    <div className="titles1">
                    {mainFoodCode} 
                    <hr/>
                    </div>
                    
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipis cing elit.
                    </p>
                    <div className="btn-content">
                        <Link
                            to ={url}
                            className="btn"
                        >    
                            Get start it
                        </Link>
                    </div>
                </div>
                
            </div>
    )
}
