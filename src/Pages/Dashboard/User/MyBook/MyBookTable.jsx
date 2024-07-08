import React from 'react';

const MyBookTable = ({ HandleToBookDelete, single, index, product }) => {
    const BookConfirmed = single?.Confirmed
    return (
        <>
            <tr className=''>
                <td >
                    <label className=' hidden md:block'>
                        {index}
                    </label>
                </td>
                <td className=' hidden md:block'>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle rounded-full w-12 h-12">
                                <img src={single?.guest?.photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{single?.guest?.name}</td>
                <td>{single?.guest?.email}</td>
                <td>{single?.persons}</td>
                <td>{single?.bookType}</td>
                <td>{single?.date}</td>
                {
                    BookConfirmed ? <td><p className=' text-green-200'>Book Confirmed</p></td> : <td><button onClick={() => HandleToBookDelete(single?._id)}><p className=' bg-red-200 px-4 rounded-full text-green hover:bg-red-300 cursor-pointer hidden md:block'>Delete</p></button></td>
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

export default MyBookTable;