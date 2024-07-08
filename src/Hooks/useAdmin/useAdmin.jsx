import axios from 'axios';
import React from 'react';

const useAdmin = async (id, Admin) => {
    console.log(id, Admin)
    const res = await axios.patch(`https://mazza-restaurent-server.vercel.app/user/admin/${id}`,{Admin})
    return res.data;
};

export default useAdmin;
