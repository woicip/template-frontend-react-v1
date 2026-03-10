import SubMenuContinueGlyph from "@/assets/images/sub_menu_continue_glyph";
import { SubMenuLastGlyph } from "@/assets/images/sub_menu_last_glyph";
import { useCollapse } from "@/context/collapse-context";
import { cn } from "@/utils/cn";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { NavLink } from "react-router";

export type MenuIconProps = {
  icon: ReactNode;
  name: string;
  href: string;
  active: boolean;
  children?: MenuIconProps[]
}

export function MenuItem(props: MenuIconProps){
  const { collapse } = useCollapse();
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
      {props.children?.length ? (
        <button 
          type="button"
          className={cn(
            "w-full text-left py-[7px] px-[12px] rounded-[8px] border border-transparent cursor-pointer",
            props.active ? "primary-gradient text-white border-black/10 dark:border-white/10" : "hover:bg-primary-gradient hover:text-white hover:border-black/10 dark:text-dark-gray",
            props.children && "flex items-center justify-between", collapse && "w-fit"
          )}
          onClick={onBtnClick}
        >
          <div className="flex items-center gap-[10px]">
            {props.icon}
            {!collapse && props.name}
          </div>
          
          {props.children?.length ? (
            <>
              {open ? <ChevronUpIcon width={18} height={18} /> : <ChevronDownIcon width={18} height={18} />}
            </>
          ) : (null)}
        </button>
      ) : (
        <NavLink to={props.href}>
          <button 
            type="button"
            className={cn(
              "w-full text-left py-[7px] px-[12px] rounded-[8px] border border-transparent cursor-pointer",
              props.active ? "primary-gradient text-white border-black/10 dark:border-white/10" : "hover:bg-primary-gradient hover:text-white hover:border-black/10 dark:text-dark-gray",
              props.children && "flex items-center justify-between", collapse && "w-fit flex items-center justify-center"
            )}
            onClick={onBtnClick}
          >
            <div className="flex items-center gap-[10px]">
              {props.icon}
              {!collapse && props.name}
            </div>
            
            {props.children?.length ? (
              <>
                {open ? <ChevronUpIcon width={18} height={18} /> : <ChevronDownIcon width={18} height={18} />}
              </>
            ) : (null)}
          </button>
        </NavLink>
      )}
      
      {
        Number(props.children?.length) > 0 ? (
          <div
            ref={subRef}
            style={{ maxHeight: '0px' }}
            className={cn("children-menu overflow-hidden pl-[20px] flex flex-col", open && props.children && "mb-[10px] pb-[10px]")}
          >
            { props.children?.map((child, i) => (
                <NavLink to={child.href} className={cn("flex items-end relative", (i+1) === props.children?.length && "items-start pb-[8px]")}>
                  <div>
                    {(i+1) === props.children?.length ? <SubMenuLastGlyph /> : <SubMenuContinueGlyph />}
                  </div>
                  <button type="button" className={cn('w-full text-left py-[4px] px-[8px] rounded-[5px] border border-transparent cursor-pointer', (i+1) === props.children?.length && "relative top-[7px]", child.active ? "primary-gradient text-white border border-black/10" : "hover:bg-primary-gradient hover:text-white dark:hover:bg-[#272727] hover:border-black/10 dark:hover:text-dark-text dark:text-dark-gray")}>
                    <div className="flex items-center gap-[6px]">
                      {child.icon}
                      <p className="text-small">{child.name}</p>
                    </div>
                  </button>
                </NavLink>
              ))
            }
          </div>
        ) : (null)
      }
    </div>
  )
}