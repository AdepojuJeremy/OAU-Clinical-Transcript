"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import InputCont from "../ui/InputCont";
import { Label } from "../ui/label";
import { setPasswordVisible } from "../../Global/slices/AppSlice";
import { useRememberMe } from "../../hooks/useRememberMe";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCredentials,
  clearCredentials,
} from "../../Global/slices/UserSlice";
import Cookies from "js-cookie";

export default function CardWithForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Custom hook
  const {
    rememberMe,
    handleRememberMeChange,
    storeRememberMe,
    clearRememberMe,
  } = useRememberMe();

  // States
  const { passwordVisible } = useSelector((st) => st.app);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErr, setFormErr] = useState({});

  // Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (formData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email, password } = formData;

    const errors = {};
    if (!email) errors.email = "Please input an email address.";
    if (!password) errors.password = "Please input a password.";
    if (email && !emailRegex.test(email)) errors.email = "Invalid Email Address.";

    return errors;
  };

  const login = async () => {
    try {
      // const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/auth/login`; // Use environment variable for secure URL storage
      // const response = await axios.post(url, formData);

      // console.log(response.data, "login successful");
      // Cookies.set("token", response.data?.token);
      // dispatch(setCredentials(response.data?.token));
      console.log("Login successful");
      navigate("/results");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Local variable to store errors
    const errors = validate(formData);

    // Set state errors
    setFormErr(errors);

    // Check if there are errors before proceeding with login
    if (Object.keys(errors).length > 0) {
      return; // Exit early if there are validation errors
    }

    rememberMe ? storeRememberMe() : clearRememberMe();
    login();
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
          <div className="grid w-full items-center gap-8">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name" className="">
                Email/Username
              </Label>
              {formErr.email && (
                <div className="err-message  text-[red] py-2">
                  {formErr.email}
                </div>
              )}
              <InputCont
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email/username"
              />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="password">Password</Label>
              {formErr.password && (
                <div className="err-message text-center self-start text-[red] py-2">
                  {formErr.password}
                </div>
              )}
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
                    <FaEyeSlash
                      size={28}
                      onClick={() => dispatch(setPasswordVisible(false))}
                    />
                  ) : (
                    <FaEye
                      size={28}
                      onClick={() => dispatch(setPasswordVisible(true))}
                    />
                  )}
                </InputCont>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex  space-x-2">
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
                <a href="#"> Forgot Password?</a>
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
