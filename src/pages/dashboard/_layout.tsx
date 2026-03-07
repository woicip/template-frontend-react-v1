import DashboardLayout from "@/components/layout/dashboard-layout";
import { ThemeProvider } from "@/context/theme-context";
import { Outlet } from "react-router";

export default function Layout(){
  return (
    <ThemeProvider>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </ThemeProvider>
  )
}