import { ProductTable } from "@/components/ui/product-table";
import { columns } from "./columns";

async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      value: 100,
      name: "template",
      desc: "asdasddtrfygyhuijo",
      img:"/template.png"
    },
    {
      id: "728ed52f",
      amount: 55,
      value: 200,
      name: "template2",
      desc: "asdasddtrfygyhuijo",
      img:"/template.png"
    },
    {
      id: "728ed52f",
      amount: 65,
      value: 300,
      name: "template3",
      desc: "asdasddtrfygyhuijo",
      img:"/template.png"
    },
    {
      id: "728ed52f",
      amount: 163,
      value: 400,
      name: "template4",
      desc: "asdasddtrfygyhuijo",
      img:"/template.png"
    },
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
