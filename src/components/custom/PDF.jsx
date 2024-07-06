import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { convertToDigit } from "@/lib/convertToDigit";

export const generateTranscript = (studentData) => {
    const doc = new jsPDF();
  

    // Add institution details
    doc.setFontSize(18);
    doc.text("Obafemi Awolowo University", 14, 22);
    doc.setFontSize(12);
    doc.text("Ile-Ife, Osun state", 14, 30);
    doc.text("Phone: (123) 456-7890 | Email: info@xyzuniversity.edu", 14, 36);
    doc.text("Academic Transcript", 14, 50);

    // Add student details
    doc.text(`Name: ${studentData.name}`, 14, 60);
    doc.text(`Matric Number: ${studentData.matricNO}`, 14, 66);
    // doc.text(`Date of Birth: ${studentData.dob}`, 14, 72);
    doc.text(`Program: Medicine and Surgery`, 14, 78);
    // doc.text(`Enrollment Dates: ${studentData.enrollmentDates}`, 14, 84);

    // Add academic record table
    doc.autoTable({
      startY: 90,
      head: [["Class", "Course Title", "Score", "Grade"]],
      body: studentData.academicRecord.map((record) => [
        record.term,
        record.courseCode,
        record.courseTitle,
        record.credits,
        record.grade,
      ]),
    });

    // Add GPA
    // doc.text(`Cumulative GPA: ${studentData.cumulativeGPA}`, 14, doc.lastAutoTable.finalY + 10);

    // Save PDF
    doc.save("transcript.pdf");

   
  };
