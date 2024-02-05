import OverviewTable from "@/components/custom/OverviewTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import HomeHeader from "@/components/custom/HomeHeader";
import AvatarProfile from "@/components/custom/AvatarProfile";

export default async function StudentInfo({ params }) {
  //fetch data here using the id
  console.log(params);
  return (
    <>
      <HomeHeader />
      <main className="gradient-bg min-h-screen pt-[10rem] w-full flex items-center justify-center flex-col flex-1 pb-8">
        {/* should be dynamic */}
        <AvatarProfile
          src="https://github.com/shadcn.png"
          alt={"@shadcn"}
          fallback="CN"
          name="John Doe"
          matricNo="CLI/20XX/XXX"
        />

        <div className="w-[500px]  mt-10 flex flex-col gap-8 items-center">
          <h2 className="text-oauOrange self-start font-bold text-[24px]">
            Student Inform7ation
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
      </main>
    </>
  );
}
