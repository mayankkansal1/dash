import React from 'react'
import { BiSolidDollarCircle } from 'react-icons/bi'
import { GrNotes } from 'react-icons/gr'
import { BiSolidWalletAlt } from 'react-icons/bi'
import { BsFillBagFill } from 'react-icons/bs'
const Main = () => {
    return (
        <div className='pt-25 px-25 px-10 pt-5 '>
            <div className='grid grid-cols-4 gap-20 mt-25 pb-15'>
                <div className=' h-[150px] rounded-[8px] bg-white flex items-center justify-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <BiSolidDollarCircle className='text-5xl text-green-500' />
                    <div className=''>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>EARNINGS</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
                    </div>

                </div>
                <div className=' h-[150px] rounded-[8px] bg-white flex items-center justify-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <GrNotes className='text-5xl text-purple-900' />
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Orders</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$2.4k</h1>
                    </div>

                </div>
                <div className=' h-[150px] rounded-[8px] bg-white flex items-center justify-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <BiSolidWalletAlt className='text-5xl text-blue-400' />
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Balance</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$2.4k</h1>
                    </div>

                </div>
                <div className=' h-[150px] rounded-[8px] bg-white  flex items-center justify-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <BsFillBagFill className='text-5xl text-pink-500' />
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Total Sales</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>$89k</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main