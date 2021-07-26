import React from 'react';
import { Link } from 'react-router-dom';
import './sectionmenu.css';

export const BlackSection = () => {
    return (
        <div className="row">
               <div className="col-lg-6">
                    <img 
                        src="/youthfulness/almuerzo.jpg" 
                        alt="Lunches"
                    />
                </div>
                <div className="col-lg-6 ">
                    <div className="titles1">
                    Lunches 
                    <hr/>
                    </div>
                    
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipis cing elit.
                    </p>
                    <div className="btn-content">
                        <Link
                            to ="/lunches"
                            className="btn"
                        >    
                            Get start it
                        </Link>
                    </div>
                </div>
                
            </div>
    )
}
