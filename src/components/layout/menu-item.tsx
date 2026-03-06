import SubMenuContinueGlyph from "@/assets/images/sub_menu_continue_glyph";
import { SubMenuLastGlyph } from "@/assets/images/sub_menu_last_glyph";
import { cn } from "@/utils/cn";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

export type MenuIconProps = {
  icon: ReactNode;
  name: string;
  active: boolean;
  children?: MenuIconProps[]
}

export function MenuItem(props: MenuIconProps){
  const [open, setOpen] = useState(false);
  let subRef = useRef<HTMLDivElement>(null);

  const onBtnClick = () => {
    setOpen(!open)
    if(!open){
      const current = subRef.current as HTMLDivElement;
      current["style"]["maxHeight"] = `${subRef.current?.scrollHeight}px`;
    } else {
      const current = subRef.current as HTMLDivElement;
      current["style"]["maxHeight"] = "0px";
    }
  }

  return (
    <div className="select-none">
      <button 
        type="button"
        className={cn("w-full text-left py-[8px] px-[12px] rounded-[8px] border border-transparent cursor-pointer", props.active ? "primary-gradient text-white dark:text-white border-black/10" : "hover:bg-white dark:hover:bg-[#272727] hover:border-black/10 dark:text-dark-text", props.children && "flex items-center justify-between")}
        onClick={onBtnClick}
      >
        <div className="flex items-center gap-[10px]">
          {props.icon}
          {props.name}
        </div>
        
        {props.children?.length ? (
          <>
            {open ? <ChevronUpIcon width={18} height={18} /> : <ChevronDownIcon width={18} height={18} />}
          </>
        ) : (null)}
      </button>
      
      <div
        ref={subRef}
        style={{ maxHeight: '0px' }}
        className={cn("children-menu overflow-hidden pl-[20px] flex flex-col", open && props.children && "mb-[10px] pb-[10px]")}
      >
        { props.children?.map((child, i) => (
            <div className={cn("flex items-end relative", (i+1) === props.children?.length && "items-start pb-[8px]")}>
              <div>
                {(i+1) === props.children?.length ? <SubMenuLastGlyph /> : <SubMenuContinueGlyph />}
              </div>
              <button type="button" className={cn('w-full text-left py-[4px] px-[8px] rounded-[5px] border border-transparent cursor-pointer', (i+1) === props.children?.length && "relative top-[7px]", child.active ? "primary-gradient text-white border border-black/10" : "hover:bg-primary dark:hover:bg-[#272727] hover:border-black/10 hover:text-text dark:hover:text-dark-text dark:text-dark-text")}>
                <div className="flex items-center gap-[6px]">
                  {child.icon}
                  <p className="text-small">{child.name}</p>
                </div>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}