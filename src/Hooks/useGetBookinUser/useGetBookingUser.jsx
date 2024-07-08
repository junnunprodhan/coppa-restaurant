import axios from 'axios';
import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useGetBookingUser = (email) => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['/booking', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${email}`)
            return res.data
        }
    })
    return [bookings, refetch]

};

export default useGetBookingUser