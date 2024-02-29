import EditableTable from "@/components/custom/EditableTable";
import StudentProfileLayout from "@/components/custom/StudentProfileLayout";
import { Button } from "@/components/ui/button";

export default async function UploadPage() {
  return (
    <>
      <StudentProfileLayout>
        <div className="w-[80%] min-w-[300px] py-14 flex flex-col ">
          <h2 className="font-bold capitalize text-OrangeOau mb-4 text-[24px]">
            {" "}
            Input Results{" "}
          </h2>
          <EditableTable />
          <Button className="capitalize self-end" variant="default">
            upload Results
          </Button>
        </div>
      </StudentProfileLayout>
    </>
  );
}
