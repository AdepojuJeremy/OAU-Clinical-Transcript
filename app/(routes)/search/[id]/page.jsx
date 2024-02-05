import ResultsTable from "@/components/custom/ResultsTable";
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
        <ResultsTable />
      </main>
    </>
  );
}
