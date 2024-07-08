import React, { useState } from 'react';
import { BiBook } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { Link } from 'react-router-dom'

function Navigation() {
  const [activeLink, setActiveLink] = useState(localStorage.getItem('Guest'));

  const handleLinkClick = (link) => {
    localStorage.setItem('Guest', link)
    setActiveLink(link)
  };
  return (
    <ul className=' text-lg uppercase'>
      <Link to={'/dashboard/my-booking'}> <div onClick={() => handleLinkClick('My-Booking')} className={`flex items-center ${activeLink === 'My-Booking' ? ' text-green-400' : ''}`}>
        <BiBook size={13} />
        <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

        >
          My Booking
        </li>
      </div></Link>
      <Link to={'/dashboard/my-order'}> <div onClick={() => handleLinkClick('My-order')} className={`flex items-center ${activeLink === 'My-order' ? ' text-green-400' : ''}`}>
        <AiOutlineShoppingCart size={13} />
        <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

        >
          My Order
        </li>
      </div></Link>
      <Link to={'/dashboard/user-payment'}> <div onClick={() => handleLinkClick('My-payment')} className={`flex items-center ${activeLink === 'My-payment' ? ' text-green-400' : ''}`}>
        <MdPayment size={13} />
        <li className={` rounded-md px-1 cursor-pointer py-1 text-[12px] font-[Poppins]`}

        >
          My payment
        </li>
      </div></Link>
      
    </ul>
  );
}

export default Navigation;
