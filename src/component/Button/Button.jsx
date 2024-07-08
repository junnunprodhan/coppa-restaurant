import React from 'react';

const Button = ({value}) => {
    return (
        <div className='mt-6'>
            <button className=' bg-green-400 hover:bg-green-500 px-8 py-2 rounded-full font-bold text-white'>{value}</button>
        </div>
    );
};

export default Button;