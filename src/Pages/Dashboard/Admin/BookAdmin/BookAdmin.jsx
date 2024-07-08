import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Empty from '../../../../Empty/Empty';
import BookAdminTable from './BookAdminTable';
import useBookConfirmed from '../../../../Hooks/useBookConfirmed/useBookConfirmed';
import useBookAdmin from '../../../../Hooks/useBookAdmin/useBookAdmin';

const BookAdmin = () => {

    const [book, refetch] = useBookAdmin()

    const HandleToBookDelete = (id) => {
        axios.delete(`https://mazza-restaurent-server.vercel.app/book-table/${id}`)
            .then(data => {
                useBookConfirmed(id, false)
                    .then(data => {
                        toast.success('book-table deleted successful')
                        refetch()
                    })
            })
    }

    const HandleToBookConfirm = (id) => {
        useBookConfirmed(id, true)
            .then(data => {
                toast.success('Book-table confirmed successful')
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Person</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                book.map((single, index) => <BookAdminTable HandleToBookDelete={HandleToBookDelete} HandleToBookConfirm={HandleToBookConfirm} single={single} index={index} key={index} Admin={'Admin'} Cancel={'Cancel'} />)
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
                        book.map((product) => <BookAdminTable HandleToBookDelete={HandleToBookDelete} product={product} Admin={'Admin'} />)
                    }
                </div>
            </div>
        </> : <Empty path={'/'} />
    );
};

export default BookAdmin;