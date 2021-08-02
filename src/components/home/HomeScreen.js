import React from 'react';
import { SectionBanner } from './sectionBanner/SectionBanner';
import { WhiteSection } from './sectionMenu/WhiteSection';
import './sectionMenu/sectionmenu.css';
import foods from '../../Data/FoodData.json'
import { BlackSection } from './sectionMenu/BlackSection';

export const HomeScreen = () => {

    const items = [];

    let isPar = false
    for (const food of foods) {
        if(isPar) {
            items.push(<BlackSection food={food} hasImages = {true} />)
            isPar = false
        } else {
            items.push(<WhiteSection food={food} hasImages = {false} />)
            isPar = true
        }
    }
   

    return (
        <div className="container-fluid">
            <SectionBanner />
            {items}
        </div>
    )
}
