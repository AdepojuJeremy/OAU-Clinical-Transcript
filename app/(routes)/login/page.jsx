import React from "react";
import HeaderOne from "@/components/HeaderOne";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

function page() {
  return (
    <div className="relative min-h-screen w-full bg-backgroundColor">
      <HeaderOne />
      <main
        id="page-content"
        className="pt-[10rem] w-full flex items-center justify-center flex-col flex-1 pb-8"
      >
        <div className="w-[80%] min-w-[300px] max-w-[800px] ">
          <LoginForm />
        </div>

        <p className="font-crimson font-bold text-lg pt-8 ">
          Don't have an account?{" "}
          <Link href="signup" className="text-oauOrange pl-4">
            Sign Up
          </Link>
        </p>
      </main>
    </div>
  );
}

export default page;
