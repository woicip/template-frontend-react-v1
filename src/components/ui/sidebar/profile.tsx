import defaultAvatar from "@/assets/images/avatar.svg";
import { EllipsisVerticalIcon } from "lucide-react";

export function Profile(){
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-[10px]">
        <div className="w-[40px] h-[40px] rounded-[10px] overflow-hidden">
          <img src={defaultAvatar} alt="avatar" />
        </div>

        <div className="flex flex-col items-start">
          <p className="font-semibold text-md leading-tight">Joseph</p>
          <p className="text-small text-black/80">Admin</p>
        </div>
      </div>

      <button type="button" className="w-[28px] h-[28px] flex items-center justify-center border border-[#CECECE] rounded-[6px] hover:bg-black/3">
        <EllipsisVerticalIcon width={18} className="text-[#989898] cursor-pointer" />
      </button>
    </div>
  )
}