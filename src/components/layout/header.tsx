import { ChevronRightIcon, HomeIcon, LayoutGridIcon } from "lucide-react";

export function Header(){
  return (
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
  )
}