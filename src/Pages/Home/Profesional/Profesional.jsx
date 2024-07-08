import React from 'react';
import SectionTitle from '../../Shere/SectionTitle/SectionTitle';
import cookMens from '../../../../public/cooker.json'
import CookCart from '../../../component/CookCart/CookCart';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
const Profesional = () => {
    return (
        <section className='bg-gradient-to-r from-slate-50 to-transparent via-slate-200 py-5'>
            <SectionTitle title={'Expert and Professional'} subTitle={'TOP CHEF’S RECIPS'} />
            <div className=' grid md:grid-cols-3 gap-6 grid-cols-1 mx-5 '>
                {
                    cookMens.map(cookMen => <CookCart cookMen={cookMen} key={cookMen?.totalrecipe} />)
                }
            </div>
            <div className='mt-20 '>
                <p className='flex items-center md:text-3xl text-black gap-3 justify-center font-bold'><FiPhoneCall className='text-green-400' /> Waiting Your Call: ( 378 ) 400-1234</p>
                <div className='flex gap-5 justify-center mt-4 text-black'>
                    <p className=' w-10 h-10 hover:bg-green-400 flex items-center justify-center rounded-full   border border-green-300 '><FaGithub /></p>
                    <p className=' w-10 h-10 hover:bg-green-400 flex items-center justify-center rounded-full   border border-green-300'><FaFacebook /></p>
                    <p className=' w-10 h-10 hover:bg-green-400 flex items-center justify-center rounded-full   border border-green-300'><FaTwitter /></p>
                    <p className=' w-10 h-10 hover:bg-green-400 flex items-center justify-center rounded-full   border border-green-300'><FaInstagram /></p>
                </div>
            </div>
        </section>
    );
};

export default Profesional;