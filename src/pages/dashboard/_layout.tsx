import DashboardLayout from "@/components/layout/dashboard-layout";
import { CollapseProvider } from "@/context/collapse-context";
import { ThemeProvider } from "@/context/theme-context";
import { Outlet } from "react-router";

export default function Layout(){
  return (
    <ThemeProvider>
      <CollapseProvider>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </CollapseProvider>
    </ThemeProvider>
  )
}