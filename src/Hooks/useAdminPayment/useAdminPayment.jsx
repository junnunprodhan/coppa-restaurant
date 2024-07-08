import axios from 'axios';
import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdminPayment = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { data: payment = [], refetch } = useQuery({
        queryKey: ['/admin-payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-payment')
            return res.data
        }
    })
    return [payment, refetch]
};

export default useAdminPayment;