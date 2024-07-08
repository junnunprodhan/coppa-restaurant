import React, { useContext, useEffect, useState } from 'react';
import MyBookTable from './MyBookTable';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Empty from '../../../../Empty/Empty';
import axios from 'axios';
import toast from 'react-hot-toast';
import useBook from '../../../../Hooks/useBook/useBook';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';

const MyBook = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const [book,refetch] = useBook(user?.email)



    const HandleToBookDelete = (id) => {
        axiosSecure.delete(`/book-table/${id}`)
            .then(data => {
                toast.success('book-table deleted successful')
                refetch()
            })
    }
    return (
        book.length > 0 ? <>
            <div className=' hidden md:block'>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        #
                                    </label>
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Person</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                book.map((single, index) => <MyBookTable HandleToBookDelete={HandleToBookDelete} single={single} index={index} key={index} Admin={'Admin'} Cancel={'Cancel'} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=' md:hidden h-screen'>
                <div className=' flex justify-between bg-gray-100 w-full px-3 text-black py-1 text-xs'>
                    <p>Book-Type</p>
                    <p>Person</p>
                    <p>Date</p>
                    <p>Action</p>
                </div>
                <div className=''>
                    {
                        book.map((product) => <MyBookTable HandleToBookDelete={HandleToBookDelete} product={product} Admin={'Admin'} />)
                    }
                </div>
            </div>
        </> : <Empty path={'/'} />
    );
};

export default MyBook;