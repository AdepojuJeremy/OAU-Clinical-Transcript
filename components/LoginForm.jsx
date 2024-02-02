import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardWithForm() {
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
              <Input id="name" placeholder="Enter your email/username" />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" />
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
        <Button size="full">Login</Button>
      </CardFooter>
    </Card>
  );
}
