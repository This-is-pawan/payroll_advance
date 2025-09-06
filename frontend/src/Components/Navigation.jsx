import React from 'react'
import { icons } from './Index'
import { useGlobalContext } from '../ContextApi'

const Navigation = () => {
 const {setUser,user} = useGlobalContext()
//  console.log(user);
 
  return (
    <div   className={`w-full shadow-lg bg-slate-100 absolute top-20 z-20 
    transition-all duration-300 ease-out md:hidden
    ${user ?"opacity-100 translate-y-0" :"opacity-0 -translate-y-4 pointer-events-none"  }`}
>
<ul >
<li className='capitalize p-2 flex items-center hover:border-b cursor-pointer '> <icons.GrTasks className='m-2 ' />task</li>
<li className='capitalize p-2 flex items-center hover:border-b cursor-pointer '> <icons.HiReceiptTax className='m-2 ' />  recruitment</li>
<li className='capitalize p-2 flex items-center hover:border-b cursor-pointer '> <icons.CiCalendarDate className='m-2 ' />  calender</li>
<li className='capitalize p-2 flex items-center hover:border-b cursor-pointer '> <icons.IoSettingsOutline className='m-2 ' />   setting</li>
<li className='capitalize p-2 flex items-center hover:border-b cursor-pointer '> <icons.IoHelpCircleOutline className='m-2 ' />  help & center</li>
<li className='capitalize p-2 flex items-center hover:border-b cursor-pointer '> <icons.IoPersonCircleSharp className='m-2 ' />  performance</li>
</ul>
    </div>
  )
}

export default Navigation