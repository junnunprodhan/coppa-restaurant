import React, { useEffect, useState } from 'react';
import ShopCart from '../../component/ShopCart/ShopCart';
import useProduct from '../../Hooks/useProduct/useProduct';
const Shop = () => {
    const [recipes,setRecipe] = useState([])
    useEffect(() => {
        useProduct().then(data => setRecipe(data))
    },[])
    return (
        <div className=' mt-20 text-black pt-10'>
            <div className=' text-center md:w-[600px] mx-auto px-3'>
                <p className=' text-4xl font-serif'>Our Shop</p>
                <p>Welcome to Gourmet Delights mazza, where culinary artistry meets a cozy dining experience. Our restaurant is a celebration of flavors, combining the best of international cuisines to create a unique and unforgettable dining adventure</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:mx-10 mx-3 gap-10 mt-16'>
                  {
                    recipes.map((recipe,index) => <ShopCart recipe={recipe} key={index
                    }/>)
                  }
            </div>
        </div>
    );
};

export default Shop;