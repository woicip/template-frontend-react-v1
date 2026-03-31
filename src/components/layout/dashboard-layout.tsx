import { Header } from "@/components/layout/header";
import { type PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import { useCollapse } from "@/context/collapse-context";
import { cn } from "@/utils/cn";

const Dashboard = () => null;

export function DashboardContainer(props: PropsWithChildren){
  const { collapse } = useCollapse();
  return (
    <div className={cn("flex", collapse ? "flex" : "grid-cols-[270px_1fr]")}>{props.children}</div>
  )
}

export function DashboardContent(props: PropsWithChildren){
  return (
    <main className={"w-full px-[30px] duration-100 ease-out [transition-property:transform,opacity,width,height,box-shadow]"}>{props.children}</main>
  )
}

Dashboard.Container = DashboardContainer;
Dashboard.Content = DashboardContent;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout(props: DashboardLayoutProps){
  return (
    <Dashboard.Container>
      <Sidebar />
      <Dashboard.Content>
        <Header />
        <div className="py-[18px]">
          {props.children}
        </div>
      </Dashboard.Content>
    </Dashboard.Container>
  )
}