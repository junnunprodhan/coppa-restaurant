import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='mt-20 text-center mb-16'>
            <p className=' text-green-400 text-xl mb-2'>{title}</p>
            <p className=' text-black text-4xl font-bold uppercase font-[system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji]'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;