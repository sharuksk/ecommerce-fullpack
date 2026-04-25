import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="my-10 mt-40 px-6 text-sm">
      <div className="grid sm:grid-cols-[2fr_1fr_1fr] gap-14">
        {/* Left Section */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
          Forever is your go-to destination for trendsetting fashion and lifestyle essentials. We’re committed to quality, style, and seamless shopping experiences.
          </p>
        </div>

        {/* Middle Section - Company */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section - Get in Touch */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9535714280</li>
            <li>admin@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center '>Copyright 2025@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
