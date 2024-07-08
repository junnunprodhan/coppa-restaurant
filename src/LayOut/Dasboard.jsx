import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { AuthContext } from '../Provider/AuthProvider';
import { Outlet, useNavigate } from 'react-router-dom';
import Guest from '../Pages/Dashboard/Guest/Guest';
import Host from '../Pages/Dashboard/Host/Host';
import useIsAdmin from '../Hooks/useIsAdmin/useIsAdmin';
import BackPage from '../component/BackPage/BackPage';

const Dasboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const HandleToLogout = () => {
        logOut()
        navigate('/')
    }

    const [Admin] = useIsAdmin()
    const isAdmin = Admin.Admin

    return (
        <div className="drawer md:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <div className=' flex justify-end text-white bg-violet-400 px-3 py-3 md:hidden'>
                    <label htmlFor="my-drawer" className=" drawer-button md:hidden"><HiOutlineMenuAlt3 size={20} /></label>
                </div>
                <div className=' md:mx-8 my-10 mx-5'>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 md:w-[380px] min-h-full bg-gray-100 shadow-2xl text-black space-y-3">
                    {/* Sidebar content here */}
                    <div className=' bg-[#ea1b25] flex gap-6  md:w-[350px] justify-around h-44 items-center px-4'>
                        <div>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="  rounded-full md:w-16 md:h-16 w-12 h-12">
                                        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' space-y-3'>
                            <p className=' text-[16px] uppercase font-bold text-white font-[Rokkitt]'>{user?.displayName}</p>
                            <p className=' text-sm cursor-pointer hover:underline text-white '>{user?.email}</p>
                            <p onClick={HandleToLogout} className=' text-sm'><button className=' uppercase text-white bg-green-400 hover:bg-slate-400 px-5 py-2 rounded-sm text-sm font-bold flex items-center gap-1'><BsBoxArrowInRight />sing out</button></p>
                        </div>
                    </div>
                    {
                        isAdmin ? <Host /> : <Guest />
                    }
                    <hr />
                    <BackPage/>
                </ul>
            </div>
        </div>
    );
};

export default Dasboard;