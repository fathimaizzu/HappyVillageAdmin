// import React, { useEffect } from 'react'
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import PersonalInfo from '../component/Members/PersonalInfo';
// import { FaArrowLeft } from "react-icons/fa6";
// import axios from 'axios';


// function Members() {

//     const navigate = useNavigate()
//     const location = useLocation()
//     const params = useParams()
//     console.log(params, location);

//     const { personalId } = params
//     const { name,age,userid } = location.state || {};
  


//     const personalInfo = async () => {
//         try {
//             const res = await axios.get(`http://103.191.208.95/api/v1/admin/personalDetails?Name=${name}&Age=${age}&Userid=${userid}` );
//         }

//         catch {

//         }
//     }
//     useEffect(() => {
//         personalInfo()
//     }, [])

//     return (
//         <div>
//             <div className='py-[25px] px-[50px] lg:[80px] xl:px-[100px]'>
//                 <div className='flex  items-center gap-[10px] text-[#7181ee]'>
//                     <p><FaArrowLeft /></p>
//                     <p onClick={() => navigate(-1)}>Back to Dasboard</p>
//                 </div>
//                 <h1 className='text-[25px] lg:text-3xl font-bold mt-[15px]'>Member Details - Rajesh Kumar</h1>
//                 <p className='mt-[10px]'>Member Details - Rajesh Kumar</p>
//                 <div className='flex gap-[25px]'>
//                     <div className='w-[70%]'>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl '>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Personal Information</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Full Name</p>
//                                     <p>Rajesh Kumar</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Relation</p>
//                                     <p>Head of Family</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Age</p>
//                                     <p>45 years</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Date of Birth</p>
//                                     <p>1979-05-15</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Gender</p>
//                                     <p>Male</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Marital Status</p>
//                                     <p>Married</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Blood Group</p>
//                                     <p>B+</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Religion</p>
//                                     <p>Hindu</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Caste</p>
//                                     <p>General</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Nationality</p>
//                                     <p>Indian</p>
//                                 </div>



//                             </div>
//                         </div>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Personal Information</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Phone Number</p>
//                                     <p>+91 9876543210</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Email Address</p>
//                                     <p>rajesh.kumar@email.com</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Education Details</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Highest Qualification</p>
//                                     <p>Bachelor of Engineering</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Institution</p>
//                                     <p>Government Engineering College</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Year of Passing</p>
//                                     <p>2001</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Specialization</p>
//                                     <p>Civil Engineering</p>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Employment Details</h1>
//                             <div className='grid grid-cols-2'>
//                                 <div className='py-5'>
//                                     <p>Occupation</p>
//                                     <p>Government Employee</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Employer</p>
//                                     <p>Kerala Public Works Department</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Designation</p>
//                                     <p>Assistant Engineer</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Monthly Salary</p>
//                                     <p>₹65,000</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Work Address</p>
//                                     <p>PWD Office, Kozhikode</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p></p>
//                                     <p></p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Experience</p>
//                                     <p>20 years</p>
//                                 </div>
//                                 <div className='py-5'>
//                                     <p>Joining Date</p>
//                                     <p>2004-06-01</p>
//                                 </div>


//                             </div>
//                         </div>



//                     </div>
//                     <div className=' w-[30%]'>
//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Health Information</h1>
//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Health Status</p>
//                                 <span className='bg-[#dbeafe] px-[10px] py-[4px] rounded-2xl text-[#1e43b1] font-semibold'>Good</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Blood Pressure</p>
//                                 <span className=''>120/80</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Chronic Diseases</p>
//                                 <span className='bg-[#fee2e2] px-[10px] py-[5px] rounded-2xl text-[#9a1d1c] font-semibold'>Diabetes</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p className='mb-[5px]'>Allergies</p>
//                                 <span className='bg-[#ffedd5] px-[10px] py-[5px] rounded-2xl text-[#bf6436]'>Peanuts</span>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Last Checkup</p>
//                                 <p className=''>2024-01-15</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Insurance Number</p>
//                                 <p className=''>INS123456789</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Emergency Contact</p>
//                                 <p className=''>+91 9876543211</p>
//                             </div>



