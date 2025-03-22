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
  shops: [
    {
      name: "Sklep 1",
      logo: GalleryVerticalEnd,
    },
    {
      name: "Sklep 2",
      logo: AudioWaveform,
    },
  ],
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
        {
          title: "Grupy",
          url: "/orders/groups",
        },
      ],
    },
    {
      title: "Raporty",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Dodaj raport",
          url: "/reports/new",
        },
        {
          title: "Wyślij wiadomości",
          url: "/reports/send",
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
          title: "Statusy",
          url: "/storage/statuses",
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
      url: `/register`,
      icon: UserPlus,
    },
    {
      title: "Zaloguj się",
      url: "/login",
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
        url: `/user/${user.name}`,
        icon: User,
      },
      {
        title: "Powiadomienia",
        url: `/user/${user.name}/notifications`,
        icon: Bell,
      },
      {
        title: "Wiadomości",
        url: `/user/${user.name}/chat`,
        icon: MessageCircle,
      },
      {
        title: "Wyloguj",
        url: `/user/${user.name}/logout`,
        icon: LogOut,
      },
    ],
  };
}
// useEffect(() => {
//   setHydrated(true);
//   if (!currentShop && shops.length) {
//     setCurrentShop(shops[0]);
//   }
// }, [currentShop, shops]);

// if (!hydrated) return null;

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
