import Image from "next/image";
import SignupForm from "@/components/SignupForm";

export default function SignUp() {
  return (
    <main className="min-h-screen w-full flex">
      <div className="flex-grow"></div>
      <div className="w-[40%] relative backdrop">
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
