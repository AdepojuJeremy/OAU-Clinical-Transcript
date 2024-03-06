"use client";
import { useRef } from "react";
import ResultsTable from "@/components/custom/ResultsTable";
import StudentProfileLayout from "@/components/custom/StudentProfileLayout";
import { Button } from "@/components/ui/button";

// import html2pdf from "html2pdf.js";

export default function ResultsPage({ params }) {
  const resultsTableRef = useRef(null);

  const handleGenerateTranscript = () => {
    // Ensure that the resultsTableRef has a current value
    console.log("Handle generate transcript page.");
    // if (resultsTableRef.current) {
    //   const pdfOptions = {
    //     margin: 10,
    //     filename: "transcript.pdf",
    //     image: { type: "jpeg", quality: 0.98 },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    //   };

    //   html2pdf(resultsTableRef.current, pdfOptions);
    // }
  };

  return (
    <>
      <StudentProfileLayout>
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
      </StudentProfileLayout>
    </>
  );
}
