import axios from 'axios';
import React from 'react';

const usePostP = async(product) => {
  const res = await  axios.post('https://mazza-restaurent-server.vercel.app/product',{product})
  return res.data
};

export default usePostP;
