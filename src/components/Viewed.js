import React from 'react';
import img1 from '../img/view-1633082559031-da8af4abdcf9.jpg'
import img2 from '../img/office-1568992687947-868a62a9f521.jpg'
import img3 from '../img/view3-1571081901472-6ce797f629f1.jpg'
import img4 from '../img/restuarant-1563722897-e6dac3cec340.jpg'
import img5 from '../img/sweater-1616938528276-17aa6c0c3c21.jpg'
import { BuildingOfficeIcon } from '@heroicons/react/24/outline'

const Viewed = () => {
    return (
        <div>
            <h1 className='text-[39px] font-semibold'>Last Viewed</h1>
            <div className='mt-[40px] grid grid-cols-1 md:grid-cols-5  gap-y-8'>
                <div className='w-[212px] h-[368px] rounded-[8px] bg-[#FFFFFF] '>
                <img className='h-[196px] w-[196px] rounded-[8px] mx-[8px] mt-[8px]' src={img1} alt="" />
                <div className='mx-[16px] mt-[16px]'>
                        <p className='text-base font-normal'>in in quam netus ut et tincidunt tincidunt.</p>
                        <span className='font-semibold text-[13px]'>Electronic.</span>

                        <div className='flex justify-start items-center space-x-2.5 mt-[32px] '>
                            <BuildingOfficeIcon className="h-6 w-6 text-[#5C738A]" />
                            <p className='text-[12px] text-[#2B333B]'>3rd Floor</p>


                        </div>

                    </div>


                </div>
                <div className='w-[212px] h-[368px] rounded-[8px] bg-[#FFFFFF] '>
                <img className='h-[196px] w-[196px] rounded-[8px] mx-[8px] mt-[8px]' src={img2} alt="" />
                <div className='mx-[16px] mt-[16px]'>
                        <p className='text-base font-normal'>Erat augue diam amet mauris hendreit duis.</p>
                        <span className='font-semibold text-[13px]'>Electronic.</span>

                        <div className='flex justify-start items-center space-x-2.5 mt-[32px] '>
                            <BuildingOfficeIcon className="h-6 w-6 text-[#5C738A]" />
                            <p className='text-[12px] text-[#2B333B]'>4th Floor</p>


                        </div>

                    </div>


                </div>
                <div className='w-[212px] h-[368px] rounded-[8px] bg-[#FFFFFF] '>
                <img className='h-[196px] w-[196px] rounded-[8px] mx-[8px] mt-[8px]' src={img3} alt="" />
                <div className='mx-[16px] mt-[16px]'>
                        <p className='text-base font-normal'>Id lectus sapien purus various dignissim a.</p>
                        <span className='font-semibold text-[13px]'>Fashion.</span>

                        <div className='flex justify-start items-center space-x-2.5 mt-[32px] '>
                            <BuildingOfficeIcon className="h-6 w-6 text-[#5C738A]" />
                            <p className='text-[12px] text-[#2B333B]'>3rd Floor</p>


                        </div>

                    </div>


                </div>
                <div className='w-[212px] h-[368px] rounded-[8px] bg-[#FFFFFF] '>
                <img className='h-[196px] w-[196px] rounded-[8px] mx-[8px] mt-[8px]' src={img4} alt="" />
                <div className='mx-[16px] mt-[16px]'>
                        <p className='text-base font-normal'>laculis pretium porttitor enim lectus.</p>
                        <span className='font-semibold text-[13px]'>Fashion.</span>

                        <div className='flex justify-start items-center space-x-2.5 mt-[32px] '>
                            <BuildingOfficeIcon className="h-6 w-6 text-[#5C738A]" />
                            <p className='text-[12px] text-[#2B333B]'>1st Floor</p>


                        </div>

                    </div>


                </div>
                <div className='w-[212px] h-[368px] rounded-[8px] bg-[#FFFFFF] '>
                <img className='h-[196px] w-[196px] rounded-[8px] mx-[8px] mt-[8px]' src={img5} alt="" />
                <div className='mx-[16px] mt-[16px]'>
                        <p className='text-base font-normal'>Cursus amet purus mauris turpis aliquet.</p>
                        <span className='font-semibold text-[13px]'>Electronic.</span>

                        <div className='flex justify-start items-center space-x-2.5 mt-[32px] '>
                            <BuildingOfficeIcon className="h-6 w-6 text-[#5C738A]" />
                            <p className='text-[12px] text-[#2B333B]'>2nd Floor</p>


                        </div>

                    </div>


                </div>

            </div>

            <div className='mt-[40px] flex justify-center mb-[80px]'>
                <div className='py-[4px] px-[62px] bg-[#D1DEEB] rounded-[8px]'>
                    <p className='text-[#2B333B] text-[16px] font-medium'>Load More</p>
                </div>
            </div>
            
        </div>
    );
};

export default Viewed;