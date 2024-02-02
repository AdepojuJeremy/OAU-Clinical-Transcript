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
        className="pt-[12.5rem] w-full flex items-center justify-center flex-1"
      >
        <LoginForm />
        <p>
          Already have an account <Link href="signup">Sign Up</Link>
        </p>
      </main>
    </div>
  );
}

export default page;
