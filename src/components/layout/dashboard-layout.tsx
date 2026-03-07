import { MoonIcon, PanelRight } from "lucide-react";
import { MenuItem } from "@/components/layout/menu-item";
import { Profile } from "@/components/ui/sidebar/profile";
import { Header } from "@/components/layout/header";
import { type PropsWithChildren } from "react";
import { Toggle } from "../ui/button/toggle-button";
import { useMenu } from "./menu";
import { useTheme } from "@/context/theme-context";


export default function DashboardLayout(props: PropsWithChildren){
  const { theme, toggleTheme } = useTheme();
  const menu = useMenu();
  const darkMode = theme === "dark";
  const toggleDarkMode = () => toggleTheme();

  return (
    <div className="flex grid grid-cols-[270px_1fr]">
      <aside className="w-[270px] h-screen px-[20px] py-[30px] border-r border-[#E3E3E3] dark:border-[#303030] flex flex-col justify-between">
        <section>
          <div className="pb-[30px] flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <img src="/logo.webp" alt="logo" className="w-[28px] h-[28px]" />
              <h1 className="font-bold font-regular dark:text-white">Dashboard</h1>
            </div>

            <div className="w-[30px] h-[30px] p-[5px] bg-natural-gradient dark:bg-dark-natural-gradient dark:border-dark-border dark:text-white shadow-primary bg-white flex items-center justify-center border border-black/10 rounded-[7px] cursor-pointer hover:bg-black/5 transition-all hover:opacity-80 transition-all dark:dark-natural-gradient">
              <PanelRight width={16} height={16} />
            </div>
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <div className="text-very-small font-bold flex flex-col items-start gap-[8px]">
                <p className="text-[#8A94B3]">MENU</p>
                <div className="w-full h-[1px] bg-[#D8DCE9] dark:bg-[#303030]"></div>
              </div>

              <div className="flex flex-col gap-[2px]">
                { menu.map((menu) => <MenuItem key={menu.name} {...menu}/>) }
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="text-very-small font-bold flex flex-col items-start gap-[8px]">
                <p className="text-[#8A94B3]">UTILITY</p>
                <div className="w-full h-[1px] bg-[#D8DCE9] dark:bg-[#303030]"></div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <button 
                  type="button"
                  className={"w-full text-left py-[8px] px-[12px] rounded-[8px] border border-transparent cursor-pointer flex items-center justify-between"}
                >
                  <div className="flex items-center gap-[10px] dark:text-dark-gray">
                    <MoonIcon />
                    <p>Dark Mode</p>
                  </div>
                  
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

      <main className="px-[30px]">
        <Header />
        <div className="py-[18px]">
          {props.children}
        </div>
      </main>
    </div>
  )
}