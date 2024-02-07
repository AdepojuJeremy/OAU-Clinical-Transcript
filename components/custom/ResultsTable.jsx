import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

//would change this later
import students from "@/schem.json";

const TableSection = () => {
  return (
    <Table>
      <TableHeader className="border-primaryGray">
        <TableRow className=" bg-placeholder text-black" isHeaderRow={true}>
          <TableHead className="capitalize text-black font-bold text-center">
            Anatomy
          </TableHead>{" "}
          <TableHead className="capitalize text-black font-bold text-center">
            Biochemistry
          </TableHead>
          <TableHead className="text-black capitalize font-bold text-center">
            Physiology
          </TableHead>{" "}
        </TableRow>
      </TableHeader>
      <TableBody className="border-primaryGray">
        <TableRow key={1}>
          <TableCell className="border-r border-primaryGray text-black font-bold text-center">
            {" "}
            {"70"}
          </TableCell>
          <TableCell className=" border-r border-primaryGray text-black font-bold text-center">
            {"70"}
          </TableCell>
          <TableCell className=" border-primaryGray  text-black font-bold text-center">
            {"70"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
const ResultsTable = ({ params }) => {
  return (
    <Card className="mb-5">
      <CardContent className="pt-8">
        <div className=" flex flex-col gap-5 mb-10">
          <div className="border-primaryGray border rounded ">
            <div className="h-[40px] w-full grid items-center px-2">
              <div className="border-r font-bold border-primaryGray grid items-center h-full w-[fit-content]  pr-3">
                300L 19/20 Session{" "}
              </div>
            </div>

            <TableSection />
          </div>
          <Button className="self-end " variant="pass">
            Pass
          </Button>
        </div>

        <div className=" flex flex-col gap-5 mb-10">
          <div className="border-primaryGray border rounded ">
            <div className="h-[40px] w-full grid items-center px-2">
              <div className="border-r font-bold border-primaryGray grid items-center h-full w-[fit-content]  pr-3">
                300L 19/20 Session{" "}
              </div>
            </div>

            <TableSection />
          </div>
          <Button className="self-end " variant="resit">
            resit
          </Button>
        </div>

        <div className=" flex flex-col gap-5 mb-10">
          <div className="border-primaryGray border rounded ">
            <div className="h-[40px] w-full grid items-center px-2">
              <div className="border-r font-bold border-primaryGray grid items-center h-full w-[fit-content]  pr-3">
                300L 19/20 Session{" "}
              </div>
            </div>

            <TableSection />
          </div>
          <Button className="self-end " variant="repeat">
            Repeat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsTable;
