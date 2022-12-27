import React from 'react';
import { TbTicket } from 'react-icons/tb';
import { RiWallet3Fill } from 'react-icons/ri';
import {MdBorderColor } from 'react-icons/md';
import { HomeIcon } from '@heroicons/react/24/solid'
import profileImg from '../img/pexels-photo-220453.jpg'
import Wishlist from '../components/Wishlist';
import Following from '../components/Following';
import Viewed from '../components/Viewed';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='px-[100px] mt-[90px] md:px-[142px] md:mt-[160px]'>
           <div className='  md:flex  justify-start space-x-6'>
            <Link to='/'>
            <div className='w-[172px] h-[268px] bg-[#FFFFFF] rounded-[24px] border border-solid border-[#9FB3C6]'>
                <div className='px-[24px]'>
                    <div className='mt-[35px]'>
                    <HomeIcon className="h-8 w-8 text-[#C72421] "/>

                    </div>
                    <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[30px]'>
                        Dashboard
                    </h1>

                    <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                        sed sit tristique morbi utricles dolor sed various

                    </p>

                </div>

            </div>
            </Link>

            <Link to='/orders'>
            <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6]'>

                <div className='px-[24px]'>
                    <div className='mt-[35px]'>
                    <TbTicket size={30} style={{ color: '#8599AD',fill: '#8599AD' }} />

                    </div>

                    <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[30px]'>
                        Orders
                    </h1>

                    <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                        Tempor aenean ut ac venenatis et ac orci et cursus

                    </p>

                </div>



            </div>
            </Link>
            
            <Link to='/wallet'>
            <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6]' >

            <div className='px-[24px]'>
                    <div className='mt-[35px]'>
                    <RiWallet3Fill size={30} style={{ color: '#8599AD',fill: '#8599AD' }} />

                    </div>

                    <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[30px]'>
                        Wallet
                    </h1>

                    <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                      Malesuada ultrices id nibh iaculis id quisque

                    </p>

                </div>

            </div>

            </Link>

          <Link to='/account'>
            <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6]'>

            <div className='px-[24px]'>
                    <div className='mt-[35px]'>
                    <MdBorderColor size={30} style={{ color: '#8599AD',fill: '#8599AD' }} />

                    </div>

                    <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[6px]'>
                        Account Details
                    </h1>

                    <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                      Tellus sit vitae susspendisse eu imperdiet

                    </p>

                </div>

            </div>

            </Link>



           </div>


           <div className='space-y-3 md:flex justify-start items-start my-[80px] md:space-x-6'>

            <img src={profileImg} alt="" style={{height:'120px',width:'120px'}} className='rounded-[8px]' />
            <div>
                <h1 className='text-3xl  font-normal text-[#010203] mb-[4px]'>Name Here</h1>
                <p className='text-base font-normal text-[#4C5967] mb-[4px]'>01478523698</p>
                <p className='text-base font-normal text-[#4C5967]'>example@example.com</p>
            </div>


           </div>

           <Wishlist></Wishlist>
           <Following></Following>
           <Viewed></Viewed>


            
        </div>
    );
};

export default Dashboard;