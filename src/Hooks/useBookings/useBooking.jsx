import React from 'react';
import axios from 'axios';

const useBooking = async (booking) => {
    console.log(booking)
    const res = await axios.post('https://mazza-restaurent-server.vercel.app/booking', { booking })
    return res.data;
};

export default useBooking;


