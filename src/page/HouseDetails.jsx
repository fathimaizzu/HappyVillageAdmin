// import React, { useEffect, useState } from 'react'
// import { FaArrowLeft } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';



// function HouseDetails() {
//     const navigate = useNavigate()
//     const location = useLocation()

//     const { panchayathName, wardNo } = location.state || {}//panchayathName and wardNo are pulled from location.state. The || {} avoids errors if state is undefined.
//     const [data, setData] = useState([]);

//     const houseTable = async () => {
//         try {
//             const res = await axios.get(`http://103.191.208.95/api/v1/admin/familyDetails?Panchayath=${panchayathName}&WardNo=${wardNo}&page=1&limit=10`)
//             setData(res.data.houses)
//         }
//         catch {

//         }
//     }
//     useEffect(() => {
//         houseTable()

//     }, [])

//     function handleClick(houseId) {
//         navigate(`/basic/${houseId}`, { state: { panchayathName, wardNo, houseId } })//Navigates to /basic/<houseId> and passes the same panchayathName, wardNo, and houseId in location.state for the next page to use.
//     }


//     return (
//         <div className='py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]'>

//             <div className='flex  items-center gap-[10px] text-[#7181ee]' >
//                 <p><FaArrowLeft /></p>
//                 <p onClick={() => navigate(-1)}>Back to Dasboard</p>
//             </div>
//             <h1 className='text-[25px] lg:text-3xl font-bold mt-[15px]'>{panchayathName}-Ward{wardNo}</h1>
//             <p className='mt-[10px]'>Manage ward information and house data</p>
//             <div className='border-0 shadow-2xl mt-[20px] rounded-2xl'>
//                 <div className='flex justify-between border-b-1  border-gray-300 py-[25px] px-[20px]'>
//                     <div>
//                         <h1 className='text-[20px] font-bold '>House Directory</h1>
//                     </div>
//                     <div className='flex justify-center items-center border-1 border-[#a3b0c5] text-[#a3b0c5] placeholder-shown:text-[#a3b0c5] px-[10px] py-[8px] gap-[5px] rounded-[10px]'>
//                         <p className='text-[#a3b0c5] '><CiSearch /></p>
//                         <input className='flex-1 outline-none' type="text" placeholder='Search houses..' />
//                     </div>
//                 </div>
//                 <table className="w-full  border-collaps">
//                     <thead className="bg-gray-100">
//                         <tr className="text-[#707d8f] bg-[#f9fafb] ">
//                             <th className=" px-4 py-2 text-left text-[15px]">Sl No</th>
//                             <th className=" px-4 py-2 text-left text-[15px]">HOUSE DETAILS</th>
//                             <th className=" px-4 py-2 text-left text-[15px]">HOUSE HOLDER</th>
//                             <th className=" px-4 py-2 text-left text-[15px]">MEMBERS COUNT</th>
//                             <th className=" px-4 py-2 text-left text-[15px]">RATIONCARD TYPE</th>
//                             <th className=" px-4 py-2 text-left text-[15px]">ACTIONS</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data && data.length > 0 ? (
//                             data.map((item, index) => (


//                                 <tr key={index} className="hover:bg-gray-50 border-b-1 border-gray-300">
//                                     <td className="px-4 py-3">{index + 1}</td>
//                                     <td className="px-4 py-3"><p className='font-semibold'>{item.HouseNo}</p><p className='text-[#707d8f]'>{item.HouseName}</p></td>
//                                     <td className="px-4 py-3 font-semibold">{item.HouseholdHead}</td>
//                                     <td className="px-4 py-3">{item.FamilymembersNO}</td>
//                                     <td className="px-4 py-3">{item.RationCardType}</td>
//                                     <button onClick={() => handleClick(item.id)} role='button'>
//                                         <td className="px-4 py-3  text-[#534ae6]  ">View Details</td>
//                                     </button>
//                                 </tr>

//                             ))
//                         ) : (

//                             <tr>
//                                 <td colSpan="6" className="text-center py-4 text-gray-500">
//                                     No data found
//                                 </td>
//                             </tr>
//                         )}


//                     </tbody>
//                 </table>

//             </div>

//         </div>
//     )
// }

// export default HouseDetails





import React, { useEffect, useState, useMemo } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
import useHomeStore from "../store/homeStore";

function HouseDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const { panchayathName, wardNo } = location.state || {};
  const {
    houseData,
    fetchHouseData,
    searchHouseData,
    totalItems,
    loading,
    error,
  } = useHomeStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // -------------------------------------------
  // 1️⃣ Load Initial House Data
  // -------------------------------------------
  useEffect(() => {
    if (panchayathName && wardNo) {
      fetchHouseData(panchayathName, wardNo, currentPage);
    }
  }, [panchayathName, wardNo, currentPage]);

  // -------------------------------------------
  // 2️⃣ Trigger Search API only when typing
  // -------------------------------------------
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm.trim()) {
        searchHouseData(
          searchTerm,
          panchayathName,
          wardNo,
          currentPage,
          itemsPerPage
        );
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm, currentPage, panchayathName, wardNo]);

  // -------------------------------------------
  // 3️⃣ When search is cleared → load original data
  // -------------------------------------------
  useEffect(() => {
    if (!searchTerm.trim()) {
      fetchHouseData(panchayathName, wardNo);
      setCurrentPage(1); // reset to first page
    }
  }, [searchTerm]);

  // -------------------------------------------
  // Normalize Data
  // -------------------------------------------
  // const dataArray = useMemo(() => {
  //   if (!houseData) return [];
  //   if (Array.isArray(houseData)) return houseData;
  //   if (Array.isArray(houseData.results)) return houseData.results;
  //   return [];
  // }, [houseData]);

  // const totalItems = houseData?.count || dataArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const currentData = dataArray.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleClick = (houseId) => {
    navigate(`/basic/${houseId}`, {
      state: { panchayathName, wardNo, houseId },
    });
  };

  return (
    <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]">
      {/* Back Button */}
      <div
        className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <p>Back to Dashboard</p>
      </div>

      {/* Title */}
      <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
        {panchayathName} - Ward {wardNo}
      </h1>
      <p className="mt-[10px]">Manage ward information and house data</p>

      {/* Table Container */}
      <div className="border-0 shadow-2xl mt-[20px] rounded-2xl overflow-hidden">
        {/* Header + Search */}
        <div className="flex justify-between border-b border-gray-300 py-[25px] px-[20px]">
          <h1 className="text-[20px] font-bold">House Directory</h1>

          <div className="flex items-center border border-[#bec6d2d2] text-[#a3b0c5] px-[10px] py-[8px] gap-[5px] rounded-[10px] w-100">
            <CiSearch />
            <input
              className="flex-1 outline-none text-black placeholder-gray-400"
              type="text"
              placeholder="Search by HouseNo/HouseName/Householder..."
              value={searchTerm}
              onChange={(e) => {
                setCurrentPage(1); // reset page on new search
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-[#707d8f] bg-[#f9fafb]">
              <th className="px-4 py-2 text-left text-[15px]">Sl No</th>
              <th className="px-4 py-2 text-left text-[15px]">HOUSE DETAILS</th>
              <th className="px-4 py-2 text-left text-[15px]">HOUSE HOLDER</th>
              <th className="px-4 py-2 text-left text-[15px]">MEMBERS COUNT</th>
              <th className="px-4 py-2 text-left text-[15px]">RATIONCARD TYPE</th>
              <th className="px-4 py-2 text-left text-[15px]">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-4 font-semibold">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center py-4 text-red-500">
                  {error}
                </td>
              </tr>
            ) : houseData.length > 0 ? (
              houseData.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 border-b border-gray-200 cursor-pointer"
                  onClick={() => handleClick(item.id)}
                >
                  <td className="px-4 py-3">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-4 py-3">
                    <p className="font-semibold">{item.HouseNo}</p>
                    <p className="text-[#707d8f]">{item.HouseName}</p>
                  </td>
                  <td className="px-4 py-3 font-semibold">{item.HouseholdHead}</td>
                  <td className="px-4 py-3">{item.FamilymembersNO}</td>
                  <td className="px-4 py-3">{item.RationCardType}</td>
                  <td className="px-4 py-3 text-[#534ae6]">View Details</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {/* {dataArray.length > 0 && ( */}
          <div className="flex justify-between items-center py-4 px-6 bg-[#f9fafb] border-t">
            <p className="text-sm text-gray-600">
              {/* Showing {startIndex + 1}– */}
              {/* {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} */}
              Showing {(currentPage - 1) * itemsPerPage + 1}–
      {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === 1
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "text-[#534ae6] border-[#534ae6]"
                }`}
              >
                Prev
              </button>

              <span className="px-3 py-1 text-gray-600">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded-lg ${
                  currentPage === totalPages
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "text-[#534ae6] border-[#534ae6]"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default HouseDetails;
