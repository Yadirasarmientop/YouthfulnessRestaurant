import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AboutUsScreen } from '../components/aboutUs/AboutUsScreen';
import { ContactScreen } from '../components/contact/ContactScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { ServicesScreen } from '../components/services/ServicesScreen';
import { TestimonialsScreen } from '../components/testimonials/TestimonialsScreen';
import { NavBar} from '../components/ui/NavBar';


export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path='/aboutus' component={AboutUsScreen}/> 
                    <Route exact path='/services' component={ServicesScreen}/> 
                    <Route exact path='/testimonials' component={TestimonialsScreen}/> 
                    <Route exact path='/contact' component={ContactScreen}/> 
                </Switch>
            </div>
        </>
    )
}
