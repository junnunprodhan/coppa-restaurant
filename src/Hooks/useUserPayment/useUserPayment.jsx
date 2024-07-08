import axios from 'axios';
import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';

const useUserPayment = (email) => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { data: payment = [], refetch } = useQuery({
        queryKey: ['/payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-payment/${email}`)
            return res.data
        }
    })
    return [payment, refetch]
};

export default useUserPayment;