"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { useDispatch, useSelector } from "react-redux";
import { setPasswordVisible } from "@/app/GlobalRedux/slices/AppSlice";
import { useRememberMe } from "@/hooks/useRememberMe";

export default function CardWithForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  // Utilize the useRememberMe hook for remember me state and functions
  const { rememberMe, handleRememberMeChange ,storeRememberMe,clearRememberMe} = useRememberMe();

  // States
  const { passwordVisible } = useSelector((st) => st.app);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [formErr, setFormErr] = useState("");

  // Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, password } = formData;

    if (!email) return setFormErr("Please input an email address.");
    if (!password) return setFormErr("Please input a password.");
    if (!emailRegex.test(email)) return setFormErr("Invalid Email Address.");

  rememberMe ? storeRememberMe() : clearRememberMe()
  

    const submitForm = async () => {
      try {
        const response = await axios.post("api/users", {
          email,
          password,
        });
        console.log(response?.data);
      } catch (err) {
        console.log(err);
      }
    };

    submitForm();
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
              />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="password">Password</Label>
              <div className="flex justify-between items-center">
                <InputCont
                  className={"justify-between items-center"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  isPasswordComp={true}
                >
                  {passwordVisible ? (
                    <FaEyeSlash size={28} onClick={() => dispatch(setPasswordVisible(false))} />
                  ) : (
                    <FaEye size={28} onClick={() => dispatch(setPasswordVisible(true))} />
                  )}
                </InputCont>
              </div>
            </div>


            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
       
              <Checkbox id="terms" onCheckedChange={handleRememberMeChange} />
                <label
                  htmlFor="terms"
                  className="text-sm text-primaryGray font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
              <span className="text-primaryBlue font-medium">
                {/* //TODO: Forgot password functionality */}
                <a href="#">  Forgot Password?</a>
              
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
