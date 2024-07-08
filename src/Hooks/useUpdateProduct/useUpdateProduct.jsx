import React from 'react';
import axios from 'axios';

const useUpdateProduct = async (id, product) => {
    const res = await axios.put(`https://mazza-restaurent-server.vercel.app/product/update/${id}`, { product })
    return res.data
};

export default useUpdateProduct;