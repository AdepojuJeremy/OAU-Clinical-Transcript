import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const profile = {
  avatar: "",
  name: "John Doe",
  matric: "CLI/20XX/XXX",
};
const results = [
  {
    session: "18/19",
    class: "200L",
    scores: {
      anatomy: "70",
      biochemistry: "70",
      physiology: "70",
    },
    verdict: "pass",
  },
  {
    session: "19/20",
    class: "300L",

    scores: {
      anatomy: "70",
      biochemistry: "70",
      physiology: "80",
    },
    verdict: "pass",
  },
  {
    session: "20/21",
    class: "400L",

    scores: {
      anatomy: "50",
      biochemistry: "60",
      physiology: "70",
    },
    verdict: "resit",
  },
  {
    session: "21/22",
    class: "500L",
    scores: {
      anatomy: "50",
      biochemistry: "50",
      physiology: "70",
    },
    verdict: "repeat",
  },
  {
    session: "22/23",
    class: "600L",
    scores: {
      anatomy: "70",
      biochemistry: "80",
      physiology: "80",
    },
    verdict: "pass",
  },
];

export default function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent results.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">session</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((session) => (
          <TableRow key={session.session}>
            <TableCell className="font-medium">{session.session}</TableCell>
            <TableCell>{session.class}</TableCell>
            <TableCell>{session.paymentMethod}</TableCell>
            <TableCell className="text-right">{session.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
