import { cn } from "@/utils/cn";
import { MenuItem } from "./menu-item";
import { useCollapse } from "@/context/collapse-context";
import { useMenuAdmin } from "./use-menu-admin";
import { useMenu } from "./use-menu";
import { useLocation } from "react-router";

export default function MenuList(){
  const { collapse } = useCollapse();
  const menu = useMenuAdmin();
  const menuComponents = useMenu();
  const location = useLocation();
  const isComponent = location.pathname.startsWith("/dashboard/components");

  return (
    <div className={cn("flex flex-col gap-[2px]", collapse && "items-center")}>
      <>
        {
          isComponent ? (
            <div>
              { menuComponents.map((menu) => <MenuItem key={menu.name} {...menu}/>) }
            </div>
          ) : (
            <div>
              { menu.map((menu) => <MenuItem key={menu.name} {...menu}/>) }
            </div>
          )
        }
      </>
    </div>
  )
}