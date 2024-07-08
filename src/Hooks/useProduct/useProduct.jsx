import axios from 'axios';

const useProduct = async () => {
    const res = await axios.get('https://mazza-restaurent-server.vercel.app/product')
    return res.data
};

export default useProduct;