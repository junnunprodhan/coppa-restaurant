import axios from 'axios'

const useGetBookingSingle = async (id) => {
   const res = await axios.get(`https://mazza-restaurent-server.vercel.app/bookingsGet/${id}`)
   return res.data;
};

export default useGetBookingSingle;