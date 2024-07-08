import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <section>
            <div className=' text-center'>
                <p className=' text-black text-4xl font-serif' >Special Ofers For New Subscribers</p>
                <p className=' mt-3 text-xl'>ubscribe to our newsletters now and stay up to date with new collections</p>
            </div>
            <div className='flex justify-center mt-10'>
                <input className=' bg-transparent border border-rose-200 md:w-[600px] px-3 py-3 w-full md:py-5 outline-none rounded-full text-black' placeholder='Enter your email address' type="input" name="" id="" />
                <FaArrowCircleRight className=' relative right-12 top-2 md:top-4 rounded-full bg-black w-8 h-8 cursor-pointer'/>
            </div>
        </section>
    );
};

export default Subscribe;