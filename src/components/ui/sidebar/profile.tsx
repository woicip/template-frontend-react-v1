import defaultAvatar from "@/assets/images/avatar.svg";
import { useCollapse } from "@/context/collapse-context";
import { cn } from "@/utils/cn";
import { ChevronsUpDownIcon } from "lucide-react";

export function Profile(){
  const { collapse } = useCollapse();
  return (
    <div className={cn("flex items-center justify-between", collapse && "justify-center")}>
      <div className="flex items-center gap-[10px]">
        <div className="w-[40px] h-[40px] rounded-[10px] overflow-hidden">
          <img src={defaultAvatar} alt="avatar" />
        </div>

        {
          !collapse && (
            <div className="flex flex-col items-start dark:text-dark-gray">
              <p className="font-semibold text-md leading-tight">Joseph</p>
              <p className="text-small text-black/80 dark:text-dark-gray">Admin</p>
            </div>
          )
        }
      </div>

      {
        !collapse && (
          <button
            type="button"
            className="w-[28px] h-[28px] bg-natural-gradient shadow-primary flex items-center justify-center border border-[#CECECE] rounded-[6px] hover:bg-black/3 hover:opacity-80 transition-all dark:bg-dark-natural-gradient dark:border-dark-border dark:text-white"
          >
            <ChevronsUpDownIcon width={18} className="text-[#989898] cursor-pointer" />
          </button>
        )
      }
    </div>
  )
}