import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Dashboard = () => {
    return (
        <div className='px-10 py-7 '>
            <div>
                <div>
                    <h1 className='float-left'>Hello User 👋,</h1>
                </div>
                <div className='flex float-right items-center relative'>
                    <input type='text ' placeholder=' Search' className='border border-gray-950 '  >
                    </input>
                    <FaSearch className='text-2xl px-1' />
                </div>
            </div>
        </div>
    )
}

export default Dashboard