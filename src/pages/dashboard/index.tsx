import { StarIcon, TerminalIcon, UserCheckIcon, Users2Icon } from "lucide-react";

export default function Index(){
  return (
    <div>
      <div className="w-full bg-natural-gradient shadow-primary grid grid-cols-4 border border-[#E3E3E3] rounded-3xl dark:bg-dark-natural-gradient dark:border-white/10">
        <div className="p-[20px] flex flex-col gap-[10px] border-r border-black/10 dark:border-white/10 dark:text-white">
          <div className="flex items-center gap-[5px]">
            <TerminalIcon width={16} height={16} />
            <p>Commands</p>
          </div>
          <h4 className="text-h4 font-semibold">156</h4>
        </div>

        <div className="p-[20px] flex flex-col gap-[10px] border-r border-black/10 dark:border-white/10 dark:text-white">
          <div className="flex items-center gap-[5px]">
            <StarIcon width={16} height={16} />
            <p>Premium Users</p>
          </div>
          <h4 className="text-h4 font-semibold">5</h4>
        </div>

        <div className="p-[20px] flex flex-col gap-[10px] border-r border-black/10 dark:border-white/10 dark:text-white">
          <div className="flex items-center gap-[5px]">
            <Users2Icon width={16} height={16} />
            <p>Total Users</p>
          </div>
          <h4 className="text-h4 font-semibold">2,580</h4>
        </div>

        <div className="p-[20px] flex flex-col gap-[10px] dark:text-white dark:border-white/10">
          <div className="flex items-center gap-[5px]">
            <UserCheckIcon width={16} height={16} />
            <p>Active Users</p>
          </div>
          <h4 className="text-h4 font-semibold">1,368</h4>
        </div>
      </div>
    </div>
  )
}