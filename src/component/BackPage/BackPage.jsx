import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackPage = () => {
    return (
        <div>
            <ul className=' text-lg uppercase'>
                <Link to={'/'}> <div className={`flex items-center`}>
                    <FaHome size={13} />
                    <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                    >
                        Home
                    </li>
                </div></Link>
                <Link to={'/shop'}> <div className={`flex items-center`}>
                    <AiOutlineShoppingCart size={13} />
                    <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                    >
                        Shop
                    </li>
                </div></Link>
            </ul>
        </div>
    );
};

export default BackPage;