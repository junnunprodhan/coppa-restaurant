import axios from 'axios';
import React from 'react';

const useBookConfirmed = async (id, status) => {
    const res = await axios.patch(`https://mazza-restaurent-server.vercel.app/book-table/confirm/${id}`, { status })
    return res.data

};

export default useBookConfirmed;