import React, { useContext } from 'react';
import Button from '../../../component/Button/Button';
import { Link } from 'react-router-dom';
import useConfirmed from '../../../Hooks/useConfirmed/useConfirmed';
import { AuthContext } from '../../../Provider/AuthProvider';
import useIsAdmin from '../../../Hooks/useIsAdmin/useIsAdmin';
const img = "https://i.ibb.co/WyKSNBY/res.jpg"
const RestaurentInvite = () => {
    const { user } = useContext(AuthContext)
    const [Admin] = useIsAdmin()
    const isAdmin = Admin?.Admin
    return (
        <div className='md:flex gap-8  mt-20  bg-gray-100 px-4 py-6'>
            <div className=' md:w-6/12 text-black md:mt-16'>
                <p className=' text-4xl font-bold '>We Invite You To The <br /> Restaurant</p>
                <p className=' mt-2'>Indulge in an epicurean adventure at "The Culinary Haven," where flavors meet finesse. Join us for a memorable dining experience, a symphony of taste awaits. Reserve your table today for a night of culinary delight. We can't wait to welcome you!</p>
                <Link to={'/book'}> <button className='' disabled={!user || isAdmin}><Button value={'Book Now'} /></button> </Link>
            </div>
            <div className='mt-4 md:mt-0 md:w-6/12'>
                <img className=' rounded-md' src={img} alt="" />
            </div>
        </div>
    );
};

export default RestaurentInvite;