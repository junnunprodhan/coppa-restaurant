import React from 'react';
import axios from 'axios'

const useSingleProduct = async (id) => {
    const res = await axios.get(`https://mazza-restaurent-server.vercel.app/product-single/${id}`)
    return res.data
};

export default useSingleProduct;