import React, { useEffect, useState } from 'react';
import TableTop from '../../../../component/TableTop/TableTop';
import toast from 'react-hot-toast';
import Empty from '../../../../Empty/Empty';
import useAllItem from '../../../../Hooks/useAllItem/useAllItem';

const ManageALlitem = () => {

    const [products, refetch] = useAllItem()

    const HandleToFalse = (id) => {
        fetch(`https://mazza-restaurent-server.vercel.app/product/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(data => {
                toast.success('Product deleted successful')
                refetch()
            })
    }

    const HandleToTrue = (id) => {
    }

    return (
        products.length > 0 ? <>
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
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                products.map((single, index) => <TableTop single={single} index={index} key={index} HandleToTrue={HandleToTrue} HandleToFalse={HandleToFalse} Cancel={'Delete'} Admin={'Update'} />)
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
                <div className=''>
                    {
                        products.map((product, index) => <TableTop HandleToFalse={HandleToFalse} product={product} index={index} key={index} Cancel={'Delete'} />)
                    }
                </div>
            </div>
        </> : <Empty path={'/'} />
    );
};

export default ManageALlitem;