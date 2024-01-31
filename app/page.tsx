"use client";

import Header from '@/components/Header'
// import { Provider } from "react-redux";
// import store from "@/store/store";
import Form from "@/components/Form";

export default function Home() {
  return (
    // <Provider store={store}>
    //   <div className="md:flex md:justify-center">
    //     {isMobile && <NavMobile />}

    <div className='Home'>
      <Header />
      <Form />
    </div>
  );
}
