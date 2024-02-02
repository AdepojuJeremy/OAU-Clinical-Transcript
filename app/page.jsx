import HomeHeader from "@/components/HomeHeader";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="Home">
      <HomeHeader />
      <main className="main min-h-screen w-screen flex justify-center items-center">
        <SearchBar />
      </main>
    </div>
  );
}
