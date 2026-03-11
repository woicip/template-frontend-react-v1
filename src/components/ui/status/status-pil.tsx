import { cn } from "@/utils/cn"

type IStatusPilType = "success" | "danger" | "alert" | "info"

export default function StatusPil(props: { theme?: IStatusPilType } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>){
  const className = cn("select-none w-fit py-[3px] px-[11px] rounded-full", props.className)
  
  switch (props.theme) {
    case "success":
      return (
        <div className={cn(className, "bg-[#10B981]/10")}>
          <span className="font-medium text-[#10B981]">{props.children}</span>
        </div>
      )
    
    case "danger":
      return (
        <div className={cn(className, "bg-[#EF4444]/10")}>
          <span className="font-medium text-[#EF4444]">{props.children}</span>
        </div>
      )

    case "alert":
      return (
        <div className={cn(className, "bg-[#F59E0B]/10")}>
          <span className="font-medium text-[#F59E0B]">{props.children}</span>
        </div>
      )
    
    case "info":
      return (
        <div className={cn(className, "bg-[#2D5BFF]/10")}>
          <span className="font-medium text-[#2D5BFF]">{props.children}</span>
        </div>
      )

    default:
      return (
        <div className={cn(className, "bg-black/10 dark:bg-white/10")}>
          <span className="font-medium text-black dark:text-gray-300">{props.children}</span>
        </div>
      )
  }
}