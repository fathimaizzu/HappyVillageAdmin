// import React, { useEffect, useState } from 'react'
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import { FaArrowLeft } from "react-icons/fa6";
// import axios from 'axios';


// function BasicDetails() {
//     const navigate = useNavigate()//for navigation between routes.
//     const location = useLocation()//contains data passed from the previous page
//     const params = useParams()//contains dynamic URL parameters
//     console.log(params, location);


//     const { panchayathName, wardNo } = location.state || {}//Extracts panchayathName and wardNo from the route state..|| {}ensures no error occurs if state is undefined.
//     const [data, setData] = useState([]);//Stores house details.
//     const [familyData, setFamilyData] = useState([])//Stores an array of family members in that house

//     const { houseId } = params//Get the houseId from URL
//     const houseDetails = async () => {
//         try {
//             const res = await axios.get(`http://103.191.208.95/api/v1/admin/houseDetails?_id=${houseId}`)
//             setData(res.data.house)
//             setFamilyData(res.data.family)

//         }
//         catch {

//         }
//     }
//     useEffect(() => {
//         houseDetails()
//     }, [])

//     function handleClick(personalId, name, age, userid) {
//         navigate(`/member/${personalId} `, { state: { name, age, userid } })
//     }

//     return (
//         <div>
//             <div className='py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]'>
//                 <div className='flex  items-center gap-[10px] text-[#7181ee]'>
//                     <p><FaArrowLeft /></p>
//                     <p onClick={() => navigate(-1)}>Back to Dasboard</p>
//                 </div>
//                 <h1 className='text-[25px] lg:text-3xl font-bold mt-[15px]'>House Details - {data.HouseNo}</h1>
//                 <p className='mt-[10px] font-semibold'>{panchayathName} - Ward {wardNo}</p>
//                 <div className=' flex gap-[25px]'>
//                     <div className='w-[60%]'>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Basic Information</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>House Number</p>
//                                     <p>{data.HouseNo}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Owner Name</p>
//                                     <p>{data.HouseholdHead}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Address</p>
//                                     <p>{data.HouseName}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Phone</p>
//                                     <p>+91 9876543210</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Post Office</p>
//                                     <p>{data.PostOffice}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Pincode</p>
//                                     <p>{data.Pincode}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>No. of Family Members</p>
//                                     <p>{data.FamilymemberNO}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Ration Card Type</p>
//                                     <p>{data.RationCardType}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Type of House</p>
//                                     <p>{data.TypeofHouse}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Area of House</p>
//                                     <p>{data.AreaofHouse}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Number of Vehicles</p>
//                                     <p>{data.NoofVehicles == "" ? "null" : data.NoofVehicles}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Area of Land_Paddyland</p>
//                                     <p>{data.AreaofLand_Paddyland == "" ? "null" : data.AreaofLand_Paddyland}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Area of Land_Dryland</p>
//                                     <p>{data.AreaofLand_Dryland == "" ? "null" : data.AreaofLand_Dryland}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Area of Land_Wetland</p>
//                                     <p>{data.AreaofLand_Wetland == "" ? "null" : data.AreaofLand_Wetland}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Area of Land_Pond</p>
//                                     <p>{data.AreaofLand_Pond == "" ? "null" : data.AreaofLand_Pond}</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Area of Land_Chaalu</p>
//                                     <p>{data.AreaofLand_Chaalu == "" ? "null" : data.AreaofLand_Chaalu}</p>
//                                 </div>

//                                 <div className='py-5'>
//                                     <p>Current Cultivation Details</p>
//                                     <p>{data.CurrentCultivationDetails}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-[40%]'>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Tax Information</h1>

//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Tax Status</p>
//                                 <span className='bg-[#dcfce7] px-[10px] py-[5px] rounded-2xl text-[#306534] font-semibold'>Paid</span>
//                             </div>
//                             <div className='py-5'>
//                                 <p>Last Payment</p>
//                                 <p>2024-01-15</p>
//                             </div>
//                             <button className='text-white bg-[#2563eb] w-full flex justify-center items-center py-[8px] rounded-[10px]'>View Tax History</button>
//                         </div>


//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Utility Connections</h1>

//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Availability of Clean Water</p>
//                                 <p>{data.AvailabilityofCleanWater}</p>
//                             </div>
//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Electricity</p>
//                                 <p>{data.Electricity ? "Yes" : "No"}</p>
//                             </div>
//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Solar</p>
//                                 <p>{data.Solar ? "Yes" : "No"}</p>
//                             </div>

