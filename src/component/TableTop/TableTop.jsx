import { Link } from 'react-router-dom';
import { GiConfirmed } from 'react-icons/gi';

const TableTop = ({ HandleToTrue, HandleToFalse, single, index, Cancel, product, Admin
    , booking, Confirm, payment, bookingConfirm }) => {
    const confirmed = single?.Confirmed;
    const productConfirmed = product?.Confirmed;
   
    return (
        <>
            <tr className=' font-mono font-bold'>
                <td >
                    <label className=' hidden md:block'>
                        {index}
                    </label>
                </td>
                {
                    payment !== undefined ? '' : <td className=' hidden md:block'>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle rounded-full w-12 h-12">
                                    <img src={single?.photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                }
                {
                    payment !== undefined ? <td>{single?.productName}</td> : <td>{single?.name}</td>
                }
                {
                    booking == undefined ? '' : <td>${single?.price}</td>
                }
                {
                    booking == undefined ? <> {single?.email ? <td className=''>{single?.email}</td> : <td className=' font-bold'>{single?.Guest?.email}</td>}</> : ''
                }
                {
                    payment !== undefined ? <td>{single?.transactionId}</td> : <>
                        {
                            confirmed !== undefined ? <td><p className='flex items-center text-green-200 font-bold'><GiConfirmed /> Confirmed</p></td> : <td className=''>
                                <button onClick={() => HandleToFalse(single?._id)}>
                                    <p className=" bg-red-200 hover:bg-red-300 uppercase font-bold text-white shadow-2xl rounded-full text-center px-4 py-[2px] hidden md:block">{Cancel}</p>
                                </button>
                            </td>
                        }
                    </>
                }
                {
                    payment !== undefined ? <td className=' hidden md:block'>${single?.amount} USD</td> : <>
                        {
                            Confirm !== undefined ? <>
                                {
                                    confirmed !== undefined ? <td><p className='flex items-center text-green-200 font-bold'><GiConfirmed /> Confirmed</p></td> : <Link to={`/dashboard/checkout-payment/${single._id}`}><button>
                                        <td className=''>
                                            <p className=" hidden md:block bg-green-200 uppercase font-bold hover:bg-green-300  text-white shadow-2xl rounded-full text-center px-4 py-[2px]">{Admin}</p>
                                        </td>
                                    </button></Link>
                                }
                            </> :
                                <>
                                    {
                                        Admin !== undefined ? <Link to={`/dashboard/update-item/${single?._id}`}><button>
                                            <td onClick={() => HandleToTrue(single)} className=''>
                                                <p className=" hidden md:block bg-green-200 uppercase font-bold hover:bg-green-300  text-white shadow-2xl rounded-full text-center px-4 py-[2px]">{Admin}</p>
                                            </td>
                                        </button></Link> : <td className=''><p className='hidden md:block'>${single?.price}</p></td>
                                    }
                                </>
                        }
                    </>
                }
            </tr>
            <div className=' md:hidden mt-5 bg-white'>
                <div className='flex justify-between items-center'>
                    {
                        payment !== undefined ? <p className=' text-xs'>{product?.productName}</p> : <p><img className=' w-12 h-12 bg-red-300 rounded-full' src={product?.photo} alt='t' /></p>
                    }
                    {
                        payment !== undefined ? <p className=' text-xs'>{product?.email}</p> : <p>{product?.name}</p>
                    }
                    {
                        bookingConfirm !== undefined ? <>{productConfirmed !== undefined ? <td><p className='flex items-center text-green-200 font-bold'><GiConfirmed /> Confirmed</p></td> : <Link className='bg-green-300 h-5 uppercase text-[13px] px-3 text-center text-white  hover:bg-green-400 rounded-full' to={`/dashboard/checkout-payment/${product._id}`}>Confirm</Link>}</> : <>
                            {
                                payment !== undefined ? <p className=' text-xs '>${product?.amount} USD</p> : <>
                                    {
                                        Cancel == undefined ? <button > <p onClick={() => HandleToTrue(product?._id)} className=' bg-green-300 h-5 uppercase text-[13px] px-3 text-center text-white  hover:bg-green-400 rounded-full'>{Admin}</p></button> : <button > <p onClick={() => HandleToFalse(product?._id)} className=' bg-green-300 h-5 uppercase text-[13px] px-3 text-center text-white  hover:bg-green-400 rounded-full'>{Cancel}</p></button>
                                    }
                                </>
                            }
                        </>

                    }

                </div>
            </div>
        </>
    );
};

export default TableTop;