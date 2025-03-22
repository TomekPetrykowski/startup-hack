"use client";

import React, { useState } from "react";
import {
  AudioWaveform,
  Bot,
  GalleryVerticalEnd,
  SquareTerminal,
  User,
  Bell,
  LogOut,
  LogIn,
  UserPlus,
  MessageCircle,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Statystyki",
          url: "/dashboard/stats",
        },
      ],
    },
    {
      title: "Zamówienia",
      url: "/orders",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Lista zamówień",
          url: "/orders",
        },
        {
          title: "Dodaj zamówienie",
          url: "/orders/new",
        },
      ],
    },
    {
      title: "Raporty",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Lista raportów",
          url: "/reports",
        },
        {
          title: "Wygeneruj raport",
          url: "/reports/generate",
        },
        {
          title: "Archiwum",
          url: "/reports/archive",
        },
      ],
    },
    {
      title: "Magazyn",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Produkty",
          url: "/storage/products",
        },
        {
          title: "Dodaj produkt",
          url: "/storage/products/new",
        },
      ],
    },
  ],
};

const shops = [
  {
    name: "Sklep 1",
    logo: GalleryVerticalEnd,
  },
  {
    name: "Sklep 2",
    logo: AudioWaveform,
  },
];

const user = {
  name: "John Doe",
};

data.user = {
  menu: [
    {
      title: "Zarejestruj się",
      url: `auth?action=register`,
      icon: UserPlus,
    },
    {
      title: "Zaloguj się",
      url: "auth?action=login",
      icon: LogIn,
    },
  ],
};

if (user) {
  data.user = {
    name: user.name,
    menu: [
      {
        title: "Konto",
        url: `/user`,
        icon: User,
      },
      {
        title: "Powiadomienia",
        url: `/user/notifications`,
        icon: Bell,
      },
      {
        title: "Wiadomości",
        url: `/user/chat`,
        icon: MessageCircle,
      },
      {
        title: "Wyloguj",
        url: `/auth?action=logout`,
        icon: LogOut,
      },
    ],
  };
}

export function AppSidebar({ ...props }) {
  const [currentShop, setCurrentShop] = useState(shops[0]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher
          shops={shops}
          currentShop={currentShop}
          setCurrentShop={setCurrentShop}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
