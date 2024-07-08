import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { GiCogLock } from 'react-icons/gi';

const useIsAdmin = () => {
    const { user } = useContext(AuthContext)
    // const res = await axios.get(`https://mazza-restaurent-server.vercel.app/user/admin/${user?.email}`)
    // return res.data
    const [loading,setLoading] = useState(false)
    const { data: isAdmin = [], isLoading } = useQuery({
        queryKey: ['/user/admin', user?.email],
        queryFn: async () => {
            setLoading(true)
            const res = await axios.get(`https://mazza-restaurent-server.vercel.app/user/admin/${user?.email}`)
            setLoading(false)
            return res.data
        }
    })
    return [isAdmin, isLoading]
};

export default useIsAdmin;