"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaPlus } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedStudentData } from "@/app/GlobalRedux/slices/AppSlice";
const EditableCell = ({ value, onSave, className }) => {
  const [editing, setEditing] = useState(false);
  const [cellValue, setCellValue] = useState(value);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
    onSave(cellValue);
  };

  const handleChange = (e) => {
    setCellValue(e.target.innerText);
  };
  return (
    <td
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      contentEditable={editing}
      suppressContentEditableWarning={true}
      onInput={handleChange}
      className={className}
    >
      {cellValue}
    </td>
  );
};

const TableSection = ({ level, levelName }) => {
  const { selectedStudentData: data } = useSelector((st) => st.app);
  const dispatch = useDispatch()

  const handleCellSave = async (index, value) => {
    const updatedDetails = data.details.map((levelDetails) => {
      const updatedLevel = Object.entries(levelDetails).reduce(
        (acc, [level, courses]) => {
          if (courses.some((course, i) => i === index)) {
            // Update the course score for the specific index
            const updatedCourses = courses.map((course, i) =>
              i === index ? { ...course, courseScore: value } : course
            );
            // Ensure the courses are sorted alphabetically by course title
            updatedCourses.sort((a, b) =>
              a.courseTitle.localeCompare(b.courseTitle)
            );
            // Update the level in the details
            acc[level] = updatedCourses;
          } else {
            // Maintain other levels without changes
            acc[level] = courses;
          }
          return acc;
        },
        {}
      );
      return updatedLevel;
    });
  
    // Combine the updated details with the rest of the data
    const updatedData = { ...data, details: updatedDetails };
  
    // Dispatch the action to update selectedStudentData in Redux store
    dispatch(setSelectedStudentData(updatedData));
  };
  
  return (
    <Table>
      <TableHeader className="border-primaryGray">
        <TableRow className=" bg-placeholder text-black" isHeaderRow={true}>
          {level.map((course, index) => (
            <TableHead
              key={index}
              className="capitalize text-black font-bold text-center"
            >
              {course.courseTitle}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="border-primaryGray">
        <TableRow key={1}>
          {level.map((course, index) => (
            <EditableCell
              key={index}
              value={course.courseScore}
              onSave={(value) => handleCellSave(index,value)}
              className="border-r border-primaryGray text-black font-bold text-center"
            />
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

const UploadTable = () => {
  const { selectedStudentData: data } = useSelector((st) => st.app);
  const classes = Object.keys(data.details[0]);

  return (
    <Card className="mb-5">
      <CardContent className="pt-8">
        {classes.slice(0, -2).map((level, index) => {
          const levelArr = data.details[0][level];
          return (
            <div key={index} className=" flex flex-col gap-5 mb-10">
              <div className="border-primaryGray border rounded ">
                <div className="h-[40px] w-full grid items-center px-2">
                  <div className="border-r font-bold border-primaryGray grid items-center h-full w-[fit-content] ">
                    <span className="mr-5">
                      {" "}
                      {`${index + 2}00L 19/20 Session`}
                    </span>
                  </div>
                </div>

                <TableSection level={levelArr} levelName = {level} />
              </div>
            </div>
          );
        })}
        <div className="flex justify-center items-center cursor-pointer" >
          <FaPlus className="text-xl mr-2" />
          <span>Add New Table</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadTable;
