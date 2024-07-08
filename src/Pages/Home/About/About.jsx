import React from 'react';
import img from '../../../../public/pik.jpg'
import SectionTitle from '../../Shere/SectionTitle/SectionTitle';
import Button from '../../../component/Button/Button';

const About = () => {
    return (
        <section>
            <SectionTitle title={'Discover Our Story'} subTitle={'about'}/>
            <div className=' md:flex text-black space-y-4 gap-20 mx-2 md:mx-10 mt-10'>
                <div>
                    <img className=' rounded-full' src={img} alt="" />
                </div>
                <div className=' space-y-5 '>
                    <p className=' md:text-4xl md:w-[600px] text-2xl w-[320px] font-bold'>Chicken Kebabs with Roasted Red Onions.</p>
                    <p> Chicken kebabs with roasted red onions combine marinated chicken chunks and caramelized red onions on skewers, resulting in a flavorful and visually appealing dish. The tender, spice-infused chicken complements the sweet, tender onions, making it a delicious choice for any meal.</p>
                    <Button value={'Learn More'}/>
                </div>
                <div>

                </div>
            </div>
        </section>
    );
};

export default About;