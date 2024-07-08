import React from 'react';
import Slider from '../Slider/Slider';
import About from '../About/About';
import TodaySlider from '../TodayProduct/TodaySlider';
import RestaurentInvite from '../RestaurentInvite/RestaurentInvite';
import Recipe from '../Recipe/Recipe';
import Profesional from '../Profesional/Profesional';
import RecipePrograme from '../../RecipePrograme/RecipePrograme';
import Subscribe from '../Subscribe/Subscribe';
import HomeShop from '../HomeShop/HomeShop';

const Home = () => {
    return (
        <div>
            <Slider />
            <About />
            <TodaySlider />
            <HomeShop />
            <RestaurentInvite />
            <Recipe />
            <Profesional />
            <RecipePrograme />
            <Subscribe />
        </div>
    );
};

export default Home;