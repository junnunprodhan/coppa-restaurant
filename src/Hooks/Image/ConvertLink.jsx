import React from 'react';
const token = import.meta.env.VITE_UP_Token
const ConvertLink = async(image) => {
    const Host_image = `https://api.imgbb.com/1/upload?key=${token}`
    const formData = new FormData()
    formData.append("image", image)
    const res = await fetch(Host_image,{
        method:"POST",
        body: formData,
    })
    const data = res.json()
    return data
};

export default ConvertLink;