import { useDispatch, useSelector } from "react-redux";
import StudentProfileLayout from "@/components/custom/StudentProfileLayout";
import { Button } from "@/components/ui/button";
import EditableTable from "@/components/custom/EditableTable";
import axios from "axios";
import { token } from "@/app/GlobalRedux/slices/UserSlice";

export default function UploadPage() {
  const dispatch = useDispatch();
  const { selectedStudentData: data } = useSelector((st) => st.app);

  const handleUploadResults = async () => {
    try {
      console.log("Starting upload...");

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/api/transcript/my-transcript/${data._id}`,
        data,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log("Upload successful:", response.data);
      // Optionally return data or trigger additional logic
      return response.data;
    } catch (error) {
      console.error("Error uploading results:", error);
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
