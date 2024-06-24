import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { Card, CardContent } from "../ui/card";

export default function OverviewTable({
  id,
  name,
  email,
  matricNo,
  status,
  admission,
  graduation,
}) {
  return (
    <Table className="bg-white rounded-lg">
      <TableBody>
        <TableRow>
          <TableCell className="font-bold text-center">NAME</TableCell>
          <TableCell>{name.toUpperCase()}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-bold text-center">EMAIL</TableCell>
          <TableCell>{email}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-center">MATRIC NO.</TableCell>
          <TableCell>{matricNo.toUpperCase()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-center">STATUS</TableCell>
          <TableCell>{status.toUpperCase()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-center">
            ADMISSION YEAR
          </TableCell>
          <TableCell>{admission}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-bold text-center">
            GRADUATION YEAR
          </TableCell>
          <TableCell>{graduation}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
