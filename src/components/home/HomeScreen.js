import React from 'react';
import { SectionBanner } from './sectionBanner/SectionBanner';
import { WhiteSection } from './sectionMenu/WhiteSection';
import { SectionMenu } from './sectionMenu/SectionMenu';
import './sectionMenu/sectionmenu.css';

export const HomeScreen = () => {
   

    return (
        <div className="container-fluid">
            <SectionBanner />
            <WhiteSection />
            <SectionMenu />
            <WhiteSection />
        </div>
    )
}
