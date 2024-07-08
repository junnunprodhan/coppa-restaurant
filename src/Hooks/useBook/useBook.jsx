import axios from 'axios';
import React, { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';


const useBook = (email) => {
   const [axiosSecure] = useAxiosSecure()
   const { user, loading } = useContext(AuthContext)
   // const res = await axiosSecure.get(`/book-table/${email}`)
   // return res.data
   const { data: book = [], refetch } = useQuery({
      queryKey: ['/book', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure.get(`/book-table/${email}`)
         return res.data
      }
   })
   return [book, refetch]
};

export default useBook;