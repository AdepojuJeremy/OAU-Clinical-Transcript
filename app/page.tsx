"use client";

// import useScreenSize from "./components/useScreenSize";
import Header from '@/components/Header'
// import { Provider } from "react-redux";
// import store from "@/store/store";
export default function Home() {
  // const { isDesktop, isMobile, isTablet } = useScreenSize();
  return (
    // <Provider store={store}>
    //   <div className="md:flex md:justify-center">
    //     {isMobile && <NavMobile />}

    <div className='Home'>
      <Header />
    </div>
    // </Provider>
  );
}
