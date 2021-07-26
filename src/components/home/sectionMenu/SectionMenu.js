import React from 'react';
import { BlackSection } from './BlackSection';
import './sectionmenu.css';

export const SectionMenu = () => {
    return (
        <div className="section-message-1">
            <div className="section-overlay-top">
            <img 
                src="/youthfulness/SVG/Recurso2-2.svg" 
                alt="overlay"
                width="100%"
            />
            </div>
            <div className="section-overlay-bottom">
            <img 
                src="/youthfulness/SVG/Recurso2-1.svg" 
                alt="overlay"
                width="100%"
            /> 
            </div>
            <BlackSection />
        </div>
    )
}
