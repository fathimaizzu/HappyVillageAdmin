// import { useEffect, useState } from "react";

// function Panchayatpage() {
//   // const [data, setData] = useState(null);
//   const [selectedPanchayath, setSelectedPanchayath] = useState("");
//   const [selectedWard, setSelectedWard] = useState("");
//   const [healthFilter, setHealthFilter] = useState("");

//   useEffect(() => {
//     fetch("/panchayat.json")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);

//   if (!data) return <p className="text-center text-gray-500">Loading data...</p>;

//   const { pageTitle, panchayaths } = data;

//   const filteredWards =
//     panchayaths.find((p) => p.id === Number(selectedPanchayath))?.wards || [];

//   const filteredHouses = filteredWards.find(
//     (w) => w.id === Number(selectedWard)
//   )?.houses || [];

//   const filteredFamilies = filteredHouses.flatMap((h) => h.family);

//   const finalResult = healthFilter
//     ? filteredFamilies.filter((m) => m.health.status === healthFilter)
//     : filteredFamilies;

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Page Title from API */}
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//         {pageTitle}
//       </h1>

//       {/* Filters Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         {/* Panchayath Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-2">Panchayath</label>
//           <select
//             className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             value={selectedPanchayath}
//             onChange={(e) => {
//               setSelectedPanchayath(e.target.value);
//               setSelectedWard("");
//             }}
//           >
//             <option value="">--Select Panchayath--</option>
//             {panchayaths.map((p) => (
//               <option key={p.id} value={p.id}>
//                 {p.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Ward Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-2">Ward</label>
//           <select
//             className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200"
//             value={selectedWard}
//             onChange={(e) => setSelectedWard(e.target.value)}
//             disabled={!selectedPanchayath}
//           >
//             <option value="">--Select Ward--</option>
//             {filteredWards.map((w) => (
//               <option key={w.id} value={w.id}>
//                 {w.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Health Filter */}
//         <div className="flex flex-col">
//           <label className="text-gray-700 font-medium mb-2">Health Status</label>
//           <select
//             className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             value={healthFilter}
//             onChange={(e) => setHealthFilter(e.target.value)}
//           >
//             <option value="">All</option>
//             <option value="Good">Good</option>
//             <option value="Moderate">Moderate</option>
//             <option value="Poor">Poor</option>
//           </select>
//         </div>
//       </div>

//       {/* Results Section */}
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Results</h2>
//       {finalResult.length === 0 ? (
//         <p className="text-center text-red-500">No records found</p>
//       ) : (
//         <div className="overflow-x-auto shadow rounded-lg">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="py-2 px-4 text-left">Name</th>
//                 <th className="py-2 px-4 text-left">Age</th>
//                 <th className="py-2 px-4 text-left">Education</th>
//                 <th className="py-2 px-4 text-left">Occupation</th>
//                 <th className="py-2 px-4 text-left">Health</th>
//               </tr>
//             </thead>
//             <tbody>
//               {finalResult.map((m) => (
//                 <tr
//                   key={m.id}
//                   className="border-b hover:bg-gray-50 transition-colors"
//                 >
//                   <td className="py-2 px-4">{m.name}</td>
//                   <td className="py-2 px-4">{m.age}</td>
//                   <td className="py-2 px-4">{m.education}</td>
//                   <td className="py-2 px-4">{m.occupation}</td>
//                   <td className="py-2 px-4">{m.health.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Panchayatpage;



import { useEffect, useState } from "react";
import data from "../../public/panchayat.json"

function Panchayathpage() {
  const [selectedPanchayath, setSelectedPanchayath] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [eduFilter, setEduFilter] = useState("");

  // Data directly from imported JSON
  const { panchayaths, others } = data;

  const filteredWards =
    panchayaths.find((p) => p.id === Number(selectedPanchayath))?.wards || [];

  const filteredHouses =
    filteredWards.find((w) => w.id === Number(selectedWard))?.houses || [];

  // Extract house details (each house has one details object)
  const houseDetails = filteredHouses.map((h) => ({
    houseId: h.id,
    houseNumber: h.houseNumber,
    ...h.details,
  }));

  // Apply filter (if any)
  const finalResult = eduFilter
    ? houseDetails.filter((d) => d.EducationalQualification === eduFilter)
    : houseDetails;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Panchayath Data
      </h1>
 */}
      {/* Filters */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> */}
        {/* Panchayath Dropdown */}
        {/* <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Panchayath</label>
          <select
            className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedPanchayath}
            onChange={(e) => {
              setSelectedPanchayath(e.target.value);
              setSelectedWard("");
            }}
          >
            <option value="">--Select Panchayath--</option>
            {panchayaths.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div> */}

        {/* Ward Dropdown */}
        {/* <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">Ward</label>
          <select
            className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-200"
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
            disabled={!selectedPanchayath}
          >
            <option value="">--Select Ward--</option>
            {filteredWards.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name}
              </option>
            ))}
          </select>
        </div>
 */}
        {/* Education Filter */}
        {/* <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-2">
            Educational Qualification
          </label>
          <select
            className="rounded-lg border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={eduFilter}
            onChange={(e) => setEduFilter(e.target.value)}
          >
            <option value="">All</option> */}
            {/* Add from houses + others */}
            {/* {[
              ...new Set([
                ...panchayaths.flatMap((p) =>
                  p.wards.flatMap((w) =>
                    w.houses.map((h) => h.details?.EducationalQualification)
                  )
                ),
                ...others.map((o) => o.EducationalQualification),
              ]),
            ]
              .filter(Boolean)
              .map((q, i) => (
                <option key={i} value={q}>
                  {q}
                </option>
              ))}
          </select>
        </div> */}
      {/* </div> */}

      {/* Results */}
      {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Results</h2>
      {finalResult.length === 0 ? (
        <p className="text-center text-red-500">No records found</p>
      ) : ( */}
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-[#4857AC] text-white">
              <tr>
                <th className="py-2 px-4 text-left">Sl No</th>
                <th className="py-2 px-4 text-left">House No</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Contact</th>
                <th className="py-2 px-4 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {/* {finalResult.map((d) => ( */}
                <tr
                  // key={d.houseId}
                  className="border-b hover:bg-gray-50 transition-colors "
                >
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">20</td>
                  <td className="py-2 px-4">Dev</td>
                  <td className="py-2 px-4">Devabhavan</td>
                  <td className="py-2 px-4">8945762084</td>
                  <td className="py-2 px-4"><button className="border-2 text-white bg-[#4857AC] px-[25px] py-[8px] rounded-[10px]">Details</button></td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
    
    </div>
  );
}

export default Panchayathpage