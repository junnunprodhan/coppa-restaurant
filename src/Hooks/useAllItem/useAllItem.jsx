import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAllItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { data: product = [], refetch } = useQuery({
        queryKey: ['/user', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/product')
            return res.data
        }
    })
    return [product, refetch]
};

export default useAllItem;