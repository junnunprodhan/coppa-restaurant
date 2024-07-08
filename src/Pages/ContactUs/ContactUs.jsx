import React from 'react';
import { BiPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md'
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("xleypzbe");
    if (state.succeeded) {
        toast.success('message send successful')
    }
    return (
        <div className=' mt-20 px-3'>
            <div>
                <p className=' font-bold text-4xl text-center text-black pt-5 pb-5'>CONTACT US</p>
            </div>
            <div className=' md:flex md:gap-6 md:px-9 mt-14'>
                <div className=' space-y-4 md:w-6/12'>
                    <p className=' md:text-4xl text-xl font-serif text-black font-bold'>Don't Be a Stander Just Say Hello.</p>
                    <p>At Mazza, we value your feedback, reservations, and inquiries. Feel free to reach out to us using the following contact methods:</p>
                    <div>
                        <p className='flex items-center gap-3 text-black'><BiPhoneCall className=' text-green-500' /><span className=' font-bold font-sans'>Phone:</span>( 378 ) 400-1234</p>
                        <p className='flex items-center gap-3 text-black '><MdOutlineMail className=' text-green-500' /><span className=' font-bold font-sans '>Email:</span>username@domain.com</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-xl border border-green-400 hover:bg-green-400 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-black'><FaGithub className='  ' /></p>
                        <p className='text-xl border border-green-400 hover:bg-green-400 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-black'><FaFacebook className='  ' /></p>
                        <p className='text-xl border border-green-400 hover:bg-green-400 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-black'><FaInstagram className='  ' /></p>
                        <p className='text-xl border border-green-400 hover:bg-green-400 w-8 h-8 rounded-full cursor-pointer flex items-center justify-center text-black'><FaTwitter className='  ' /></p>
                    </div>
                </div>



                <form className='md:w-6/12  mt-10 md:mt-0' onSubmit={handleSubmit}>
                    <div className=' space-y-6'>
                        <input id="text" name="name" type="text" placeholder="Full Name" className="bg-transparent text-black input w-full border border-green-300 py-8 rounded-full" />
                        <input type="email" name='email' placeholder="Email Address" className="bg-transparent text-black input w-full border border-green-300 py-8 rounded-full" />
                        <input type="number" name='number' placeholder="Phone Number" className="bg-transparent text-black input w-full border border-green-300 py-8 rounded-full" />
                        <input type="message" name='message' placeholder="Message" className="bg-transparent text-black input w-full border border-green-300 py-12 rounded-[20px]" />
                        <button className=' bg-green-400 px-6 py-2 rounded-full hover:bg-green-600 text-white uppercase font-bold mt-8'>Send Message</button>
                    </div>
                </form>
            </div>
            <Toaster position="top" />
        </div >
    );
};

export default ContactUs;