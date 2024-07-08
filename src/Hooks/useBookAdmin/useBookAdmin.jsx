import axios from 'axios';
import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useBookAdmin = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { data: book = [], refetch } = useQuery({
        queryKey: ['/user', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/book-table')
            return res.data
        }
    })
    return [book, refetch]
};

export default useBookAdmin;