//                         </div>

//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Government IDs</h1>
//                             <div className='mt-[15px]'>
//                                 <p>Aadhar Number</p>
//                                 <p className=''>1234-5678-9012</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>PAN Number</p>
//                                 <p className=''>PAN Number</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Voter ID</p>
//                                 <p className=''>ABC1234567</p>
//                             </div>
//                         </div>

//                         <div className='border-0 shadow-2xl mt-[20px] py-[30px] px-[20px] rounded-2xl'>
//                             <h1 className='text-[20px] lg:text-[25px] font-bold'>Bank Details</h1>
//                             <div className='mt-[15px]'>
//                                 <p>Bank Name</p>
//                                 <p className=''>State Bank of India</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Branch</p>
//                                 <p className=''>Kozhikode Main Branch</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>Account Number</p>
//                                 <p className=''>1234567890123456</p>
//                             </div>
//                             <div className='mt-[15px]'>
//                                 <p>IFSC Code</p>
//                                 <p className=''>SBIN0001234</p>
//                             </div>

//                         </div>


//                     </div>
//                 </div>
//                 <div></div>


//             </div>



//         </div>

//     )
// }

// export default Members





// import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import useHomeStore from "../store/homeStore";

// function Members() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = useParams();

//   const { personalId } = params;
//   const { name, age, userid } = location.state || {};

//   const { personalData, loading, error, fetchPersonalData } = useHomeStore();

//   useEffect(() => {
//     if (name && age && userid) {
//       fetchPersonalData(name, age, userid);
//     }
//   }, [name, age, userid, fetchPersonalData]);

//   if (loading) return <p className="p-10 text-xl">Loading member data...</p>;
//   if (error) return <p className="p-10 text-red-500">Error: {error}</p>;

//   return (
//     <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px]">
//       <div className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer">
//         <FaArrowLeft />
//         <p onClick={() => navigate(-1)}>Back to Dashboard</p>
//       </div>

//       <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
//         Member Details - {personalData?.Name || "N/A"}
//       </h1>
//       <p className="mt-[10px]">Detailed personal and family information</p>

//       <div className="mt-10">
//         <pre className="bg-gray-100 p-5 rounded-lg text-sm">
//           {JSON.stringify(personalData, null, 2)}
//         </pre>
//       </div>
//     </div>
//   );
// }

// export default Members;





// import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import useHomeStore from "../store/homeStore";

// function Members() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = useParams();

//   const { personalId } = params;
//   const { name, age, userid } = location.state || {};

//   const { personalData, loading, error, fetchPersonalData } = useHomeStore();

//   useEffect(() => {
//     if (name && age && userid) {
//       fetchPersonalData(name, age, userid);
//     }
//   }, [name, age, userid, fetchPersonalData]);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">
//         Loading member data...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex justify-center items-center h-screen text-red-500 text-lg font-semibold">
//         Error: {error}
//       </div>
//     );

//   if (!personalData)
//     return (
//       <div className="flex justify-center items-center h-screen text-gray-600 text-lg font-semibold">
//         No member data found.
//       </div>
//     );

//   return (
//     <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px] bg-[#f9fafb] min-h-screen">
//       {/* 🔹 Back Button */}
//       <div
//         className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer"
//         onClick={() => navigate(-1)}
//       >
//         <FaArrowLeft />
//         <p>Back to Dashboard</p>
//       </div>

//       {/* 🔹 Title */}
//       <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
//         Member Details - {personalData?.Name || "N/A"}
//       </h1>
//       <p className="mt-[10px] text-gray-600">
//         Detailed personal and family information
//       </p>

