import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import TableTop from '../../../../component/TableTop/TableTop';
import toast from 'react-hot-toast';
import axios from 'axios';
import Empty from '../../../../Empty/Empty';
import useGetBookingUser from '../../../../Hooks/useGetBookinUser/useGetBookingUser';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';

const MyBooking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, refetch] = useGetBookingUser(user?.email)
    const [axiosSecure] = useAxiosSecure()
    const HandleToTrue = async (single) => {
        if (single) {
            const bookingConfirm = { category: single?.category, name: single?.name, photo: single?.photo, price: single?.price, recipeId: single?.recipeId, bookingId: single?._id, Host: single?.Host, Guest: single?.Guest }
            const res = await axios.post('https://mazza-restaurent-server.vercel.app/booking/confirm', { bookingConfirm })
            if (res?.data) {
                toast.success('Item booking confirm successful')
            }
        }
    }
    const HandleToFalse = (id) => {
        axiosSecure.delete(`/booking/${id}`)
            .then(data => {
                toast.success('booking deleted successful')
                refetch()
            })
    }
    return (
        <>
            {
                bookings.length > 0 ? <>
                    <div className=' hidden md:block'>
                        <div className="overflow-x-auto">
                            <table className="table ">
                                {/* head */}
                                <thead className=' font-bold'>
                                    <tr>
                                        <th>
                                            <label>
                                                #
                                            </label>
                                        </th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        bookings.map((single, index) => <TableTop HandleToTrue={HandleToTrue} HandleToFalse={HandleToFalse} single={single} index={index} key={index} Cancel={'Delete'} Confirm={'BookingConfirm'} Admin={'Confirm'} booking={'booking'} />)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                    <div className=' md:hidden '>
                        <div className=' flex justify-between bg-gray-100 w-full px-3 text-black py-1'>
                            <p>Photo</p>
                            <p>Name</p>
                            <p>Action</p>
                        </div>
                        <div className=' h-screen'>
                            {
                                bookings.map((product) => <TableTop HandleToFalse={HandleToFalse} HandleToTrue={HandleToTrue} product={product} Admin={'Confirm'} bookingConfirm={'wow'} />)
                            }
                        </div>
                    </div>
                </> : <Empty path={'/shop'} />
            }
        </>
    );
};

export default MyBooking;