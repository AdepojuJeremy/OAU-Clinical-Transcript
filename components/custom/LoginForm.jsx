"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import InputCont from "@/components/ui/InputCont";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export default function CardWithForm() {
  const router = useRouter();

  // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErr, setFormErr] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, password } = formData;
    if (!email) return setFormErr("Please input an email address.");
    if (!password) return setFormErr("Please input a password.");
    if (!emailRegex.test(email)) return setFormErr("Invalid Email Address.");
    router.push("/search");
  };
  return (
    <Card className="max-w-[800px] min-w-[350px]">
      <CardHeader>
        <CardTitle className="font-crimson text-center pt-8 text-[36px]">
          Hi, Welcome back
        </CardTitle>
      </CardHeader>
      <CardContent className=" max-w-[95%] md:max-w-[90%] mx-auto">
        <form>
          {formErr && (
            <div className="err-message text-center text-[red] py-2">
              {formErr}
            </div>
          )}
          <div className="grid w-full items-center gap-8">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name" className="">
                Email/Username
              </Label>
              <InputCont
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email/username"
              ></InputCont>
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="password">Password</Label>
              <div className="flex justify-between items-center">
                <InputCont
                  className={"justify-between items-center"}
                  id="password"
                  name="password"
                  passwordVisible={passwordVisible}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  isPasswordComp={true}
                >
                  {passwordVisible ? (
                    <FaEyeSlash
                      size={28}
                      onClick={() => setPasswordVisible(false)}
                    />
                  ) : (
                    <FaEye size={28} onClick={() => setPasswordVisible(true)} />
                  )}
                </InputCont>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-primaryGray font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
              <span className="text-primaryBlue font-medium">
                Forgot Password?
              </span>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="max-w-[90%] mx-auto py-10">
        <Button onClick={handleSubmit} size="full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
