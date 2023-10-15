import React from 'react'
import { BsFillGearFill } from "react-icons/bs"
import { BiSolidKey } from "react-icons/bi"
import { TbBrandUnity } from "react-icons/tb"
import { BiSolidUserPin } from "react-icons/bi"
import { BiSolidWalletAlt } from "react-icons/bi"
import { LuBadgePercent } from "react-icons/lu"
import { MdLiveHelp } from "react-icons/md"
import { FaChevronRight } from 'react-icons/fa'
import profile from '../cropped-1920-1080-665330.png'
const Sidebar = () => {
    return (
        <div className='bg-blue-950 h-screen text-white px-3 '>
            <div>
                <div className='flex items-center justify-center py-5'>
                    <BsFillGearFill className='text-2xl' />
                    <h1 className='text-3xl cursor-pointer p-2'> Dashboard</h1>
                </div>
                <div>
                    <div className='py-5 flex'>
                        <BiSolidKey className='text-2xl pr-2' />
                        <p>Dashboard</p>
                    </div>
                    <div className='py-5 flex items-center'>
                        <TbBrandUnity className='text-2xl pr-2' />
                        <p>Product</p>
                        <div className='flex '>
                            <FaChevronRight color='white' />
                        </div>

                    </div>
                    <div className='py-5 flex items-center'>
                        <BiSolidUserPin className='text-2xl pr-2' />
                        <p>Customers</p>
                        <FaChevronRight color='white' />

                    </div>
                    <div className='py-5 flex items-center'>
                        <BiSolidWalletAlt className='text-2xl pr-2' />
                        <p>Income</p>
                        <FaChevronRight color='white' />

                    </div>
                    <div className='py-5 flex items-center'>
                        <LuBadgePercent className='text-2xl pr-2' />
                        <p>Promote</p>
                        <FaChevronRight color='white' />

                    </div>
                    <div className='py-5 flex items-center'>
                        <MdLiveHelp className='text-2xl pr-2' />
                        <p>Help</p>
                        <FaChevronRight color='white' />

                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative' >
                <div className='h-[50px] w-[50px] rounded-full  flex items-center justify-center relative z-40' >
                    <img src={profile} alt="" />

                </div>
                <button>User</button>

            </div>
        </div>
    )
}

export default Sidebar