import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import HomeHeader from "@/components/custom/HomeHeader";
import { createNewStudent, setSelectedStudentData } from "@/Global/slices/AppSlice";

export default function Upload() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = Math.random().toString(36).substr(2, 9);

  const formik = useFormik({
    initialValues: {
      _id: userId,
      name: "",
      email: "",
      matricNo: "",
      academicSessionAdmitted: "", // Updated field name
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      matricNo: Yup.string().required("Matriculation Number is required"),
      academicSessionAdmitted: Yup.string().required("Academic Session Admitted is required"), // Updated validation
    }),
    onSubmit: (values) => {
      dispatch(createNewStudent(values));
      navigate(`/upload/${userId}`);
    },
  });

  return (
    <div className="Home gradient-bg">
      <HomeHeader />
      <main className="main pt-[9rem] w-full flex justify-center items-center">
        <Card className="max-w-[800px] min-w-[350px] px-10 pt-5">
          <CardTitle className="text-center">Enter student information</CardTitle>
          <CardContent className="max-w-[90%] mx-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid w-full items-center pt-8 gap-8">
                <div className="flex flex-col space-y-2.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Last name, First name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500 text-sm">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="flex flex-col space-y-2.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="flex flex-col space-y-2.5">
                  <Label htmlFor="matricNo">Matriculation Number</Label>
                  <Input
                    id="matricNo"
                    name="matricNo"
                    placeholder="Enter your Matric no."
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.matricNo}
                  />
                  {formik.touched.matricNo && formik.errors.matricNo ? (
                    <div className="text-red-500 text-sm">{formik.errors.matricNo}</div>
                  ) : null}
                </div>

                <div className="flex flex-col space-y-2.5">
                  <Label htmlFor="academicSessionAdmitted">Academic Session Admitted</Label> {/* Updated label */}
                  <Input
                    id="academicSessionAdmitted"
                    name="academicSessionAdmitted"
                    placeholder="Enter academic session admitted"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.academicSessionAdmitted}
                  />
                  {formik.touched.academicSessionAdmitted && formik.errors.academicSessionAdmitted ? (
                    <div className="text-red-500 text-sm">{formik.errors.academicSessionAdmitted}</div>
                  ) : null}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="max-w-[90%] mx-auto py-10">
            <Button size="full" onClick={formik.handleSubmit} type="submit">
              Create Student Profile
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
