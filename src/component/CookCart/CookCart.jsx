import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CookCart = ({ cookMen }) => {
    return (
        <div className='flex bg-slate-100 w-full py-10 gap-5 text-black shadow-2xl '>
           <div className=''>
              <img className='w-80' src={cookMen?.img} alt="" />
           </div>
           <div className=' mt-4 space-y-3'>
             <p>{cookMen?.totalrecipe}</p>
             <p className=' font-bold text-3xl'>{cookMen?.title}</p>
             <p className=' w-10 h-10 hover:bg-green-400 flex items-center justify-center rounded-full   border border-green-300'><FaArrowRight/></p>
           </div>
        </div>
    );
};

export default CookCart;