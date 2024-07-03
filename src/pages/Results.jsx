"use client";
import HomeHeader from "../components/custom/HomeHeader";
import SearchBar from "../components/custom/SearchBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Results() {
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(token);
  }, [token]);
  return (
    <div className="Home gradient-bg">
      <HomeHeader />
      <main className="main min-h-screen w-screen flex justify-center items-center">
        <SearchBar linkText={"View Results"} currPage={"results"} />
      </main>
    </div>
  );
}