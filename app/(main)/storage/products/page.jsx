import { ProductTable } from "@/components/ui/product-table";
import { columns } from "./columns";

async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      name: "pending",
      desc: "asdasddtrfygyhuijo"
    }
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <ProductTable columns={columns} data={data} />
    </div>
  );
}
