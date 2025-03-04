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

const medical = [
  {
    name: "Blood Sugar",
    status: "normal",
    result: "95 mg/dL",
  },
  {
    name: "X-Ray",
    status: "unobtrusive",
    result: "No broken bones or serious damage evident.",
  },
  {
    name: "Allergies",
    status: "positive",
    result: "House dust mites & pollen detected",
  },
  {
    name: "HIV Test",
    status: "negative",
    result: "No evidence of HIV infection.",
  },
  {
    name: "Testosterone",
    status: "normal",
    result: "450 ng/dL",
  },
];

export default function MedicalResults({ className }) {
  return (
    <div className={className}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medical.map((result) => (
            <TableRow key={result.name}>
              <TableCell className="font-medium">{result.name}</TableCell>
              <TableCell>{result.status}</TableCell>
              <TableCell>{result.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
