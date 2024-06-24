import * as React from "react";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/InputCont";
import { Label } from "../ui/label";

export default function CardWithForm() {
  return (
    <Card className="max-w-[800px] min-w-[350px]">
      <CardContent className="max-w-[90%] mx-auto">
        <form claassName="">
          <div className="grid w-full items-center pt-8 gap-8">
            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name" className="">
                Full Name
              </Label>
              <Input id="name" placeholder="Last name, First name" />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="email" className="">
                Email
              </Label>
              <Input id="email" placeholder="Enter your email" />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="name" className="">
                Matriculation Number
              </Label>
              <Input id="name" placeholder="Enter your Matric no." />
            </div>

            <div className="flex flex-col space-y-2.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="max-w-[90%] mx-auto py-10">
        <Button size="full">Sign Up</Button>
      </CardFooter>
    </Card>
  );
}
