import React from 'react';
import SectionTitle from '../../Shere/SectionTitle/SectionTitle';
import RecipeCategory from '../../../component/RecipeCategory/RecipeCategory';

const Recipe = () => {
    return (
       <section className=''>
        <SectionTitle title={'What you Like in'} subTitle={'DELICIOUS RECIPE'}/>
        <div>
            <RecipeCategory/>
        </div>
       </section>
    );
};

export default Recipe;