import React from 'react';
import axios from 'axios'

const useUser = (user) => {
    const res = axios.post('https://mazza-restaurent-server.vercel.app/user', { user })
    return res.data
};

export default useUser;