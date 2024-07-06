"use client";
import { useRef } from "react";
import ResultsTable from "../components/custom/ResultsTable";
import Student from "../components/custom/StudentProfileLayout";
import { Button } from "../components/ui/button";
import {  generateTranscript } from "@/components/custom/PDF";
import { downloadData } from "@/_data/studentOne";

// import html2pdf from "html2pdf.js";

export default function ResultsPage({ params }) {
  const resultsTableRef = useRef(null);

  const handleGenerateTranscript = () => {
    // Ensure that the resultsTableRef has a current value
    console.log(downloadData)
    generateTranscript(downloadData)
  };

  return (
    <>
      <Student>
        <div className="w-[80%] min-w-[300px] py-14 flex flex-col ">
          <h2 className="font-bold capitalize mb-4 text-[24px]">
            Student's result
          </h2>
          <ResultsTable ref={resultsTableRef} />
          <Button
            className="capitalize self-end"
            variant="destructive"
            onClick={handleGenerateTranscript}
          >
            Generate Transcript
          </Button>
        </div>
      </Student>
    </>
  );
}
