// import React, { useEffect, useState } from 'react'
// import { PiBuildingOfficeLight } from "react-icons/pi";
// import { FaArrowLeft } from "react-icons/fa6";

// import { RiHome2Line } from "react-icons/ri";
// import { GoPeople } from "react-icons/go";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import WardCard from '../component/Wards/WardCard';

// function WardDatas() {
//     const navigate = useNavigate()

//     const location = useLocation()
//     const { panchayathName } = location.state || {}
//     const [wardData, setWardData] = useState([])

//     useEffect(() => {

//         fetchWardDetails(panchayathName)

//     }, [panchayathName])

//     const fetchWardDetails = async (panchayath) => {
//         try {
//             const res = await axios.get(`http://103.191.208.95/api/v1/admin/wardDetails?Panchayath=${panchayath}`)
//             setWardData(res.data)
//         } catch (err) {
//             console.error("Error fetching ward details", err)
//         }
//     }

//     console.log(wardData, "warddata")


// function handleCardClick(wardNo) {
//   navigate('/house',{state:{panchayathName, wardNo}})
  
// }

//     return (

//         <div className='py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]'>
//             <div className=''>
//                 <div className='flex  items-center gap-[10px] text-[#7181ee]'>
//                     <p><FaArrowLeft /></p>
//                     <p onClick={() => navigate(-1)}>Back to Dasboard</p>
//                 </div>
//                 <h1 className='text-[25px] lg:text-3xl font-bold mt-[15px]'>{panchayathName} - Ward</h1>
//                 <p className='mt-[10px]'>Manage ward information and house data</p>
//                 <div>
//                     <div className='grid grid-cols-2 gap-[15px] 2xl:gap-[20px]  lg:grid-cols-3 xl:grid-cols-4 mt-[30px] '>
//                         {
//                             wardData.map((data) => (
//                                 <WardCard key={data.WardNo} data={data} onCardClick={() => handleCardClick(data.WardNo)} />
//                             ))
//                         }
//                     </div>

//                 </div>
//             </div>
//             <div className='border-0 shadow-2xl py-[30px] px-[80px] mt-[40px] rounded-2xl'>
//                 <h1 className='text-[25px] font-bold'>Ward Summary</h1>
//                 <div className='flex justify-around items-center mt-[30px]  '>
//                     <div className='flex flex-col items-center'>
//                         <p className='text-[25px] bg-[#dbeafe] rounded-[100%] p-4 text-[#4778ec]'><PiBuildingOfficeLight /></p>
//                         <p className='font-semibold text-[25px]'>n</p>
//                         <p className='text-[#817d90]'>Total Wards</p>
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <p className='text-[25px] bg-[#dcfce7] rounded-[100%] p-4 text-[#5fb662]'><RiHome2Line /></p>
//                         <p className='font-semibold text-[25px]'>1247</p>
//                         <p className='text-[#817d90]'>Total Houses</p>
//                     </div>
//                     <div className='flex flex-col items-center'>
//                         <p className='text-[25px] bg-[#f3e8ff] rounded-[100%] p-4 text-[#943beb]'><GoPeople /></p>
//                         <p className='font-semibold text-[25px]'>4892</p>
//                         <p className='text-[#817d90]'>Total Population</p>
//                     </div>

//                 </div>

//             </div>



//         </div>

//     )
// }

// export default WardDatas





import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import WardCard from "../component/Wards/WardCard";
import useHomeStore from "../store/homeStore";

function WardDatas() {
  const navigate = useNavigate();
  const location = useLocation();
  const { panchayathName } = location.state || {};

  const { wardData, fetchWardData, loading, error } = useHomeStore();

  useEffect(() => {
    if (panchayathName) {
      fetchWardData(panchayathName);
    }
  }, [panchayathName, fetchWardData]);

  const handleCardClick = (wardNo) => {
    navigate("/house", { state: { panchayathName, wardNo } });
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading ward data...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 font-semibold">
        {error}
      </div>
    );

  return (
    <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]">
      <div>
        <div
          className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          <p>Back to Dashboard</p>
        </div>

        <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
          {panchayathName} - Ward
        </h1>
        <p className="mt-[10px]">Manage ward information and house data</p>

        <div className="grid grid-cols-2 gap-[15px] 2xl:gap-[20px] lg:grid-cols-3 xl:grid-cols-4 mt-[30px]">
          {wardData.map((data) => (
            <WardCard
              key={data.WardNo}
              data={data}
              onCardClick={() => handleCardClick(data.WardNo)}
            />
          ))}
        </div>
      </div>

      {/* Ward Summary Section */}
      {/* <div className="border-0 shadow-2xl py-[30px] px-[80px] mt-[40px] rounded-2xl">
        <h1 className="text-[25px] font-bold">Ward Summary</h1>
        <div className="flex justify-around items-center mt-[30px]">
          <div className="flex flex-col items-center">
            <p className="text-[25px] bg-[#dbeafe] rounded-[100%] p-4 text-[#4778ec]">
              <PiBuildingOfficeLight />
            </p>
            <p className="font-semibold text-[25px]">{wardData.length}</p>
            <p className="text-[#817d90]">Total Wards</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[25px] bg-[#dcfce7] rounded-[100%] p-4 text-[#5fb662]">
              <RiHome2Line />
            </p>
            <p className="font-semibold text-[25px]">1247</p>
            <p className="text-[#817d90]">Total Houses</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[25px] bg-[#f3e8ff] rounded-[100%] p-4 text-[#943beb]">
              <GoPeople />
            </p>
            <p className="font-semibold text-[25px]">4892</p>
            <p className="text-[#817d90]">Total Population</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default WardDatas;
