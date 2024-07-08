import { useContext } from "react";
import useIsAdmin from "../../Hooks/useIsAdmin/useIsAdmin";
import { AuthContext } from "../../Provider/AuthProvider";


const UserTable = ({ HandleToTrue, HandleToFalse, single, index, Cancel, product, Admin }) => {
    const { user } = useContext(AuthContext)

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
                                <img src={single?.photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{single?.name}</td>
                {
                    single?.email ? <td className=''>{single?.email}</td> : <td className=' font-bold hidden md:block'>${single?.price}</td>
                }
                <td className=''>
                    <button disabled={user?.email == single?.email} onClick={() => HandleToFalse(single?._id)}>
                        <p className=" bg-red-200 hover:bg-red-300 uppercase font-bold text-white shadow-2xl rounded-full text-center px-4 py-[2px] hidden md:block">{Cancel}</p>
                    </button>
                </td>
                {
                    Admin !== undefined ? <button disabled={user?.email == single?.email || single?.Admin == true}>
                        <td onClick={() => HandleToTrue(single?._id)} className=''>
                            <p className=" hidden md:block bg-green-200 uppercase font-bold hover:bg-green-300  text-white shadow-2xl rounded-full text-center px-4 py-[2px]">{Admin}</p>
                        </td>
                    </button> : ''
                }
            </tr>
            <div className=' md:hidden mt-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="  rounded-full w-12 h-12">
                                    <img src={product?.photo} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>{product?.name}</p>
                    <button disabled={user?.email == product?.email || product?.Admin == true}> <p onClick={() => HandleToTrue(product?._id)} className=' bg-green-300 h-5 uppercase text-[13px] px-3 text-center text-white  hover:bg-green-400 rounded-full'>{Admin}</p></button>
                </div>
            </div>
        </>
    );
};

export default UserTable;