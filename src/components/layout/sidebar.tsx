import { MoonIcon, PanelLeftOpenIcon, PanelRight } from "lucide-react";
import { Toggle } from "../ui/button/toggle-button";
import { Profile } from "../ui/sidebar/profile";
import { useTheme } from "@/context/theme-context";
import { useMenu } from "./use-menu";
import { MenuItem } from "./menu-item";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { useCollapse } from "@/context/collapse-context";
import { cn } from "@/utils/cn";

export function SidebarToggle(props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
  const {collapse} = useCollapse();
  return (
    <div 
      onClick={props.onClick}
      className="w-[30px] h-[30px] p-[5px] bg-natural-gradient dark:bg-dark-natural-gradient dark:border-dark-border dark:text-white shadow-primary bg-white flex items-center justify-center border border-black/10 rounded-[7px] cursor-pointer hover:bg-black/5 transition-all hover:opacity-80 transition-all dark:dark-natural-gradient"
    >
      {collapse ? <PanelLeftOpenIcon width={16} height={16} /> : <PanelRight width={16} height={16} />}
    </div>
  )
}

export default function Sidebar(){
  const { theme, toggleTheme } = useTheme();
  const { collapse, toggleCollapse } = useCollapse();
  const menu = useMenu();
  const darkMode = theme === "dark";
  const toggleDarkMode = () => toggleTheme();
  
  return (
    <aside className={cn("h-screen py-[30px] border-r border-[#E3E3E3] dark:border-[#303030] flex flex-col justify-between duration-100 ease-out [transition-property:transform,opacity,width,height,box-shadow]", collapse ? "w-[100px] px-0" : "w-[270px] px-[20px]")}>
      <section>
        <div className="pb-[30px] flex items-center justify-between">
          <div className={cn("flex gap-[8px] items-center", collapse && "w-full justify-center")}>
            <img src="/logo.webp" alt="logo" className={cn("w-[28px] h-[28px]", collapse && "w-[34px] h-[34px]")} />
            { !collapse && <h1 className="font-bold font-regular dark:text-white">Dashboard</h1> }
          </div>

          {!collapse && <SidebarToggle onClick={() => toggleCollapse()} />}
        </div>

        <div className="max-h-[80vh] overflow-auto flex flex-col gap-[30px] custom-scrollbar">
          <div className="flex flex-col gap-[10px]">
            <div className={cn("w-full sticky top-0 text-very-small font-bold flex flex-col items-start gap-[8px] bg-background dark:bg-background-dark z-10", collapse && "items-center")}>
              <p className="text-[#8A94B3]">MENU</p>
              <div className="w-full h-[1px] bg-[#D8DCE9] dark:bg-[#303030]"></div>
            </div>

            <div className={cn("flex flex-col gap-[2px]", collapse && "items-center")}>
              { menu.map((menu) => <MenuItem key={menu.name} {...menu}/>) }
            </div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className={cn("sticky top-0 text-very-small font-bold flex flex-col items-start gap-[8px] bg-background dark:bg-background-dark", collapse && "items-center")}>
              <p className="text-[#8A94B3]">SETTINGS</p>
              <div className="w-full h-[1px] bg-[#D8DCE9] dark:bg-[#303030]"></div>
            </div>

            <div className={cn("flex flex-col gap-[2px]", collapse && "items-center")}>
              <button 
                type="button"
                className={cn("w-full text-left py-[8px] px-[12px] rounded-[8px] border border-transparent cursor-pointer flex items-center justify-between", collapse && "w-fit justify-center overflow-hidden")}
              >
                { !collapse && (
                  <div className="flex items-center gap-[10px] dark:text-dark-gray">
                    <MoonIcon />
                    <p>Dark Mode</p>
                  </div>
                )}
                
                <Toggle checked={darkMode} onChange={toggleDarkMode}/>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[20px] border-t border-[#E3E3E3] dark:border-[#303030]">
        <Profile />
      </section>
    </aside>
  )
}