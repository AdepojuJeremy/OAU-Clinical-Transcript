import ResultsTable from "@/components/custom/ResultsTable";
import StudentProfileLayout from "@/components/custom/StudentProfileLayout";
import { Button } from "@/components/ui/button";


export default async function ResultsPage({ params }) {

  return (
    <>
      <StudentProfileLayout>
        <div className="w-[80%] min-w-[300px] py-14 flex flex-col ">
          <h2 className="font-bold capitalize mb-4 text-[24px]">
            {" "}
            Student's result{" "}
          </h2>
          <ResultsTable />
          <Button className="capitalize self-end" variant="destructive">
            Generate Transcript
          </Button>
        </div>
      </StudentProfileLayout>
    </>
  );
}
