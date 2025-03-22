import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MainHeader } from "@/components/MainHeader";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="p-4 w-full">
        <SidebarInset>
          <MainHeader />
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
