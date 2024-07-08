import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import TableTop from '../../../../component/TableTop/TableTop';
import Empty from '../../../../Empty/Empty';
import useUserPayment from '../../../../Hooks/useUserPayment/useUserPayment';

const UserPayment = () => {
    const { user } = useContext(AuthContext)
    const [payment] = useUserPayment(user?.email)

    const HandleToTrue = (id) => {

    }

    const HandleToFalse = (id) => {

    }

    return (
        <div>
            {
                payment.length > 0 ? <>
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
                                        <th>Food-Name</th>
                                        <th>Email</th>
                                        <th>TransactionId</th>
                                        <th>Amount</th>

                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        payment.map((single, index) => <TableTop HandleToTrue={HandleToTrue} HandleToFalse={HandleToFalse} single={single} index={index} key={index} Confirm={'BookingConfirm'} payment={'payment'} />)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>

                    <div className=' md:hidden '>
                        <div className=' flex justify-between bg-gray-100 w-full px-1 text-black py-1'>
                            <th>Food-Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                        </div>
                        <div className=' h-screen'>
                            {
                                payment.map((product) => <TableTop HandleToFalse={HandleToFalse} HandleToTrue={HandleToTrue} product={product} Admin={'Confirm'} payment={'payment'} />)
                            }
                        </div>
                    </div>
                </> : <Empty path={'/dashboard/my-booking'} />
            }
        </div>
    );
};

export default UserPayment;