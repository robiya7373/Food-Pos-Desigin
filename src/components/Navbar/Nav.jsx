import React from 'react'

import FoodLogo from "../../../public/foodLogo.svg"
import { GrHomeRounded } from "react-icons/gr";
import { PiSealPercentBold } from "react-icons/pi";
import { LuPieChart } from "react-icons/lu";
import { IoMailOutline ,IoSettingsOutline ,IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";


const Nav = () => {
  return (
    <nav className='w-[114px] rounded-r-[25px] bg-[#1F1D2B] '>
        <ul className='home mt-8 ms-[12px]'>
            <div className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center'><img src={FoodLogo} alt="" className='' /></div></div>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center icon'><GrHomeRounded size={25}  className='' /></div></li>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center icon'><PiSealPercentBold size={25}  className='' /></div></li>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center icon'><LuPieChart size={25}  className='' /></div></li>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center icon'><IoMailOutline size={25}  className='' /></div></li>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center icon'><IoIosNotificationsOutline size={25}  className='' /></div></li>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3 relative'><div className='w-[56px] h-[56px] flex justify-center items-center icon'><IoSettingsOutline size={25}  className='' /></div></li>
            <li className='flex justify-center w-[102px] cursor-pointer h-20 items-center p-3] mt-14 relative'><div className='w-[56px] h-[56px] flex justify-center items-center  icon'><IoLogOutOutline size={25}  className='' /></div></li>
        </ul>
    </nav>
  )
}

export default Nav