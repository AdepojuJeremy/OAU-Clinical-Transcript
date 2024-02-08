'use client'
import HomeHeader from "@/components/custom/HomeHeader";
import SearchBar from "@/components/custom/SearchBar";


export default function Search() {
  return (
<div className="Home gradient-bg">
      <HomeHeader />
      <main className="main min-h-screen w-screen flex justify-center items-center">
        <SearchBar />
      </main>
    </div>
    
  );
}
