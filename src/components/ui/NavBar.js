import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../header/header.css';

export const NavBar = () => {

    const click = ()=>{};
    return (
        <header>
              
            <div className="logo-holder">
                <div className="logo">
                <img src="/LogoImg/logoH.svg" alt="YOUTHFULNESS" />
                <h1>Youthfulness</h1>
                </div>
            </div>
            
            <div className="nav-navbar-collapse">
                <div className="nav-navbar">
                    
                        <NavLink 
                            exact to="/home" 
                            activeClassName="active"
                            className="nav-link"
                        >
                            HOME
                        </NavLink>
                    
                        <NavLink 
                            exact to="/aboutus" 
                            activeClassName="active"
                            className="nav-link"
                        >
                            ABOUT US
                        </NavLink>
                   
                        <NavLink 
                            exact to="/services" 
                            activeClassName="active"
                            className="nav-link"
                        >
                            SERVICES
                        </NavLink>
                    
                        <NavLink 
                            exact to="/testimonials" 
                            activeClassName="active"
                            className="nav-link"
                        >
                            TESTIMONIALS
                        </NavLink>
                    
                        <NavLink 
                            exact to="/contact"
                            activeClassName="active"
                            className="nav-link"
                        >
                            CONTACT
                        </NavLink>
                </div>
            </div>
            
        </header>
    )
}
