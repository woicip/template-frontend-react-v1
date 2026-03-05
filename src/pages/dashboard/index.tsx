import { BookIcon, ChevronRightIcon, CommandIcon, HomeIcon, LayoutGrid, LayoutGridIcon, LogsIcon, PanelRight } from "lucide-react";
import { MenuItem, type MenuIconProps } from "@/components/layout/menu-item";
import { Outlet } from "react-router";
import { Profile } from "@/components/ui/sidebar/profile";

export default function Index(){
  const MENU = [
    {
      name: "Dashboard",
      icon: <HomeIcon width={18} height={18} />,
      active: true,
      children: [
        {
          name: "General",
          active: false,
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
      icon: <CommandIcon width={18} height={18} />,
    },
  ] as MenuIconProps[]

  return (
    <div className="flex grid grid-cols-[270px_1fr]">
      <aside className="w-[270px] h-screen px-[20px] py-[30px] border-r border-[#E3E3E3] flex flex-col justify-between">
        <section>
          <div className="pb-[30px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <img src="/logo.webp" alt="logo" className="w-[28px] h-[28px]" />
              <h1 className="font-bold">Dashboard</h1>
            </div>

            <div className="w-[30px] h-[30px] p-[5px] bg-white flex items-center justify-center border border-black/10 rounded-[7px] cursor-pointer hover:bg-black/5 transition-all">
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

        <section>
          <Profile />
        </section>
      </aside>

      <div className="px-[30px]">
        <div className="pt-[28px] pb-[25px] border-b border-[#E3E3E3] flex flex-col gap-[5px]">
          <h1 className="font-semibold text-black text-h5">Dashboard</h1>

          <div className="flex items-center gap-[6px]">
            <button type="button" className="flex items-center gap-[5px] cursor-pointer">
              <div className="p-[4px] rounded-[5px]">
                <HomeIcon width={16} height={16} />
              </div>
              <p className="text-small">Dashboard</p>
            </button>
            <ChevronRightIcon width={16} height={16} />
            <button type="button" className="flex items-center gap-[5px] cursor-pointer">
              <div className="p-[4px] rounded-[5px]">
                <LayoutGridIcon width={16} height={16} />
              </div>
              <p className="text-small">General</p>
            </button>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  )
}