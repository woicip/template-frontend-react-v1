import SubMenuContinueGlyph from "@/assets/images/sub_menu_continue_glyph";
import { SubMenuLastGlyph } from "@/assets/images/sub_menu_last_glyph";
import { useCollapse } from "@/context/collapse-context";
import { cn } from "@/utils/cn";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

export interface MenuIconProps {
  icon: ReactNode;
  name: string;
  href: string;
  active: boolean;
  children?: MenuIconProps[]
}

interface SubMenuItemProps {
  open: boolean;
  subRef: React.RefObject<HTMLDivElement | null>;
  children?: MenuIconProps[]
}

interface MenuBtnProps { 
  open?: boolean;
  isHaveChildren?: boolean; 
  active: boolean; 
  name: string; 
  icon: ReactNode; 
  href: string; 
  children?: MenuIconProps[];
  onClick: () => void;
}


function SubMenu(props: SubMenuItemProps){
  const { open, subRef } = props;

  return (
    <div
      ref={subRef}
      style={{ maxHeight: '0px' }}
      className={cn("children-menu overflow-hidden pl-[20px] flex flex-col", open && props.children && "mb-[10px] pb-[10px]")}
    >
      { props.children?.map((child, i) => (
          <NavLink key={child.href} to={child.href} className={cn("flex items-end relative", (i+1) === props.children?.length && "items-start pb-[8px]")}>
            <div className={twMerge(props.children?.length === i+1 && "relative top-[-1.5px]")}>
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
  )
}

function MenuBtn(props: MenuBtnProps){
  const { collapse } = useCollapse();
  const { open, isHaveChildren, onClick } = props;

  return (
    <>
      {isHaveChildren ? (
        <button 
          type="button"
          className={cn(
            "w-full text-left py-[7px] px-[12px] rounded-[8px] border border-transparent cursor-pointer",
            props.active ? "primary-gradient text-white border-black/10 dark:border-white/10" : "hover:bg-primary-gradient hover:text-white hover:border-black/10 dark:text-dark-gray",
            props.children && "flex items-center justify-between", collapse && "w-fit"
          )}
          onClick={onClick}
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
            onClick={onClick}
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
    </>
  )
}

export function MenuItem(props: MenuIconProps){
  const { collapse } = useCollapse();
  const [open, setOpen] = useState(false);
  let subRef = useRef<HTMLDivElement>(null);

  const isHaveChildren = Number(props.children?.length) > 0;

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

  useEffect(() => {
    if(collapse){
      setOpen(false);
    }
  }, [collapse])

  return (
    <div className="select-none">
      <MenuItem.Btn
        open={open}
        isHaveChildren={isHaveChildren}
        onClick={onBtnClick}
        {...props}
      />
      {
        isHaveChildren && (
          <MenuItem.SubMenu
            open={open}
            children={props.children}
            subRef={subRef}
          />
        )
      }
    </div>
  )
}

MenuItem.SubMenu = SubMenu;
MenuItem.Btn = MenuBtn;