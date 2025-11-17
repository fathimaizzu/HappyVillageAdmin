import React, { useState } from 'react'
import { TiHome } from "react-icons/ti";
import { TbReportSearch } from "react-icons/tb";
import { FaCaretDown } from "react-icons/fa6";



function SideBar() {
    const [open, setOpen] = useState(false)
    return (
        <div className=' w-[200px] min-h-screen bg-[#00105B] py-[30px] px-[20px]'>
            <ul>
                <li className='flex items-center text-white font-medium text-[20px] gap-[10px]  border-white border-b-1 py-[10px]'><TiHome />Home</li>
                <li className='flex items-center text-white font-medium text-[20px] gap-[10px]  border-white border-b-1 py-[10px]'
                    onClick={() => setOpen(!open)}
                ><TbReportSearch />Others<FaCaretDown className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />        {open && (
                        <ul className="ml-8 mt-2 space-y-2">
                            <li className="text-white text-[18px] hover:text-gray-300 cursor-pointer">
                                Report
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default SideBar