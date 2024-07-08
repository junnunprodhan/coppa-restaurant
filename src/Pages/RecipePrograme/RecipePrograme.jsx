import React from 'react';
import SectionTitle from '../Shere/SectionTitle/SectionTitle';
import programs from '../../../public/recipePrograms.json'
import RecipeProgramCart from '../../component/RecipeProgramCart/RecipeProgramCart';
const RecipePrograme = () => {
    return (
        <section>
            <SectionTitle title={'Best Articles & News'} subTitle={'RECIPES PROGRAMS'}/>
            <div className=' grid md:grid-cols-3  grid-cols-1 mx-auto'>
                {
                programs.map(program => <RecipeProgramCart program={program} key={program.id}/>)
                }
            </div>
        </section>
    );
};

export default RecipePrograme;