import React from 'react';
import { FaCheck } from 'react-icons/fa'
import Button from '../Button/Button';

const CategoryItem = ({ item }) => {
    const Ingredients = item.Ingredients
    return (
        <div className=' bg-[#293e6b] md:w-[1200px] md:h-[500px] md:px-14 py-14 min-w-full px-3 font-[Rokkitt",serif] md:flex justify-around items-center'>
            <div className=' space-y-2'>
                <p className=' md:text-4xl text-3xl font-bold text-white md:w-96'>{item.title}</p>
                <p className=' md:text-xl font-bold text-white'>Recipe by: James Smith</p>
                <p className=' text-2xl font-bold text-white'>Ingredients</p>
                <div className=' md:w-[500px]'>
                {
                    Ingredients?.map(Ingredient => {
                        return (
                            <div key={Ingredient.no} className=' md:grid md:grid-cols-2 space-y-4 md:space-y-2 mt-4 text-white font-bold '>
                                <p className='flex items-center gap-2'><FaCheck className=' text-green-400 font-bold' />{Ingredient?.a}</p>
                                <p className='flex items-center gap-2'><FaCheck className=' text-green-400 font-bold' />{Ingredient?.b}</p>
                                <p className='flex items-center gap-2'><FaCheck className=' text-green-400 font-bold' />{Ingredient?.c}</p>
                                <p className='flex items-center gap-2'><FaCheck className=' text-green-400 font-bold' />{Ingredient?.d}</p>
                                <p className='flex items-center gap-2'><FaCheck className=' text-green-400 font-bold' />{Ingredient?.e}</p>
                                <p className='flex items-center gap-2'><FaCheck className=' text-green-400 font-bold' />{Ingredient?.f}</p>
                            </div>
                        )
                    })
                }
                <Button value={'MADE IT'}/>
            </div>
            </div>
            <div className=' mt-5 md:mt-0'>
                <img className=' rounded-full w-[310px] h-[310px]' src={item?.img} alt="" />
            </div>
            
        </div>
    );
};

export default CategoryItem;