//       {/* 🔹 Card Section */}
//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Left Card - Personal Information */}
//         <div className="bg-white shadow-2xl rounded-2xl p-6">
//           <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
//             Personal Information
//           </h2>
//           <div className="grid grid-cols-2 gap-y-4">
//             <Info label="Name" value={personalData.Name} />
//             <Info label="Date of Birth" value={personalData.Dob} />
//             <Info label="Blood Group" value={personalData.BloodGroup} />
//             <Info label="Father" value={personalData.Father} />
//             <Info label="Mother" value={personalData.Mother} />
//             <Info label="Artistic / Athletic Aptitude" value={personalData.ArtisticorAthleticAptitude} />
//             <Info label="Rewards or Prizes" value={personalData.RewardsorPrizes} />
//           </div>
//         </div>

//         {/* Right Card - Education & Work */}
//         <div className="bg-white shadow-2xl rounded-2xl p-6">
//           <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
//             Education & Employment
//           </h2>
//           <div className="grid grid-cols-2 gap-y-4">
//             <Info label="Educational Qualification" value={personalData.EducationalQualification} />
//             <Info label="Currently Studying" value={personalData.CurrentlyStudying} />
//             <Info label="Main Subject" value={personalData.EducationMainSubject} />
//             <Info label="Currently Working" value={personalData.CurrentlyWorking ? "Yes" : "No"} />
//             <Info label="Occupation" value={personalData.CurrentOccupation} />
//             <Info label="Institution Name" value={personalData.InstitutionName} />
//             <Info label="Monthly Income" value={personalData.AvgPersonalIncomeperMonth} />
//           </div>
//         </div>

//         {/* Health & Others */}
//         <div className="bg-white shadow-2xl rounded-2xl p-6 lg:col-span-2">
//           <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
//             Health & Other Details
//           </h2>
//           <div className="grid grid-cols-3 gap-y-4">
//             <Info label="Physical Challenges" value={personalData.PhysicalChallenges ? "Yes" : "No"} />
//             <Info label="Mental Challenges" value={personalData.MentalChallenges ? "Yes" : "No"} />
//             <Info label="Exam Stress" value={personalData.ExamTensionsorStress ? "Yes" : "No"} />
//             <Info label="Lifestyle Disease" value={personalData.LifestyleDisease ? "Yes" : "No"} />
//             <Info label="Disease Type" value={personalData.LifestyleDiseaseType || "None"} />
//             <Info label="Getting Pension" value={personalData.GettingPension ? "Yes" : "No"} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* 🔹 Reusable Info Display Component */
// const Info = ({ label, value }) => (
//   <div>
//     <p className="text-gray-500 text-[14px]">{label}</p>
//     <p className="text-[16px] font-semibold text-gray-800">
//       {value || "N/A"}
//     </p>
//   </div>
// );

// export default Members;

// import React, { useEffect } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
// import useHomeStore from "../store/homeStore";

// function Members() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const params = useParams();

//   const { personalId } = params;
//   const { name, age, userid } = location.state || {};

//   const { personalData, loading, error, fetchPersonalData } = useHomeStore();

//   useEffect(() => {
//     if (name && age && userid) {
//       fetchPersonalData(name, age, userid);
//     }
//   }, [name, age, userid, fetchPersonalData]);

//   // 🔹 Loading State
//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">
//         Loading member data...
//       </div>
//     );

//   // 🔹 API Error
//   if (error)
//     return (
//       <div className="flex justify-center items-center h-screen text-red-500 text-lg font-semibold">
//         Error: {error}
//       </div>
//     );

//   // 🔹 Handle “No personal details found” message
//   if (personalData?.message?.includes("No personal details found")) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-center">
//         <h1 className="text-2xl font-semibold text-gray-700 mb-3">
//           No Member Details Found
//         </h1>
//         <p className="text-gray-500 mb-6">
//           No personal details were found for the given user.
//         </p>
//         <button
//           onClick={() => navigate(-1)}
//           className="bg-[#4f46e5] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#4338ca]"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   // 🔹 No Data (undefined or empty)
//   if (!personalData || Object.keys(personalData).length === 0)
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-center">
//         <h1 className="text-2xl font-semibold text-gray-700 mb-3">
//           No Member Data Available
//         </h1>
//         <button
//           onClick={() => navigate(-1)}
//           className="bg-[#4f46e5] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#4338ca]"
//         >
//           Go Back
//         </button>
//       </div>
//     );

