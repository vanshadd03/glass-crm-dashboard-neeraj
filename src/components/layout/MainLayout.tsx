
import React from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  SidebarInset,
  useSidebar
} from "@/components/ui/sidebar";
import { HomeIcon, CreditCardIcon, UsersIcon, BarChart3Icon, LifeBuoyIcon, LogOutIcon } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { toggleSidebar } = useSidebar();
  
  return (
    <>
      <Sidebar>
        <SidebarHeader className="flex items-center h-14 px-4">
          <h2 className="text-xl font-bold">NEERAJ</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive tooltip="Dashboard">
                    <HomeIcon size={20} />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Wallet">
                    <CreditCardIcon size={20} />
                    <span>Wallet</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Team">
                    <UsersIcon size={20} />
                    <span>Team</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Income">
                    <BarChart3Icon size={20} />
                    <span>Income</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Support">
                    <LifeBuoyIcon size={20} />
                    <span>Support</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <SidebarMenuButton className="w-full justify-start">
            <LogOutIcon size={20} />
            <span>Logout</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-background">
        <div className="flex items-center h-14 border-b px-4">
          <SidebarTrigger className="mr-2" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="p-4 overflow-auto">
          {children}
        </div>
      </SidebarInset>
    </>
  );
}
