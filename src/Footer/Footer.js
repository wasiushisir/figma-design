import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-screen md:h-[356px] bg-[#010203] mt-[20px]'>
            <div className='px-[29px] pt-[40px]'>
                <div className='space-y-4 md:flex justify-between items-start md:space-y-0'>
                    <div className=' md:w-[400px] '>
                        <div className='flex justify-start items-center space-x-1'>
                            <div className='space-y-1'>
                                <div className='h-[12px] w-[12px] bg-[#DAE3EA] rounded-[50%]'>

                                </div>
                                <div className='h-[12px] w-[12px] bg-[#DAE3EA] rounded-[50%]'>

                                </div>
                                

                            </div>
                            <div className='space-y-1'>

                                <div className='h-[12px] w-[12px] bg-[#DAE3EA] rounded-[50%]'>

                                </div>
                                <div className='h-[12px] w-[12px] bg-[#DAE3EA] rounded-[50%]'>

                                </div>
                                

                            </div>

                        </div>

                        <p className='mt-[40px] text-[12px] text-[#FFFFFF]'> Quis magna volutpat, adipiscing accumsan id nec. Elit tellus sapien, nulla in vitae. Nisl augue auctor imperdiet risus est, quis. Viverra consectetur ultricies purus arcu erat vulputate elit. Blandit neque accumsan vel fames nunc. Commodo et pellentesque nec sed mauris donec phasellus</p>

                        <p className='mt-[40px] text-[13px] font-semibold text-[#FFFFFF]'>Digital Dokans Corporation</p>
                        

                    </div>
                    <div className=' w-[240px]'>

                        <h1 className='text-[#FFFFFF] text-[25px] mt-[40px] md:mt-[0px]'>About Us</h1>

                        <div className='mt-[40px] flex justify-between items-center'>
                            <div className='space-y-4 text-[13px] font-semibold text-[#FFFFFF]'>
                                <p>Home</p>
                                <p>Shopping Malls</p>
                                <p>Disover</p>
                                <p>Product List</p>

                            </div>

                            <div className='space-y-4 text-[13px] font-semibold text-[#FFFFFF] mr-[7px]'>
                                <p>Help & Support</p>
                                <p>Privacy Policy</p>
                                <p>Cookie Policy</p>
                                <p>Terms & Condition</p>



                            </div>
                            

                        </div>
                        

                    </div>
                    <div className=' w-[204px]'>
                    <h1 className='text-[#FFFFFF] text-[25px] mt-[40px] md:mt-[0px]'>Follow Us</h1>

                    <div className='mt-[40px] flex justify-start items-center space-x-6'>

                    <FaFacebookF size={20} style={{ color: '#FFFFFF',fill: '#FFFFFF' }} />
                    <RiInstagramFill size={20} style={{ color: '#FFFFFF',fill: '#FFFFFF' }} />
                    <FaTwitter size={20} style={{ color: '#FFFFFF',fill: '#FFFFFF' }} />
                        

                    </div>
                        

                    </div>

                </div>
               

            </div>
            
        </div>
    );
};

export default Footer;