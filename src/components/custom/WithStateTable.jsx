// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCell,
// } from "../ui/table";
// import { FaPlus } from "react-icons/fa";
// import { Card, CardContent } from "../ui/card";
// import { useSelector } from "react-redux";
// import { transformAcademicSession } from "@/lib/convertAcademicSession";

// const courseTitles = {
//   twohundredlevel: ["Anatomy", "Physiology", "Biochemistry"],
//   threehundredlevel: ["Anatomy", "Physiology", "Biochemistry"],
//   fourhundredlevel: ["Pathology", "Pharmacology"],
//   fivehundredlevel: [
//     "Obstetrics and Gynaecology",
//     "Paediatrics",
//     "Dermatology",
//     "Mental health",
//   ],
//   sixhundredlevel: ["Medicine", "Surgery", "Community Health"],
// };

// const coursesArray = Object.keys(courseTitles);

// const EditableCell = ({ onSave, className }) => {
//   const [editing, setEditing] = useState(false);
//   const [cellValue, setCellValue] = useState("");

//   const handleDoubleClick = () => {
//     setEditing(true);
//   };

//   const handleBlur = () => {
//     setEditing(false);
//     onSave(cellValue);
//   };

//   const handleChange = (e) => {
//     setCellValue(e.target.innerText);
//   };

//   return (
//     <td
//       onDoubleClick={handleDoubleClick}
//       onBlur={handleBlur}
//       contentEditable={editing}
//       suppressContentEditableWarning={true}
//       onInput={handleChange}
//       className={`${className} min-w-[100px] h-[25px]`} // Adjust these values as needed
//     >
//       {cellValue}
//     </td>
//   );
// };

// const TableSection = ({ levelIndex }) => {
//   const { selectedStudentData: data } = useSelector((st) => st.app);

//   const levelCourses = courseTitles[coursesArray[levelIndex]];
//   const initialRow = Array(levelCourses.length).fill("");

//   return (
//     <Table>
//       <TableHeader className="border-primaryGray">
//         <TableRow className="bg-placeholder text-black" isHeaderRow={true}>
//           {levelCourses.map((course, index) => (
//             <TableHead
//               key={index}
//               className="capitalize text-black font-bold text-center"
//             >
//               {course}
//             </TableHead>
//           ))}
//         </TableRow>
//       </TableHeader>

//       <TableBody className="border-primaryGray">
//         <TableRow key={1}>
//           {initialRow.map((_, index) => (
//             <EditableCell
//               key={index}
//               onSave={(value) => console.log(`Saved value: ${value}`)} // Replace with your onSave logic
//               className="border-r border-primaryGray text-black font-bold text-center"
//             />
//           ))}
//         </TableRow>
//       </TableBody>
//     </Table>
//   );
// };

// const UploadTable = () => {
//   const [numberOfLevels, setNumberOfLevels] = useState(1);
//   const { selectedStudentData: data, setSelectedStudentData } = useSelector(
//     (st) => st.app
//   );

//   const [tableData, setTableData] = useState([
//     {
//       level: "twoHundredLevel",
//       courses: courseTitles["twoHundredLevel"].map((x) => ({
//         courseTitle: x,
//         courseScore: "",
//         courseGrade: "",
//       })),
//     },
//   ]);

//   const handleAddLevel = () => {
//     if (numberOfLevels < coursesArray.length) {
//       setNumberOfLevels((prev) => prev + 1);
//     }

//     setTableData((prev) => [
//       ...prev,
//       {
//         level: coursesArray[numberOfLevels], //uses the previous number of levels which equals to the index
//         courses: courseTitles[coursesArray[numberOfLevels]].map((x) => ({
//           courseTitle: x,
//           courseScore: "",
//           courseGrade: "",
//         })),
//       },
//     ]);
//   };

//   useEffect(() => {
//     console.log("Table Data Changed:", 1);
//   }, [tableData]);
  
//   useEffect(() => {
//     console.log(tableData);
//     console.log(numberOfLevels);

//   }, [tableData,numberOfLevels]);

//   const handleLogTableData = () => {
//     // Gather data from the table
//   };

//   return (
//     <Card className="mb-5">
//       <CardContent className="pt-8">
//         <div className="flex flex-col gap-5 mb-10">
//           {[...Array(numberOfLevels)].map((_, index) => (
//             <div key={index} className="border-primaryGray border rounded">
//               <div className="h-[40px] w-full grid items-center px-2">
//                 <div className="border-r font-bold border-primaryGray grid items-center h-full w-[fit-content]">
//                   <span className="mr-5">
//                     {`${index + 2}00L ${transformAcademicSession(
//                       data.academicSessionAdmitted
//                     )} Session`}
//                   </span>
//                 </div>
//               </div>
//               <TableSection levelIndex={index} />
//             </div>
//           ))}
//         </div>

//         {numberOfLevels < coursesArray.length && (
//           <div className="flex justify-center items-center">
//             <button
//               onClick={()=> (console.log('object'))}
//               type="button"
//               className="flex items-center"
//             >
//               {/* <FaPlus className="text-xl mr-2" /> */}
//               {/* <span>Add New Year</span> */}
//             </button>
//           </div>
//         )}

//         <div className="flex justify-center mt-5">
//           <button onClick={handleLogTableData} className="btn-primary">
//             Log Table Data
//           </button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default UploadTable;
