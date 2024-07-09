import React, { useContext, useEffect, useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import useIsAdmin from '../../../Hooks/useIsAdmin/useIsAdmin';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const HandleToLogOut = () => {
        logOut()
        navigate('/login')
    }

    const [Admin] = useIsAdmin()
    const isAdmin = Admin.Admin;

    const Handle = (Host) => {
        localStorage.setItem(isAdmin ? 'Host' : 'Guest', Host)
    }

    return (
        <header className=' '>
            <nav className="container fixed bg-slate-500 z-50 text-white  md:flex items-center md:opacity-50   py-6  top-0 opacity-80">
                <div onClick={() => setMenuOpen(!menuOpen)} className='flex justify-between mx-4'>
                    <Link to="/" className="text-white font-bold text-lg uppercase md:ml-5">Coppa Restaurent</Link>
                    <small className=' md:hidden '>{menuOpen === true ? <FaTimes size={20} /> : <FaBars size={20} />}</small>
                </div>
                <div className="">
                    <ul className={`md:flex md:top-6 md:right-20 md:space-x-8 absolute ${menuOpen === true ? 'top-20 rounded-md pl-3 bg-slate-500 opacity-100 w-full pt-3 pb-5 space-y-5 z-10' : '-top-48'}`}>
                        <li><Link to="/" className=" text-white hover:text-gray-300 uppercase">HOME</Link></li>
                        <li><Link to="/shop" className=" text-white hover:text-gray-300 uppercase">OUR SHOP</Link></li>
                        <li><Link to="/about" className=" text-white hover:text-gray-300 uppercase">About Us</Link></li>
                        <li><Link to="/contact" className=" text-white hover:text-gray-300 uppercase">CONTACT US</Link></li>

                        {
                            user ? <>
                                <li><Link onClick={() => Handle(isAdmin ? 'Add-Item' : 'My-Booking')} to={isAdmin ? '/dashboard/add-item' : '/dashboard/my-booking'} className=" text-white hover:text-gray-300 uppercase">Dashboard</Link></li>
                                <button onClick={HandleToLogOut} className='uppercase  px-6 py-1 rounded-md bg-green-400 hover:bg-green-500'>LogOut</button>
                            </> : <div className='md:flex md:space-x-8 md:space-y-0 space-y-5'>
                                <li><Link to="/login" className=" text-white hover:text-gray-300 uppercase ">LOGIN</Link></li>
                            </div>

                        }

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
