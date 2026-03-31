import { useLocation } from "react-router"
import type { MenuIconProps } from "./menu-item"
import { useCollapse } from "@/context/collapse-context";
import { HomeIcon, ShieldUserIcon, UserRoundIcon, UsersIcon } from "lucide-react"
import { matchRoute } from "@/utils/url";

function useMenuAdmin(){
  const location = useLocation();
  const { collapse } = useCollapse();

  return [
    {
      name: "Dashboard",
      href: "/dashboard/admin",
      icon: <HomeIcon width={18} height={18} />,
      active: location.pathname === "/dashboard/admin",
    },
    {
      name: "User",
      href: "/dashboard/admin/user/account",
      active: matchRoute("/dashboard/admin/user"),
      icon: <UsersIcon width={18} height={18} />,
      children: !collapse ? [
        {
          name: "Accounts",
          href: "/dashboard/admin/user/account",
          active: matchRoute("/dashboard/admin/user/account"),
          icon: <UserRoundIcon width={16} height={16} />,
        },
        {
          name: "Roles",
          href: "/dashboard/admin/user/roles",
          active: matchRoute("/dashboard/admin/user/roles"),
          icon: <ShieldUserIcon width={16} height={16} />,
        }
      ] : []
    },
  ] as MenuIconProps[]
}

export { useMenuAdmin } 