//   // ✅ Main Member Card (only if data exists)
//   return (
//     <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px] bg-[#f9fafb] min-h-screen">
//       <div
//         className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer"
//         onClick={() => navigate(-1)}
//       >
//         <FaArrowLeft />
//         <p>Back to Dashboard</p>
//       </div>

//       <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
//         Member Details - {personalData?.Name || "N/A"}
//       </h1>
//       <p className="mt-[10px] text-gray-600">
//         Detailed personal and family information
//       </p>

//       {/* Cards Section */}
//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Personal Information */}
//         <div className="bg-white shadow-2xl rounded-2xl p-6">
//           <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
//             Personal Information
//           </h2>
//           <div className="grid grid-cols-2 gap-y-4">
//             <Info label="Name" value={personalData.Name} />
//             <Info label="Date of Birth" value={personalData.Dob} />
//             <Info label="Blood Group" value={personalData.BloodGroup} />
//             <Info label="Father" value={personalData.Father} />
//             <Info label="Mother" value={personalData.Mother} />
//             <Info label="Artistic / Athletic Aptitude" value={personalData.ArtisticorAthleticAptitude} />
//             <Info label="Rewards or Prizes" value={personalData.RewardsorPrizes} />
//           </div>
//         </div>

//         {/* Education & Employment */}
//         <div className="bg-white shadow-2xl rounded-2xl p-6">
//           <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
//             Education & Employment
//           </h2>
//           <div className="grid grid-cols-2 gap-y-4">
//             <Info label="Educational Qualification" value={personalData.EducationalQualification} />
//             <Info label="Currently Studying" value={personalData.CurrentlyStudying} />
//             <Info label="Main Subject" value={personalData.EducationMainSubject} />
//             <Info label="Currently Working" value={personalData.CurrentlyWorking ? "Yes" : "No"} />
//             <Info label="Occupation" value={personalData.CurrentOccupation} />
//             <Info label="Institution Name" value={personalData.InstitutionName} />
//             <Info label="Monthly Income" value={personalData.AvgPersonalIncomeperMonth} />
//           </div>
//         </div>

//         {/* Health */}
//         <div className="bg-white shadow-2xl rounded-2xl p-6 lg:col-span-2">
//           <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
//             Health & Other Details
//           </h2>
//           <div className="grid grid-cols-3 gap-y-4">
//             <Info label="Physical Challenges" value={personalData.PhysicalChallenges ? "Yes" : "No"} />
//             <Info label="Mental Challenges" value={personalData.MentalChallenges ? "Yes" : "No"} />
//             <Info label="Exam Stress" value={personalData.ExamTensionsorStress ? "Yes" : "No"} />
//             <Info label="Lifestyle Disease" value={personalData.LifestyleDisease ? "Yes" : "No"} />
//             <Info label="Disease Type" value={personalData.LifestyleDiseaseType || "None"} />
//             <Info label="Getting Pension" value={personalData.GettingPension ? "Yes" : "No"} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* Reusable info display */
// const Info = ({ label, value }) => (
//   <div>
//     <p className="text-gray-500 text-[14px]">{label}</p>
//     <p className="text-[16px] font-semibold text-gray-800">{value || "N/A"}</p>
//   </div>
// );

// export default Members;





import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import useHomeStore from "../store/homeStore";

