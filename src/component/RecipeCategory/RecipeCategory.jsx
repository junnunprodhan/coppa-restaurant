import { LiaCloudMeatballSolid, LiaFishSolid } from 'react-icons/lia';
import { LuDessert } from 'react-icons/lu';
import { GiSwapBag } from 'react-icons/gi';
import { PiBowlFoodFill } from 'react-icons/pi';
import items from '../../../public/recipeCategory'
import { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';

const RecipeCategory = () => {
    const [item, setItem] = useState([])
    const HandleToCategory = (category) => {
        const item = items.find(item => item.category == category)
        setItem(item)
    }
    useEffect(() => {
        const ctg = items.find(item => item.category == "Fish")
        setItem(ctg)
    }, [])

    return (
        <div className=' flex justify-center'>
            <div className=''>
                <div className=' flex'>
                    <div className='md:flex gap-10 space-y-8 md:space-y-0  justify-center text-black text-xl mx-auto'>
                        <div onClick={() => HandleToCategory('Fish')} className=' hover:bg-green-400 w-24 rounded-md cursor-pointer text-center py-3'>
                            <LiaFishSolid className=' mx-auto' size={40} />
                            <p>Fish</p>
                        </div>
                        <div onClick={() => HandleToCategory('Meat')} className=' hover:bg-green-400 w-24 rounded-md cursor-pointer text-center py-3'>
                            <LiaCloudMeatballSolid className=' mx-auto' size={40} />
                            <p>Meat</p>
                        </div>
                        <div onClick={() => HandleToCategory('Dessert')} className=' hover:bg-green-400 w-24 rounded-md cursor-pointer text-center py-3'>
                            <LuDessert className=' mx-auto' size={40} />
                            <p>Dessert</p>
                        </div>
                        <div onClick={() => HandleToCategory('Vegetable')} className=' hover:bg-green-400 w-24 rounded-md cursor-pointer text-center py-3'>
                            <GiSwapBag className=' mx-auto' size={40} />
                            <p>Vegetable</p>
                        </div>
                        <div onClick={() => HandleToCategory('Pastas')} className=' hover:bg-green-400 w-24 rounded-md cursor-pointer text-center py-3'>
                            <PiBowlFoodFill className=' mx-auto' size={40} />
                            <p>Pastas</p>
                        </div>
                    </div>
                </div>
                <div>
                    <CategoryItem item={item} />
                </div>
            </div>
        </div>
    );
};

export default RecipeCategory;