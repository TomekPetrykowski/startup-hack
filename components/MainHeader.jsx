"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export const MainHeader = () => {
  const pathSegments = usePathname()
    .split("/")
    .filter((item) => item);

  const pathMappings = {
    dashboard: "Dashboard",
    "dashboard/stats": "Statystyki",
    orders: "Zamówienia",
    "orders/new": "Dodaj zamówienie",
    "orders/edit": "Edytuj zamówienie",
    products: "Produkty",
    "products/new": "Dodaj produkt",
    groups: "Grupy",
    reports: "Raporty",
    "reports/new": "Wczytaj raport",
    "reports/send": "Wyślij wiadomości",
    "reports/archive": "Archiwum",
    storage: "Magazyn",
    "storage/products": "Produkty",
    "storage/products/new": "Dodaj produkt",
    "storage/products/edit": "Edytuj produkt",
    user: "Konto",
    "user/chat": "Czat",
    "user/notifications": "Powiadomienia",
  };

  const getTitle = (pathSegments) => {
    let absolutePath = pathSegments.join("/");

    if (pathSegments.length >= 3 && pathSegments[0] === "user") {
      absolutePath = `user/[name]/${pathSegments[2]}`;
    }

    if (pathMappings[absolutePath]) {
      return pathMappings[absolutePath];
    }

    return pathMappings[pathSegments[0]] || "Nieznana strona";
  };

  return (
    <div className="flex justify-between items-center pl-1 max-w-[100em]">
      <header className="flex flex-col h-20 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-16">
        <div className="flex items-center gap-2 ">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {pathSegments.map((segment, index) => {
                const path = pathSegments.slice(0, index + 1).join("/");
                const isLast = index === pathSegments.length - 1;
                return isLast ? (
                  <BreadcrumbItem key={`breadcrumb-${path}`}>
                    {pathMappings[path] || segment}
                  </BreadcrumbItem>
                ) : (
                  <React.Fragment key={`breadcrumb-fragment-${path}`}>
                    <BreadcrumbItem key={`breadcrumb-${path}`}>
                      <BreadcrumbLink href={`/${path}`}>
                        {pathMappings[path] || segment}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator key={`separator-${path}`} />
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <h1 className="m-0 p-0 text-2xl">{getTitle(pathSegments)}</h1>
        </div>
      </header>
    </div>
  );
};
