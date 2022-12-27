import React from 'react';
import { HomeIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { TbTicket } from 'react-icons/tb';
import { RiWallet3Fill } from 'react-icons/ri';
import { MdBorderColor } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <div className='px-[100px] mt-[90px] md:px-[142px] md:mt-[160px]'>

            <div className='  md:flex  justify-start md:space-x-6  md:space-y-0'>

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



                <div className='w-[172px] h-[268px] bg-[#FFFFFF] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]'>

                    <div className='px-[24px]'>
                        <div className='mt-[35px]'>
                            <TbTicket size={30} style={{ color: '#C72421', fill: '#C72421' }} />

                        </div>

                        <h1 className='mt-[27px] w-full text-xl text-[#010203] font-bold pb-[30px]'>
                            Orders
                        </h1>

                        <p className='pb-[32px] mt-[16px] text-[#4C5967] text-xs font-normal pr-[20px]'>
                            Tempor aenean ut ac venenatis et ac orci et cursus

                        </p>

                    </div>



                </div>

               <Link to='/wallet'>
                <div className='w-[172px] h-[268px] bg-[#F0F5FA] rounded-[24px] border border-solid border-[#9FB3C6] mt-[35px]  md:mt-[0px]' >

                    <div className='px-[24px]'>
                        <div className='mt-[35px]'>
                            <RiWallet3Fill size={30} style={{ color: '#8599AD', fill: '#8599AD' }} />

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


            <div className='mt-[60px]  w-[766px]  md:mt-[36px]'>
                <div className='md:flex justify-between items-center'>
                    <div className='w-[256px] bg-[#FFFFFF] border border-solid border-[#5C738A] h-[40px] rounded-[8px]'>
                        <input className=' text-[#5C738A] font-medium  my-[8px] ml-[16px] outline-none' type="text" placeholder='Start price Range' />
                    </div>
                    <div className='mt-[20px] md:mt-[0px]  w-[256px] md:w-[415px]  bg-[#D1DEEB] ml-[-10px] h-[40px] rounded-[8px] '>
                        <div className='my-[8px] ml-[16px] mr-[15px] md:flex justify-between items-center text-[#2B333B]'>
                            <div className='flex justify-between items-center w-[180px]'>
                                <p className='text-[16px] font-medium'>Category</p>
                                <ChevronDownIcon className="h-6 w-6" />

                            </div>

                            <div className='flex justify-between items-center w-[180px]'>
                                <p className='text-[16px] font-medium'>Status</p>
                                <ChevronDownIcon className="h-6 w-6" />

                            </div>

                        </div>



                    </div>

                    <div className='w-[112px] bg-[#DE3D3A] py-[4px] px-[36px] rounded-[8px] ml-[-10px] md:mt-[10px] mt-[20px]'>
                        <p className='text-[16px] font-medium text-center text-[#FFFFFF]'>Filter</p>
                    </div>

                </div>

                <div className='flex justify-between h-[40px] md:mt-[5px] border border-[#5C738A] rounded-[8px]  bg-[#FFFFFF] w-[256px] md:w-full mt-[20px]'>
                    <div className=''>
                        <input className=' text-[#5C738A] font-medium  my-[8px] ml-[16px] outline-none' type="text" placeholder='Search' />
                    </div>
                    <div className='bg-[#DE3D3A] w-[40px] flex justify-center items-center rounded-r-[8px]'>
                        <MagnifyingGlassIcon className="h-6 w-6 text-[#FFFFFF] " />



                    </div>

                </div>



                <div className='bg-[#E6EDF4] w-[265px] md:w-full md:flex justify-between items-center h-[36px] mt-[29px] rounded-r-[8px] text-[#010203] hidden'>
                    <div className='ml-[16px] my-[8px] w-[70px] '>
                        <h1 className='text-[12px] font-medium'>ID</h1>

                    </div>

                    <div className='my-[8px] w-[280px] '>
                        <h1 className='text-[12px] font-medium'>PRODUCT NAME</h1>

                    </div>

                    <div className='my-[8px] w-[80px]  '>
                        <h1 className='text-[12px] font-medium'>AMOUNT</h1>

                    </div>


                    <div className='my-[8px] w-[80px]  '>
                    <h1 className='text-[12px] font-medium'>PRICE</h1>

                    </div>


                    <div className='my-[8px] w-[84px]  '>
                    <h1 className='text-[12px] font-medium'>STATUS</h1>

                    </div>


                   

                </div>

                <div className='hidden md:flex flex-col '>

                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>53624</h1>
                        </div>

                        <div className=' md:w-[280px] my-[20px]'>
                            <h1>Id nam at cursus donec pulvinar diam. Montes.</h1>

                        </div>

                        <div className='my-[20px] w-[5px] md:w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$135</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#FFF7E4] rounded-[4px]'>
                                <p className='text-[#E3920F] mx-[20px] text-[12px] font-medium'>PENDING</p>

                            </div>

                        </div>

                    </div>


                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>25634</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Mi augue in ac suscipit adipiscing. Vivamus.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>02</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$8546</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#FFF7E4] rounded-[4px]'>
                                <p className='text-[#E3920F] mx-[20px] text-[12px] font-medium'>PENDING</p>

                            </div>

                        </div>

                    </div>


                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>56325</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Pellentesque maecenas aliquam pretium quam.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$1523</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>DELEVERED</p>

                            </div>

                        </div>

                    </div>

                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>48965</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>At venenatis elit duis duis adipiscing in cursus.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>02</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$521</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>SHIPED</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>32587</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Id enim odio interdum scelerisque in quam amet.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>100</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$894</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>SHIPED</p>

                            </div>

                        </div>

                    </div>




                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>96536</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Elit quis quis arcu phasellus molestie tempus.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>03</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$1256</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#FDF1F1] rounded-[4px]'>
                                <p className='text-[#BB2525] mx-[20px] text-[12px] font-medium'>CANCELLED</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>12546</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Enim ante aliquam eros massa ligula nulla varius.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$1253</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#FDF1F1] rounded-[4px]'>
                                <p className='text-[#BB2525] mx-[20px] text-[12px] font-medium'>FAILED</p>

                            </div>

                        </div>

                    </div>




                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>12236</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Quis bibendum et in fringilla sit vitae ut tincidunt.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>05</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$561</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#F0F2FE] rounded-[4px]'>
                                <p className='text-[#1E2DDA] mx-[20px] text-[12px] font-medium'>READY</p>

                            </div>

                        </div>

                    </div>


                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>19365</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Vel felis in varius egestas ipsum. Bibendum nunc.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$160</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>SHIPED</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>36536</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>A nibh nibh placerat dui quis enim vivamus. Ut.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$562</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#FDF1F1] rounded-[4px]'>
                                <p className='text-[#BB2525] mx-[20px] text-[12px] font-medium'>CANCELLED</p>

                            </div>

                        </div>

                    </div>




                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>25632</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Elit nisl lectus in enim pharetra id suspendisse.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>05</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$896</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>SHIPPED</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>12563</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Consequat elementum euismod turpis.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>120</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$7856</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#F0F2FE] rounded-[4px]'>
                                <p className='text-[#1E2DDA] mx-[20px] text-[12px] font-medium'>READY</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>98563</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Neque tellus vitae elementum tortor laoreet et in.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$3256</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#F0F2FE] rounded-[4px]'>
                                <p className='text-[#1E2DDA] mx-[20px] text-[12px] font-medium'>READY</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>74532</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Ac, amet gravida interdum nunc non consectetur.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>06</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$56</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>DELEVERED</p>

                            </div>

                        </div>

                    </div>



                    <div className=' bg-[#FFFFFF] w-full flex justify-between items-center h-[64px] text-[16px] font-normal border border-b-gray-300'>
                        <div className='ml-[16px] my-[20px] w-[70px] '>
                            <h1>26356</h1>
                        </div>

                        <div className='w-[280px] my-[20px]'>
                            <h1>Feugiat felis arcu molestie dictum enim lorem quis.</h1>

                        </div>

                        <div className='my-[20px] w-[70px] '>
                            <h1>01</h1>

                        </div>

                        <div className='my-[20px] w-[60px]'>
                            <h1>$2727</h1>

                        </div>

                        <div className='my-[20px] w-[80px]  mr-[24px]'>
                            <div className='w-[90px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                                <p className='text-[#2E844F] mx-[20px] text-[12px] font-medium'>DELEVERED</p>

                            </div>

                        </div>

                    </div>

                    

                   

                   


















                </div>

                {/* hh */}

                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px] '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>53625</h1>
                        <h1 className=''>Id nam....</h1>
                        <h1>01</h1>
                        <h1>$135</h1>
                        <div className='w-[70px] h-[20px] bg-[#FFF7E4] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#E3920F] rounded-[4px]'>PENDING</p>
                        </div>

                    </div>
                    

                </div>
                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>25634</h1>
                        <h1 className=''>Mi aug....</h1>
                        <h1>02</h1>
                        <h1>$8546</h1>
                        <div className='w-[70px] h-[20px] bg-[#FFF7E4] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#E3920F] rounded-[4px]'>PENDING</p>
                        </div>

                    </div>
                    

                </div>
                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>56325</h1>
                        <h1 className=''>Pellen....</h1>
                        <h1>01</h1>
                        <h1>$1523</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>DELEVERED</p>
                        </div>

                    </div>
                    

                </div>
                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>48965</h1>
                        <h1 className=''>At ven....</h1>
                        <h1>02</h1>
                        <h1>$521</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>SHIPED</p>
                        </div>

                    </div>
                    

                </div>
                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>32587</h1>
                        <h1 className=''>Id enim....</h1>
                        <h1>100</h1>
                        <h1>$894</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>SHIPED</p>
                        </div>

                    </div>
                    

                </div>

                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>96536</h1>
                        <h1 className=''>Elit qu....</h1>
                        <h1>03</h1>
                        <h1>$1256</h1>
                        <div className='w-[70px] h-[20px] bg-[#FDF1F1] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#BB2525] rounded-[4px]'>CANCELLED</p>
                        </div>

                    </div>
                    

                </div>



                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>12546</h1>
                        <h1 className=''>Enim an....</h1>
                        <h1>01</h1>
                        <h1>$1253</h1>
                        <div className='w-[70px] h-[20px] bg-[#FDF1F1] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#BB2525] rounded-[4px]'>FAILED</p>
                        </div>

                    </div>
                    

                </div>

                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>12236</h1>
                        <h1 className=''>Quis bib....</h1>
                        <h1>05</h1>
                        <h1>$561</h1>
                        <div className='w-[70px] h-[20px] bg-[#F0F2FE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#1E2DDA] rounded-[4px]'>READY</p>
                        </div>

                    </div>
                    

                </div>


                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>19365</h1>
                        <h1 className=''>Vel felis....</h1>
                        <h1>01</h1>
                        <h1>$160</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>SHIPPED</p>
                        </div>

                    </div>
                    

                </div>


                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>36536</h1>
                        <h1 className=''>A nibh....</h1>
                        <h1>01</h1>
                        <h1>$562</h1>
                        <div className='w-[70px] h-[20px] bg-[#FDF1F1] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#BB2525] rounded-[4px]'>CANCELLED</p>
                        </div>

                    </div>
                    

                </div>

                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>36536</h1>
                        <h1 className=''>A nibh....</h1>
                        <h1>01</h1>
                        <h1>$562</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>SHIPED</p>
                        </div>

                    </div>
                    

                </div>
                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>12563</h1>
                        <h1 className=''>Conseq....</h1>
                        <h1>120</h1>
                        <h1>$7856</h1>
                        <div className='w-[70px] h-[20px] bg-[#F0F2FE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#1E2DDA] rounded-[4px]'>READY</p>
                        </div>

                    </div>
                    

                </div>
                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>98563</h1>
                        <h1 className=''>Neque te....</h1>
                        <h1>01</h1>
                        <h1>$3256</h1>
                        <div className='w-[70px] h-[20px] bg-[#F0F2FE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#1E2DDA] rounded-[4px]'>READY</p>
                        </div>

                    </div>
                    

                </div>


                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>74532</h1>
                        <h1 className=''>Ac,amet....</h1>
                        <h1>06</h1>
                        <h1>$56</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE] rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>DELEVERED</p>
                        </div>

                    </div>
                    

                </div>


                <div className=' bg-[#FFFFFF] w-[255px] flex justify-between items-center mt-[25px] md:hidden md:mt-[0px]  '>
                    
                    <div >
                        <h1 className=''>ID</h1>
                        <h1>PRODUCT NAME</h1>
                        <h1>AMOUNT</h1>
                        <h1>PRICE</h1>
                        <h1>STATUS</h1>

                    </div>

                    <div>
                        <h1 className=''>26356</h1>
                        <h1 className=''>Feugiat....</h1>
                        <h1>01</h1>
                        <h1>$2727</h1>
                        <div className='w-[70px] h-[20px] bg-[#E8F7EE]rounded-[4px]'>
                        <p className='w-[70px] h-[20px] text-[#2E844F] rounded-[4px]'>DELEVERED</p>
                        </div>

                    </div>
                    

                </div>






            </div>



        </div>
    );
};

export default Orders;