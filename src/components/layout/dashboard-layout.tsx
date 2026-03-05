import { BookIcon, HomeIcon, LayoutGrid, LogsIcon, PanelRight, TerminalIcon } from "lucide-react";
import { MenuItem, type MenuIconProps } from "@/components/layout/menu-item";
import { useLocation } from "react-router";
import { Profile } from "@/components/ui/sidebar/profile";
import { Header } from "@/components/layout/header";
import type { PropsWithChildren } from "react";

export default function DashboardLayout(props: PropsWithChildren){
  const location = useLocation();
  const MENU = [
    {
      name: "Dashboard",
      icon: <HomeIcon width={18} height={18} />,
      active: location.pathname === "/dashboard",
      children: [
        {
          name: "General",
          active: location.pathname === "/dashboard",
          icon: <LayoutGrid width={16} height={16} />,
        },
        {
          name: "Report",
          active: false,
          icon: <BookIcon width={16} height={16} />,
        },
        {
          name: "Logs",
          active: false,
          icon: <LogsIcon width={16} height={16} />,
        },
      ]
    },
    {
      name: "Report",
      active: false,
      icon: <BookIcon width={18} height={18} />,
    },
    {
      name: "Logs",
      active: false,
      icon: <LogsIcon width={18} height={18} />,
    },
    {
      name: "Commands",
      active: false,
      icon: <TerminalIcon width={18} height={18} />,
    },
  ] as MenuIconProps[]

  return (
    <div className="flex grid grid-cols-[270px_1fr]">
      <aside className="w-[270px] h-screen px-[20px] py-[30px] border-r border-[#E3E3E3] flex flex-col justify-between">
        <section>
          <div className="pb-[30px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <img src="/logo.webp" alt="logo" className="w-[28px] h-[28px]" />
              <h1 className="font-bold font-regular">Dashboard</h1>
            </div>

            <div className="w-[30px] h-[30px] p-[5px] natural-gradient shadow-primary bg-white flex items-center justify-center border border-black/10 rounded-[7px] cursor-pointer hover:bg-black/5 transition-all hover:opacity-80 transition-all">
              <PanelRight width={16} height={16} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[10px]">
              <div className="text-small font-bold flex flex-col items-start gap-[8px]">
                <p className="text-[#8A94B3]">MENU</p>
                <div className="w-full h-[1px] bg-[#D8DCE9]"></div>
              </div>

              <div className="flex flex-col gap-[2px]">
                { MENU.map((menu) => <MenuItem key={menu.name} {...menu}/>) }
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[20px] border-t border-[#E3E3E3]">
          <Profile />
        </section>
      </aside>

      <main className="px-[30px]">
        <Header />
        <div className="py-[18px]">
          {props.children}
        </div>
      </main>
    </div>
  )
}