"use client";

import { Button } from "@/components/ui/button";
import {
  // Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });

export default function Form() {
  // const form =
  //   useForm <
  //   z.infer <
  //   typeof formSchema >>
  //     {
  //       resolver: zodResolver(formSchema),
  //       defaultValues: {
  //         username: "",
  //       },
  //     };

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values);
  // }
  return (<></>
    // <Form>
    //   <FormField
    //     control={form.control}
    //     name="username"
    //     render={({ field }) => (
    //       <FormItem>
    //         <FormLabel>Username</FormLabel>
    //         <FormControl>
    //           <Input placeholder="shadcn" {...field} />
    //         </FormControl>
    //         <FormDescription>This is your public display name.</FormDescription>
    //         <FormMessage />
    //       </FormItem>
    //     )}
    //   />
    // </Form>
  );
}
