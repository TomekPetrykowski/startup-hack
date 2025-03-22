import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData() {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "w trakcie",
      email: "m@example.com",
    },
    {
      id: "b2e4b8c0",
      amount: 200,
      status: "zakończone",
      email: "ala@gmail.com",
    },
    {
      id: "c6f6a8b3",
      amount: 300,
      status: "w trakcie",
      email: "bebe@gmail.com",
    },
    { id: "c6f6a8b4", amount: 400, status: "zakończone", email: "hehe@wp.pl" },
    {
      id: "f1a7d9e2",
      amount: 150,
      status: "w trakcie",
      email: "jan.kowalski@onet.pl",
    },
    {
      id: "e3c9f5b1",
      amount: 500,
      status: "zakończone",
      email: "anna.nowak@gmail.com",
    },
    {
      id: "a2d4f8c3",
      amount: 250,
      status: "w trakcie",
      email: "peter.parker@dailybugle.com",
    },
    {
      id: "d7b3c1e6",
      amount: 350,
      status: "zakończone",
      email: "bruce.wayne@waynecorp.com",
    },
    {
      id: "g8e4d7c2",
      amount: 450,
      status: "w trakcie",
      email: "clark.kent@dailyplanet.com",
    },
    {
      id: "h9f5b2a3",
      amount: 600,
      status: "zakończone",
      email: "diana.prince@amazon.com",
    },
    {
      id: "i2g6d8e4",
      amount: 700,
      status: "w trakcie",
      email: "tony.stark@starkindustries.com",
    },
    {
      id: "j3h7f9b5",
      amount: 800,
      status: "zakończone",
      email: "steve.rogers@shield.gov",
    },
    {
      id: "k4i8g2d6",
      amount: 900,
      status: "w trakcie",
      email: "natasha.romanoff@spy.org",
    },
    {
      id: "l5j9h3f7",
      amount: 1000,
      status: "zakończone",
      email: "thor.odinson@asgard.com",
    },
    {
      id: "m6k2i4g8",
      amount: 1100,
      status: "w trakcie",
      email: "bruce.banner@lab.com",
    },
    {
      id: "n7l3j5h9",
      amount: 1200,
      status: "zakończone",
      email: "barry.allen@ccpd.com",
    },
    {
      id: "o8m4k6i2",
      amount: 1300,
      status: "w trakcie",
      email: "hal.jordan@glc.com",
    },
    {
      id: "p9n5l7j3",
      amount: 1400,
      status: "zakończone",
      email: "arthur.curry@atlantis.com",
    },
    {
      id: "q1o6m8k4",
      amount: 1500,
      status: "w trakcie",
      email: "selina.kyle@gotham.com",
    },
    {
      id: "r2p7n9l5",
      amount: 1600,
      status: "zakończone",
      email: "lex.luthor@luthorcorp.com",
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