function Members() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const { personalId } = params;
  const { name, age, userid } = location.state || {};

  const { personalData, loading, error, fetchPersonalData } = useHomeStore();

  useEffect(() => {
    if (name && age && userid) {
      fetchPersonalData(name, age, userid);
    }
  }, [name, age, userid, fetchPersonalData]);

  // 🔹 Loading
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">
        Loading member data...
      </div>
    );

  // 🔹 Error
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg font-semibold">
        Error: {error}
      </div>
    );

  // 🔹 If API says “No personal details found”
  if (personalData?.message?.includes("No personal details found")) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center bg-[#f9fafb]">
        <h1 className="text-3xl font-bold text-gray-700 mb-3">No Data Found</h1>
        <p className="text-gray-500 mb-6">
          No personal details were found for this member.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-[#4f46e5] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#4338ca] transition-all"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
    );
  }

  // 🔹 If no data object
  if (!personalData || Object.keys(personalData).length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center bg-[#f9fafb]">
        <h1 className="text-3xl font-bold text-gray-700 mb-3">No Data Available</h1>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-[#4f46e5] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#4338ca] transition-all"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
    );
  }

  // ✅ Normal Card View (only when data exists)
  return (
    <div className="py-[25px] px-[50px] lg:px-[80px] xl:px-[100px] bg-[#f9fafb] min-h-screen">
      {/* Back Button */}
      <div
        className="flex items-center gap-[10px] text-[#7181ee] cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
        <p>Back to Dashboard</p>
      </div>

      <h1 className="text-[25px] lg:text-3xl font-bold mt-[15px]">
        Member Details - {personalData?.Name || "N/A"}
      </h1>
      <p className="mt-[10px] text-gray-600">
        Detailed personal and family information
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white shadow-2xl rounded-2xl p-6">
          <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
            Personal Information
          </h2>
          <div className="grid grid-cols-2 gap-y-4">
            <Info label="Name" value={personalData.Name} />
            <Info label="Date of Birth" value={personalData.Dob} />
            <Info label="Blood Group" value={personalData.BloodGroup} />
            <Info label="Father" value={personalData.Father} />
            <Info label="Mother" value={personalData.Mother} />
            <Info label="Artistic / Athletic Aptitude" value={personalData.ArtisticorAthleticAptitude} />
            <Info label="Rewards or Prizes" value={personalData.RewardsorPrizes} />
          </div>
        </div>

        {/* Education & Employment */}
        <div className="bg-white shadow-2xl rounded-2xl p-6">
          <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
            Education & Employment
          </h2>
          <div className="grid grid-cols-2 gap-y-4">
            <Info label="Educational Qualification" value={personalData.EducationalQualification} />
            <Info label="Currently Studying" value={personalData.CurrentlyStudying} />
            <Info label="Main Subject" value={personalData.EducationMainSubject} />
            <Info label="Currently Working" value={personalData.CurrentlyWorking ? "Yes" : "No"} />
            <Info label="Occupation" value={personalData.CurrentOccupation} />
            <Info label="Institution Name" value={personalData.InstitutionName} />
            <Info label="Monthly Income" value={personalData.AvgPersonalIncomeperMonth} />
          </div>
        </div>

        {/* Health */}
        <div className="bg-white shadow-2xl rounded-2xl p-6 lg:col-span-2">
          <h2 className="text-[20px] font-bold mb-4 border-b pb-2">
            Health & Other Details
          </h2>
          <div className="grid grid-cols-3 gap-y-4">
            <Info label="Physical Challenges" value={personalData.PhysicalChallenges ? "Yes" : "No"} />
            <Info label="Mental Challenges" value={personalData.MentalChallenges ? "Yes" : "No"} />
            <Info label="Exam Stress" value={personalData.ExamTensionsorStress ? "Yes" : "No"} />
            <Info label="Lifestyle Disease" value={personalData.LifestyleDisease ? "Yes" : "No"} />
            <Info label="Disease Type" value={personalData.LifestyleDiseaseType || "None"} />
            <Info label="Getting Pension" value={personalData.GettingPension ? "Yes" : "No"} />
          </div>
        </div>
      </div>
    </div>
  );
}

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-[14px]">{label}</p>
    <p className="text-[16px] font-semibold text-gray-800">{value || "N/A"}</p>
  </div>
);

export default Members;
