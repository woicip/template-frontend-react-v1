import { BellIcon, SearchIcon } from "lucide-react";
import { Input } from "../ui/input/input";

export function Header(){
  return (
    <div className="pt-[28px] pb-[25px] flex items-center justify-between border-b border-[#E3E3E3] dark:border-[#303030] gap-[5px]">
      <h1 className="font-semibold text-black text-h5 dark:text-white">Dashboard</h1>
      
      <div className="flex items-center gap-2">
        <button type="button" className="natural-gradient p-[8px] border border-[#E3E3E3] rounded-[10px] cursor-pointer shadow-primary">
          <BellIcon width={16} height={16} />
        </button>
        <Input 
          type="text" 
          placeholder="Search" 
          icon={<SearchIcon width={18} height={18} />} 
          className="h-[34px] rounded-[6px]" 
        />
      </div>

      {/* <div className="flex items-center gap-[6px]">
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
      </div> */}
    </div>
  )
}