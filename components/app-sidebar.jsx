"use client";

import * as React from "react";
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
  ShoppingBag,
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
import { useUser } from "@/context/UserContext";
import { useShop } from "@/context/ShopContext";

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

export function AppSidebar({ ...props }) {
  const { user } = useUser();
  const { shops, currentShop, setCurrentShop } = useShop();

  data.shopsData = {
    shops: shops.map((shop) => ({ ...shop, logo: ShoppingBag })),
    currentShop: currentShop,
    setCurrentShop: setCurrentShop,
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

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher shopsData={data.shopsData} />
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
