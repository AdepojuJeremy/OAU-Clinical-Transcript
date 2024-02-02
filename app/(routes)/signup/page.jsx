import Image from "next/image";
import SignupForm from "@/components/SignupForm";

export default function SignUp() {
  return (
    <main className="min-h-screen w-full flex">
      <div className="flex-grow">
        <div className="w-[80%] mx-auto min-w-[300px] max-w-[800px] flex flex-col min-h-screen gap-10 justify-center py-10 ">
          <h2 className="capitalize font-bold text-primaryBlue text-[36px]">
            Create your account
          </h2>
          <SignupForm />
        </div>
      </div>
      <div className="w-[40%] relative backdrop hidden md:block">
        <Image
          src="/sign_up.png"
          alt="sign up"
          objectFit="cover"
          layout="fill"
        />{" "}
      </div>
    </main>
  );
}