//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Gas Connection</p>
//                                 <p>{data.GasConnection ? "Yes" : "No"}</p>
//                             </div>
//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Wood Stove</p>
//                                 <p>{data.WoodStove ? "Yes" : "No"}</p>
//                             </div>
//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Type of Wood Stove</p>
//                                 <p>{data.TypeofWoodStove == "" ? "null" : data.TypeofWoodStove}</p>
//                             </div>

//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Toilet Facility</p>
//                                 <p>{data.ToiletFacilities ? "Yes" : "No"}</p>
//                             </div>
//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Organic Waste Management Method</p>
//                                 <p>{data.OrganicWasteManagementMethod == "" ? "null" : data.OrganicWasteManagementMethod}</p>
//                             </div>
//                             <div className='mt-[15px] flex justify-between'>
//                                 <p>Inorganic Waste Management Method</p>
//                                 <p>{data.InorganicWasteManagementMethod == "" ? "null" : data.InorganicWasteManagementMethod}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=' w-full border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                     <h1 className='text-[20px] lg:text-[25px] font-bold'>Family Members</h1>
//                     <table className="w-full  border-collaps mt-[20px]">
//                         <thead className="bg-gray-100">
//                             <tr className="text-[#707d8f] bg-[#f9fafb] ">
//                                 <th className=" px-4 py-3 text-left text-[15px]">Sl No</th>
//                                 <th className=" px-4 py-3 text-left text-[15px]">NAME</th>
//                                 <th className=" px-4 py-3 text-left text-[15px]">AGE</th>
//                                 <th className=" px-4 py-3 text-left text-[15px]">GENDER</th>
//                                 <th className=" px-4 py-3 text-left text-[15px]">RELATION</th>
//                                 <th className=" px-4 py-3 text-left text-[15px]">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {familyData.length > 0 ? (
//                                 familyData.map((member, index) => (
//                                     <tr key={member._id} className="hover:bg-gray-50 border-b-1 border-gray-300">
//                                         <td className="p-4">{index + 1}</td>

//                                         <td className="p-4"><p className='font-semibold'>{member.Name}</p></td>
//                                         <td className="p-4 font-semibold">{member.Age}</td>
//                                         <td className="p-4">{member.Gender}</td>
//                                         <td className="p-4">{member.Relation}</td>
//                                         <td className="p-4  text-[#534ae6]  ">
//                                             <button onClick={() => handleClick(member.Name, member.Age, member.Userid)}>
//                                                 View details
//                                             </button>
//                                         </td>

//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="7" className="text-center py-4 text-gray-500">
//                                         No family members found
//                                     </td>
//                                 </tr>
//                             )
//                             }

//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default BasicDetails






import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import useHomeStore from "../store/homeStore";

function BasicDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { houseId } = useParams();

  console.log(houseId,"house id")

  const { panchayathName, wardNo } = location.state || {};

  console.log(location.state)

  const {  singleHouse,familyData, fetchIndividualHouseDetails, loading } = useHomeStore();

  console.log(singleHouse)

  useEffect(() => {
    if (houseId) fetchIndividualHouseDetails(houseId,wardNo);
  }, [houseId]);
