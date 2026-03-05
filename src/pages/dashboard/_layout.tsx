import DashboardLayout from "@/components/layout/dashboard-layout";
import { Outlet } from "react-router";

export default function Layout(){
  return (<DashboardLayout><Outlet /></DashboardLayout>)
}