import OverviewTable from "@/components/custom/OverviewTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StudentProfileLayout from "@/components/custom/StudentProfileLayout";

export default async function StudentInfo({ params }) {
  //fetch data here using the id
  console.log(params);
  return (
    <>
      <StudentProfileLayout>
        <div className="w-[500px]  mt-10 flex flex-col gap-8 items-center">
          <h2 className="text-oauOrange self-start font-bold text-[24px]">
            Student Information
          </h2>
          <OverviewTable
            name="John Doe"
            matricNo="CLI/20XX/XXX"
            email="jdjdjdj@gmail.com"
            status="graduated"
            admission="20XX"
            graduation="20XX"
          />
          <div className="self-end gap-2 flex">
            <Link href={`/results/${params.id}/upload`}>
              <Button>UPLOAD RESULTS</Button>
            </Link>

            <Link href={`/results/${params.id}/view`}>
              <Button>VIEW RESULTS</Button>
            </Link>
          </div>
        </div>
      </StudentProfileLayout>
    </>
  );
}
