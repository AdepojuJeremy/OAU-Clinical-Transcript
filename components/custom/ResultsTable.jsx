"use client"

import React, {useState} from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { useDispatch, useSelector } from "react-redux";
// import { setPasswordVisible } from "@/app/GlobalRedux/slices/AppSlice";


const ResultsTable = () => {
  const [data,setData] = useState()
  fetch('@/studentData.json')
  .then(response => response.json())
  .then(data => {
    // Access the data object
    console.log(data);
    // You can now use the data object to populate your web application,
    // such as displaying student information or calculating statistics.
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  return (
   
      <Card className="mb-5">
        <CardContent className="pt-8">
          {data?.details?.map((level, index) => ( // Check if data.details exists
            <div key={index} className=" flex flex-col gap-5 mb-10">
              <div className="border-primaryGray border rounded ">
                <div className="h-[40px] w-full grid items-center px-2">
                  <div className="border-r font-bold border-primaryGray grid items-center h-full w-[fit-content]  pr-3">
                    {`${index + 2}00L 19/20 Session`}
                  </div>
                </div>
    
                <TableSection level={level} />
              </div>
              {/* Button logic can be implemented here based on data's performance */}
              {/* <Button className="self-end " variant="pass">
                Pass
              </Button> */}
            </div>
          ))}
        </CardContent>
      </Card>
    );

};

const TableSection = ({ level }) => {
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
            <TableCell
              key={index}
              className="border-r border-primaryGray text-black font-bold text-center"
            >
              {course.courseScore}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
