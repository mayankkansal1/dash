import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Map from "./components/Map";
import Piec from "./components/Pie";
import Table from "./components/Table";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaSearch } from 'react-icons/fa'

export default function App() {
  return (
    <div className="bg-slate-100">
      <div className="flex">
        <div className="basis-[15%] h-[100vh] ">
          <Sidebar></Sidebar>
        </div>
        <div className="basis-[85%] border">
          <Dashboard />
          <div>
            <Main />
          </div>

          <div className='flex mt-[22px] w-full gap-[30px] px-10'>
            <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
              <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'> Overview</h2>
              </div>

              <div className="w-full h-full">

                <Map />
              </div>

            </div>
            <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
              <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Customers</h2>
              </div>
              <div className='flex justify-center'>

                <Piec></Piec>
                {

                }
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className='flex mt-[22px] w-full gap-[30px] px-10'>
            <div className='basis-[100%] border bg-white shadow-md rounded-[4px]'>
              <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
                <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Products Sell </h2>
                <div className='flex float-right relative'>
                  <input type='text ' placeholder=' Search' className='border border-gray-950 '  >
                  </input>
                  <FaSearch className='text-2xl px-1' />
                </div>
                <div>

                </div>
              </div>
              <div>
                <Table />
              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}