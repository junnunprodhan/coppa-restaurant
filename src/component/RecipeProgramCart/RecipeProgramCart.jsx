import React from 'react';
import { FaComment } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { Link } from 'react-router-dom'

const RecipeProgramCart = ({ program }) => {
    return (
        <div className=' mx-auto px-3'>
            <div>
                <img className=' h-48' src={program?.img} alt="" />
            </div>
            <div className=' bg-slate-100 shadow-2xl md:w-80 w-72 mx-auto h-64 px-3 relative -top-11'>
                <p className=' font-bold text-green-400 font-mono cursor-pointer pt-3'>{program.date}</p>
                <p className=' text-2xl w-60 text-black font-serif font-bold'>{program.title}</p>
                <p className=' mt-4 text-black font-serif'>{program.description.slice(0, 150)} <Link className=' text-green-400' to={'/'}>learn more</Link></p>

            </div>
            <div className='flex justify-between bg-stone-800 py-3 px-3 md:w-80 w-72 mx-auto relative -top-11 text-white'>
                <p className='flex items-center gap-2 cursor-pointer'><FaComment/> No Comment</p>
                <p className='flex items-center gap-2 cursor-pointer'><AiOutlineLike/> 22 Like</p>
            </div>
        </div>
    );
};

export default RecipeProgramCart;