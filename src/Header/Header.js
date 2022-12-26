import React from 'react';
import { VscHome } from 'react-icons/vsc';
import { DocumentTextIcon,ChatBubbleOvalLeftEllipsisIcon,BellIcon,ShoppingCartIcon,Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <div className='w-screen h-[72px] z-10 bg-[#FFFFFF] fixed drop-shadow-[0_3px_5px_rgba(0,0,0,0.07)]'>
            <div className='px-[24px] flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <div className='w-[35px] h-[35px] bg-[#F0F5FA] flex justify-center items-center rounded-full'>
                    <Bars3BottomLeftIcon className="h-6 w-6 "/>

                    </div>
                    <h1 className='font-bold pl-[16px] text-[25px]'>DOKAN BHAI</h1>

                </div>

                <div className='flex space-x-10'>
                    <VscHome size={25}/>
                    <DocumentTextIcon className="h-6 w-6 "/>
                    <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 "/>
                    <BellIcon className="h-6 w-6 "/>
                    <ShoppingCartIcon className="h-6 w-6 "/>
                    <div className='px-6 py-1   bg-[#DE3D3A] rounded-[8px] text-white'>
                        profile
                    </div>
                    




                </div>

            </div>
            
        </div>
    );
};

export default Header;

//{0px 3px 5px rgba(0, 0, 0, 0.07)} 

//