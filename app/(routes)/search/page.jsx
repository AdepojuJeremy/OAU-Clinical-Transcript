'use client'
import HomeHeader from "@/components/custom/HomeHeader";
import SearchBar from "@/components/custom/SearchBar";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Search() {
  return (
    <Provider store={store}>
<div className="Home gradient-bg">
      <HomeHeader />
      <main className="main min-h-screen w-screen flex justify-center items-center">
        <SearchBar />
      </main>
    </div>
    </Provider>
    
  );
}
