import React from "react";
import { Link } from "react-router-dom";
import HeaderOne from "../components/custom/HeaderOne";

function Welcome() {
  return (
    <div className="welcome-page bg-welcome-bg bg-cover h-screen">
      <HeaderOne />
      <main className="h-full w-full flex justify-center items-center">
        <div className="text-center w-[40%]">
          <h1 className="text-primaryBlue text-2xl md:text-3xl font-bold py-4">
            Lorem ipsum dolor sit amet consec tetur.
          </h1>
          <p className="text-white py-16 text-base 2xl:text-lg">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <Link
            to={"/login"}
            className="px-4 py-2 text-white font-bold bg-primaryBlue rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Welcome;
