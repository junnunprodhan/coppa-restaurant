import axios from 'axios';
import React from 'react';

const useConfirmed = async (id, status) => {
    const res = await axios.patch(`https://mazza-restaurent-server.vercel.app/booking/confirmed/${id}`, { status })
    return res.data
};

export default useConfirmed;