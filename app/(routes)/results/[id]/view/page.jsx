import ResultsTable from "@/components/custom/ResultsTable";
import HomeHeader from "@/components/custom/HomeHeader";
import AvatarProfile from "@/components/custom/AvatarProfile";
// import axios from "axios";

export default async function ResultsPage({ params }) {
  // const response = awa;
  return (
    <>
      <HomeHeader />
      <main className="gradient-bg min-h-screen pt-[10rem] w-full flex items-center justify-center flex-col flex-1 pb-8">
        <AvatarProfile />
        <ResultsTable />
      </main>
    </>
  );
}
