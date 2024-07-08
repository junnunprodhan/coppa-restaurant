import React from 'react';
import { Link } from 'react-router-dom'

const BookAdminTable = ({ HandleToBookDelete, HandleToBookConfirm, single, index, product }) => {
    const BookConfirmed = single?.Confirmed
    return (
        <>
            <tr className=''>
                <td >
                    <label className=' hidden md:block'>
                        {index}
                    </label>
                </td>

                <td className=' text-xs'>{single?.guest?.name}</td>
                <td className=' text-xs'>{single?.guest?.email}</td>
                <td className=' text-xs'>{single?.persons}</td>
                <td className=' text-xs'>{single?.bookType}</td>
                <td className=' text-xs'>{single?.date}</td>
                <td className=' text-xs'><button onClick={() => HandleToBookDelete(single?._id)}><p className=' bg-red-200 px-4 rounded-full text-green hover:bg-red-300 cursor-pointer hidden md:block'>Delete</p></button></td>
                {
                    BookConfirmed ? <td><p className=' text-green-200 font-bold'>Confirm Success</p></td> : <td><Link><button onClick={() => HandleToBookConfirm(single?._id)}><p className=' bg-green-200 px-4 rounded-full text-white  hover:bg-green-300 cursor-pointer hidden md:block'>Confirm</p></button></Link></td>
                }



            </tr>
            <div className=' md:hidden mt-5'>
                <div className='flex justify-between items-center'>
                    <p className=' text-xs'>{product?.bookType}</p>
                    <p className=' text-xs'>{product?.persons}</p>
                    <p className=' text-xs'>{product?.date}</p>
                    <button onClick={() => HandleToBookDelete(product?._id)}><p className=' bg-red-200 px-4 rounded-full text-green hover:bg-red-300 cursor-pointer'>Delete</p></button>
                </div>
            </div>
        </>
    );
};

export default BookAdminTable;