//   console.log(singleHouse);
  

  function handleClick(personalId, name, age, userid) {
    navigate(`/member/${personalId}`, { state: { name, age, userid } });
  }

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">
  //       Loading house details...
  //     </div>
  //   );

  if (loading || !singleHouse) {
  return (
    <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">
      Loading house details...
    </div>
  );
}


  return (
    <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]">
      {/* 🔹 Back Button */}
      <div className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer">
        <p>
          <FaArrowLeft />
        </p>
        <p onClick={() => navigate(-1)}>Back to Dashboard</p>
      </div>

      {/* 🔹 Title */}
      <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
        House Details - {singleHouse?.HouseNo}
      </h1>
      <p className="mt-[10px] font-semibold">
        {panchayathName} - Ward {wardNo}
      </p>

      <div className="flex gap-[25px]">
        {/* ✅ Left Section - Basic Info */}
        <div className="w-[60%]">
          <div className="border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl">
            <h1 className="text-[20px] lg:text-[25px] font-bold">
              Basic Information
            </h1>
            <div className="grid grid-cols-2">
              {[
                ["House Number", singleHouse.HouseNo],
                ["Owner Name", singleHouse.HouseholdHead],
                ["Address", singleHouse.HouseName],
                ["Post Office", singleHouse.PostOffice],
                ["Pincode", singleHouse.Pincode],
                ["No. of Family Members", singleHouse.FamilymembersNO],
                ["Ration Card Type", singleHouse.RationCardType],
                ["Type of House", singleHouse.TypeofHouse],
                ["Area of House", singleHouse.AreaofHouse],
                ["Number of Vehicles", singleHouse.NoofVehicles || "null"],
                ["Area of Land_Paddyland", singleHouse.AreaofLand_Paddyland || "null"],
                ["Area of Land_Dryland", singleHouse.AreaofLand_Dryland || "null"],
                // ["Area of Land_Wetland", singleHouse.AreaofLand_Wetland || "null"],
                // ["Area of Land_Pond", singleHouse.AreaofLand_Pond || "null"],
                // ["Area of Land_Chaalu", singleHouse.AreaofLand_Chaalu || "null"],
                ["Current Cultivation Details", singleHouse.CurrentCultivationDetails],
              ].map(([label, value], index) => (
                <div className="py-5" key={index}>
                  <p>{label}</p>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Right Section - Tax + Utilities */}
        <div className="w-[40%]">
          {/* Tax Info */}
          <div className="border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl">
            <h1 className="text-[20px] lg:text-[25px] font-bold">
              Income Information
            </h1>
            <div className="mt-[15px]">
              <p className="mb-[10px]">Monthly Household Income</p>
              <span className="bg-[#dcfce7] px-[10px] py-[5px] rounded-2xl text-[#306534] font-semibold ">
                {singleHouse.MonthlyHouseholdIncome}
              </span>
            </div>
            {/* <div className="py-5">
              <p>Last Payment</p>
              <p>2024-01-15</p>
            </div>
            <button className="text-white bg-[#2563eb] w-full flex justify-center items-center py-[8px] rounded-[10px]">
              View Tax History
            </button> */}
          </div>

          {/* Utility Info */}
          <div className="border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl">
            <h1 className="text-[20px] lg:text-[25px] font-bold">
              Utility Connections
            </h1>
            {[
              ["Availability of Clean Water", singleHouse.AvailabilityofCleanWater],
              ["Electricity", singleHouse.Electricity ? "Yes" : "No"],
              ["Solar", singleHouse.Solar ? "Yes" : "No"],
              ["Gas Connection", singleHouse.GasConnection ? "Yes" : "No"],
              ["Wood Stove", singleHouse.WoodStove ? "Yes" : "No"],
              ["Type of Wood Stove", singleHouse.TypeofWoodStove || "null"],
              ["Toilet Facility", singleHouse.ToiletFacilities ? "Yes" : "No"],
              ["Organic Waste Management Method", singleHouse.OrganicWasteManagementMethod || "null"],
              ["Inorganic Waste Management Method", singleHouse.InorganicWasteManagementMethod || "null"],
            ].map(([label, value], index) => (
              <div
                className="mt-[15px] flex justify-between"
                key={index}
              >
                <p>{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Family Members Table */}
      <div className="w-full border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl">
        <h1 className="text-[20px] lg:text-[25px] font-bold">Family Members</h1>
        <table className="w-full mt-[20px] border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-[#707d8f] bg-[#f9fafb]">
              <th className="px-4 py-3 text-left text-[15px]">Sl No</th>
              <th className="px-4 py-3 text-left text-[15px]">NAME</th>
              <th className="px-4 py-3 text-left text-[15px]">AGE</th>
              <th className="px-4 py-3 text-left text-[15px]">GENDER</th>
              <th className="px-4 py-3 text-left text-[15px]">RELATION</th>
              <th className="px-4 py-3 text-left text-[15px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {familyData.length > 0 ? (
              familyData.map((member, index) => (
                <tr key={member._id} className="hover:bg-gray-50 border-b">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-semibold">{member.Name}</td>
                  <td className="p-4 font-semibold">{member.Age}</td>
                  <td className="p-4">{member.Gender}</td>
                  <td className="p-4">{member.Relation}</td>
                  <td className="p-4 text-[#534ae6] cursor-pointer">
                    <button
                      onClick={() =>
                        handleClick(member._id, member.Name, member.Age, member.Userid)
                      }
                    >
                      View details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No family members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BasicDetails;
