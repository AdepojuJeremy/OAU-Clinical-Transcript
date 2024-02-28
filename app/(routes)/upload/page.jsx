'use client'
import HomeHeader from "@/components/custom/HomeHeader";
import SearchBar from "@/components/custom/SearchBar";


export default function Upload() {
  return (
<div className="Home gradient-bg">
      <HomeHeader />
      <main className="main min-h-screen w-screen flex justify-center items-center">
        <SearchBar  linkText={"upload"}  currPage={"upload"}/>
      </main>
    </div> 
    
  );
}
