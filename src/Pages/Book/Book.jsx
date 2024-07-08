import React, { useContext, useState } from 'react';
import { GiCloakDagger } from 'react-icons/gi';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const Book = () => {
    const { user } = useContext(AuthContext)
    const [person, setPerson] = useState()
    const [time, setTime] = useState()
    const handleRestaurantChange = (event) => {
        setPerson(event.target.value)
    }
    const handleTime = (event) => {
        setTime(event.target.value)
    }


    const HandleToBooked = (event) => {
        event.preventDefault()
        const form = event.target
        const bookType = time;
        const persons = person;
        const date = form.date.value;
        const guest = { name: user?.displayName, email: user?.email, photo: user?.photoURL }
        const book = { bookType, persons, date, guest }
        axios.post('https://mazza-restaurent-server.vercel.app/book-table', { book })
            .then(data => {
                toast.success('table-book added successful')
            })
    }


    return (
        <form onSubmit={HandleToBooked}>
            <div className=' bg-slate-100 py-36 '>
                <div className=' flex justify-center items-center'>
                    <div className=" bg-slate-800 w-[600px] h-[600px] rounded-full">
                        <div className=''>
                            <p className=' mt-20 text-center font-mono text-3xl text-white'>Book A Table</p>
                            <select
                                onChange={handleTime}
                                value={time}
                                className="select w-10/12 mt-16 ml-12 bg-white border border-green-400 text-black rounded-sm font-mono">
                                <option disabled selected >Booking Type</option>
                                <option value={'BreackFast'}>BreackFast</option>
                                <option value={'BreackFast'}>Lance</option>
                                <option value={'Dinner'}>Dinner</option>
                            </select>
                            <select
                                onChange={handleRestaurantChange}
                                value={person}
                                className="select w-10/12 mt-7 ml-12 rounded-sm bg-white border border-green-400 text-black">
                                <option disabled selected>Number of people</option>
                                <option className='' value={'2 person'} >2 person</option>
                                <option className='' value={'3 person'} >3 person</option>
                                <option className='' value={'4 person'} >4 person</option>
                                <option className='' value={'5 person'} >5 person</option>
                                <option className='' value={'6 person'} >6 person</option>
                            </select>
                            <div className=' flex justify-center mt-7'>
                                <input className=' w-10/12 text-white border border-green-400 rounded-sm py-2 ' type="date" name="date" id="" />

                            </div>
                            <div className=' flex justify-center mt-9'>
                                <button className=' bg-green-400 hover:bg-green-500 text-white font-bold font-mono px-5 py-2 rounded-sm '>Book Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Book;