import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentProfileLayout from "@/components/custom/StudentProfileLayout";
import { Button } from "@/components/ui/button";
import EditableTable from "@/components/custom/EditableTable";
import { uploadResults } from "your-redux-actions-path"; // Update with your actual path

export default function UploadPage() {
  const dispatch = useDispatch();
  const { selectedStudentData: data } = useSelector((st) => st.app);

  const handleUploadResults = async (identifier, data) => {
    try {
      console.log("Starting upload...");

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/api/transcript/my-transcript/${identifier}`,
        data
      );

      console.log("Upload successful:", response.data);
      // Optionally return data or trigger additional logic
      return response.data;
    } catch (error) {
      console.error("Error uploading results:", error);
      // Optionally handle the error, display a user-friendly message, or throw it again
      throw error;
    }
  };

  return (
    <>
      <StudentProfileLayout>
        <div className="w-[80%] min-w-[300px] py-14 flex flex-col ">
          <h2 className="font-bold capitalize text-OrangeOau mb-4 text-[24px]">
            Input Results
          </h2>
          <EditableTable />
          <Button
            className="capitalize self-end"
            variant="default"
            onClick={handleUploadResults}
          >
            Upload Results
          </Button>
        </div>
      </StudentProfileLayout>
    </>
  );
}
