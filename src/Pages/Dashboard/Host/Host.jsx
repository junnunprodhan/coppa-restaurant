import React, { useState } from 'react';
import { AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { FaSitemap, FaUsers } from 'react-icons/fa';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { TbBrandBooking } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Host = () => {

    const [activeLink, setActiveLink] = useState(localStorage.getItem('Host'));

    const handleLinkClick = (link) => {
        setActiveLink(link);
        localStorage.setItem('Host', link)
    };

    return (
        <ul className=' text-lg uppercase'>
            <Link to={'/dashboard/add-item'}> <div onClick={() => handleLinkClick('Add-Item')} className={`flex items-center ${activeLink === 'Add-Item' ? ' text-green-400' : ''}`}>
                <BiBook size={13} />
                <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                >
                    Add Item
                </li>
            </div></Link>
            <Link to={'/dashboard/all-user'}> <div onClick={() => handleLinkClick('Manage-All-User')} className={`flex items-center ${activeLink === 'Manage-All-User' ? ' text-green-400' : ''}`}>
                <FaUsers size={13} />
                <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                >
                    All user
                </li>
            </div></Link>
            <Link to={'/dashboard/manage-booking'}> <div onClick={() => handleLinkClick('Manage-booking')} className={`flex items-center ${activeLink === 'Manage-booking' ? ' text-green-400' : ''}`}>
                <TbBrandBooking size={13} />
                <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                >
                    Manage Bookings
                </li>
            </div></Link>
            <Link to={'/dashboard/manage-order'}> <div onClick={() => handleLinkClick('Manage-Order')} className={`flex items-center ${activeLink === 'Manage-Order' ? ' text-green-400' : ''}`}>
                <TbBrandBooking size={13} />
                <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                >
                    Manage Order
                </li>
            </div></Link>
            <Link to={'/dashboard/manage-all-item'}> <div onClick={() => handleLinkClick('Manage-All-Item')} className={`flex items-center ${activeLink === 'Manage-All-Item' ? ' text-green-400' : ''}`}>
                <FaSitemap size={13} />
                <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                >
                    Manage All-item
                </li>
            </div></Link>
            <Link to={'/dashboard/payment-history'}> <div onClick={() => handleLinkClick('Payment-History')} className={`flex items-center ${activeLink === 'Payment-History' ? ' text-green-400' : ''}`}>
                <FaMoneyCheckDollar size={13} />
                <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

                >
                    Payment-History
                </li>
            </div></Link>
           
        </ul>
    );
};

export default Host;