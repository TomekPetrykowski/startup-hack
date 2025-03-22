import { ProductTable } from "@/components/ui/product-table";
import { columns } from "./columns";

async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      value: 159.39,
      name: "Tom Ford",
      desc: "asdasddtrfygyhuijo",
      img:"/produkt1.png"
    },
    {
      id: "728ed52f",
      amount: 55,
      value: 199.99,
      name: "Eros Flame",
      desc: "asdasddtrfygyhuijo",
      img:"/produkt2.png"
    },
    {
      id: "728ed52f",
      amount: 65,
      value: 120.59,
      name: "Pour Home Dylan",
      desc: "asdasddtrfygyhuijo",
      img:"/produkt3.png"
    },
    {
      id: "728ed52f",
      amount: 163,
      value: 399.99,
      name: "Crystal Noir",
      desc: "asdasddtrfygyhuijo",
      img:"/produkt4.png"
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
