import ResultsTable from "@/components/ResultsTable";
import HomeHeader from "@/components/HomeHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ResultsPage() {
  return (
    <>
      <HomeHeader />
      <main className="gradient-bg min-h-screen pt-[10rem] w-full flex items-center justify-center flex-col flex-1 pb-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <Avatar className="h-[150px] w-[150px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[32px] font-bold text-primaryBlue">John Doe</p>
          <p className="text-[32px] font-bold text-primaryGray">CLI/20XX/XXX</p>
        </div>

        <ResultsTable />
      </main>
    </>
  );
}
