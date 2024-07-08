import TableTop from '../../../../component/TableTop/TableTop';
import toast from 'react-hot-toast';
import Empty from '../../../../Empty/Empty';
import useGetBookings from '../../../../Hooks/useGetBookings/useGetBookings';

const ManageBooking = () => {
    const [booking, refetch] = useGetBookings()

    const HandleToTrue = (id) => {

    }
    const HandleToFalse = (id) => {
        fetch(`https://mazza-restaurent-server.vercel.app/booking/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(data => {
                toast.success('Booking deleted successful')
                refetch()
            })
    }

    return (
        booking.length > 0 ? <>
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
                                <th>User-Email</th>
                                <th>Action</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                booking.map((single, index) => <TableTop HandleToTrue={HandleToTrue} HandleToFalse={HandleToFalse} single={single} index={index} key={index} Cancel={'Delete'} />)
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
                <div className=' '>
                    {
                        booking.map((product) => <TableTop HandleToFalse={HandleToFalse} HandleToTrue={HandleToTrue} product={product} Cancel={'delete'} />)
                    }
                </div>
            </div>
        </> : <Empty path={'/'} />
    );
};

export default ManageBooking;