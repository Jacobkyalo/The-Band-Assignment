import { AppNavbar } from "@/components/dashboard/app-navbar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex w-full h-screen 2xl:container">
        <AppSidebar />
        <div className="flex-1 overflow-auto">
          <AppNavbar />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
