import React from 'react';
import { HomeIcon, CheckIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'
import { TbTicket } from 'react-icons/tb';
import { RiWallet3Fill } from 'react-icons/ri';
import { CiWallet } from 'react-icons/ci';
import { MdBorderColor } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Wallet = () => {
    return (
        <div className='px-[100px] mt-[90px] md:px-[142px] md:mt-[160px]'>

            <div className='md:flex  justify-start md:space-x-6  md:space-y-0'>

                <Link to='/'>
                    <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6]'>
                        <div className='px-[24px]'>
                            <div className='mt-[35px]'>
                                <HomeIcon className="h-8 w-8 text-[#8599AD] " />

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
                                <TbTicket size={30} style={{ color: '#8599AD', fill: '#8599AD' }} />

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





                <div className='w-[172px] h-[268px] bg-[#FFFFFF] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]' >

                    <div className='px-[24px]'>
                        <div className='mt-[35px]'>
                            <RiWallet3Fill size={30} style={{ color: '#C72421', fill: '#C72421' }} />

                        </div>

                        <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[30px]'>
                            Wallet
                        </h1>

                        <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                            Malesuada ultrices id nibh iaculis id quisque

                        </p>

                    </div>

                </div>


                 <Link to='/account'>
                <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]'>

                    <div className='px-[24px]'>
                        <div className='mt-[35px]'>
                            <MdBorderColor size={30} style={{ color: '#8599AD', fill: '#8599AD' }} />

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


            <div className=' px-[0px] my-[80px] '>

                <h1 className='text-[20px] md:text-[31px] text-[#2B333B]'>Wallet</h1>

                <div className='mt-[24px] md:flex justify-between items-center md:space-x-6'>
                    <div className='w-[200px] md:w-[271px] h-[224px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px]'>

                        <div className=' md:mt-[29px] ml-[29px] h-[31px] w-[31px] border border-solid border-[#4C5967] rounded-[8px] flex justify-center items-center'>
                            <CheckIcon className="h-4 w-4 " />

                        </div>

                        <div className='mx-[24px] mt-[56px] '>
                            <p className='text-[16px] text-[#4C5967]'>Total Bought</p>
                            <h1 className='text-[28px] md:text-[48px] text-[#2B333B]  font-semibold'>$1050</h1>

                        </div>


                    </div>
                    <div className='w-[200px] md:w-[271px] h-[224px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px] mt-[35px]  md:mt-[0px]'>

                        <div className='mt-[29px] ml-[29px]'>
                            <CiWallet size={40} style={{ color: '#4C5967', fill: '#4C5967' }} />
                        </div>

                        <div className='mx-[24px] mt-[56px] '>
                            <p className='text-[16px] text-[#4C5967]'>Balance</p>
                            <h1 className='text-[28px] md:text-[48px] text-[#2B333B]  font-semibold'>$500</h1>

                        </div>



                    </div>
                    <div className='w-[200px] md:w-[271px] h-[224px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px] mt-[35px]  md:mt-[0px]'>
                        <div className='mt-[29px] ml-[29px] h-[31px] w-[31px] border border-solid border-[#4C5967] rounded-[8px] flex justify-center items-center'>

                            <ArrowUpIcon className="h-4 w-4 " />


                        </div>

                        <div className='mx-[24px] mt-[56px] '>
                            <p className='text-[16px] text-[#4C5967]'>Bonus</p>
                            <h1 className='text-[28px] md:text-[48px] text-[#2B333B]  font-semibold'>$150</h1>

                        </div>


                    </div>

                    <div className='w-[200px] md:w-[271px] h-[224px] rounded-[24px] bg-[#FFFFFF] pt-[25px] md:pt-[0px] mt-[35px]  md:mt-[0px]' >

                        <div className='mt-[29px] ml-[29px] h-[31px] w-[31px] border border-solid border-[#4C5967] rounded-[8px] flex justify-center items-center'>
                            <ArrowDownIcon className="h-4 w-4 " />

                        </div>


                        <div className='mx-[24px] mt-[56px] '>
                            <p className='text-[16px] text-[#4C5967]'>Pending</p>
                            <h1 className='text-[28px] md:text-[48px] text-[#2B333B]  font-semibold'>$120</h1>

                        </div>




                    </div>



                </div>



            </div>


        </div>
    );
};

export default Wallet;