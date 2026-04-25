import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      {/* ABOUT US Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Us" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to Forever, where we bring the best products to your doorstep with a focus on quality, convenience, and customer satisfaction. We are committed to making every purchase a seamless and enjoyable experience.
          </p>
          <p>
            At Forever, we are passionate about offering products that cater to all your needs, ensuring every item is crafted with the utmost care and attention to detail. Our team works hard to provide a personalized shopping experience for each of our customers.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to deliver high-quality products that enhance your lifestyle, while maintaining a strong commitment to sustainability and ethical practices. We aim to provide a seamless shopping experience that keeps you coming back for more.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Side-by-side layout for benefits */}
      <div className='flex flex-col sm:flex-row justify-between gap-8'>
        
        {/* Quality Assurance */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 w-full sm:w-1/3'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We take pride in offering products that meet the highest standards of quality. Our rigorous quality control processes ensure that every item we sell is tested for durability and reliability.
          </p>
        </div>
        
        {/* Convenience */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 w-full sm:w-1/3'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Shopping with us is easy and hassle-free. With a user-friendly website, fast checkout, and efficient shipping options, we ensure that you can shop with confidence and convenience from the comfort of your home.
          </p>
        </div>
        
        {/* Exceptional Customer Service */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 w-full sm:w-1/3'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our customer service team is always here to assist you. Whether you need help finding a product, tracking an order, or have any inquiries, we are dedicated to providing quick and friendly support to ensure your satisfaction.
          </p>
        </div>
        
      </div>

      {/* Newsletter Section (moved a bit further down) */}
      <div className="mt-16">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
