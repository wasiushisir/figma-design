import React from 'react';
import { TbTicket } from 'react-icons/tb';
import { RiWallet3Fill } from 'react-icons/ri';
import {MdBorderColor } from 'react-icons/md';
import { HomeIcon,PlusIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AccountDetails = () => {
    return (
        <div className='px-[100px] mt-[90px] md:px-[142px] md:mt-[160px]'>
             <div className='md:flex  justify-start md:space-x-6  md:space-y-0'>
            <Link to='/'>
            <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6]'>
                <div className='px-[24px]'>
                    <div className='mt-[35px]'>
                    <HomeIcon className="h-8 w-8 text-[#8599AD] "/>

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
            <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]'>

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
            <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]' >

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

            
            <div className='w-[172px] h-[268px] bg-[#FFFFFF] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]'>

            <div className='px-[24px]'>
                    <div className='mt-[35px]'>
                    <MdBorderColor size={30} style={{ color: '#C72421',fill: '#C72421' }} />

                    </div>

                    <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[6px]'>
                        Account Details
                    </h1>

                    <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                      Tellus sit vitae susspendisse eu imperdiet

                    </p>

                </div>

            </div>

            



           </div>


           <div className='my-[80px]'>

           <h1 className=' text-[20px] md:text-[31px] text-[#2B333B]'>Account Details</h1>

           <div className='w-[250px] md:w-[684px] h-[40px] rounded-[8px] bg-[#FFFFFF] mt-[40px]'>
            <input className='my-[8px] ml-[16px] outline-none text-[16px] text-[#5C738A] font-medium' type="text" placeholder='Address' />

           </div>


           <div className='mt-[12px] flex justify-start items-center  text-[#1E2DDA] space-x-3'>

            <div className='ml-[12px]'>
            <PlusIcon className="h-4 w-4  "/>

            </div>

            <p className='text-[16px] font-medium'>Add Another</p>
            

           </div>


           <div className='bg-[#D1DEEB] w-[223px] h-[40px] rounded-[8px] mt-[48px]'>
            <p className='text-[16px] font-medium text-[#2B333B] px-[24px] py-[8px]'>Change Profile Photo</p>

           </div>


           <div className='bg-[#D1DEEB] w-[165px] h-[40px] rounded-[8px] my-[24px]'>
           <p className='text-[16px] font-medium text-[#2B333B] px-[24px] py-[8px]'>Change Email</p>

           </div>
           <div className='bg-[#D1DEEB] w-[200px] h-[40px] rounded-[8px] '>
           <p className='text-[16px] font-medium text-[#2B333B] px-[24px] py-[8px]'>Change Password</p>

           </div>


           </div>


            
        </div>
    );
};

export default AccountDetails;