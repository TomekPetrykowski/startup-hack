import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "b2e4b8c0",
      amount: 200,
      status: "completed",
      email: "ala@gmail.com",
    },
    {
      id: "c6f6a8b3",
      amount: 300,
      status: "pending",
      email: "bebe@gmail.com",
    },
    {
      id: "c6f6a8b4",
      amount: 400,
      status: "completed",
      email: "hehe@wp.pl",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
