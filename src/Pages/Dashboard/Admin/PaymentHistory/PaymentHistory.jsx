import TableTop from '../../../../component/TableTop/TableTop';
import Empty from '../../../../Empty/Empty';
import useAdminPayment from '../../../../Hooks/useAdminPayment/useAdminPayment';

const PaymentHistory = () => {
    const [payment] = useAdminPayment()

    const HandleToFalse = (id) => {

    }
    const HandleToTrue = (id) => {

    }

    return (
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
                                <th>User-Name</th>
                                <th>TransactionId</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                payment.map((single, index) => <TableTop HandleToTrue={HandleToTrue} HandleToFalse={HandleToFalse} single={single} index={index} key={index} Cancel={'Delete'} Confirm={'BookingConfirm'} Admin={'Confirm'} payment={'payment'} />)
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
                        payment.map((product) => <TableTop HandleToFalse={HandleToFalse} HandleToTrue={HandleToTrue} product={product} Admin={'Confirm'} payment={'payment'} />)
                    }
                </div>
            </div>
        </> : <Empty path={'/'} />
    );
};

export default PaymentHistory;