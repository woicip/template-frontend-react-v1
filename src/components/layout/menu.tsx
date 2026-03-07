import { AlertTriangleIcon, ArrowDownIcon, ChevronDownIcon, DiffIcon, HomeIcon, LayoutGrid, MousePointer, PencilLineIcon } from "lucide-react"
import type { MenuIconProps } from "./menu-item"
import { useLocation } from "react-router"

function useMenu(){
  const location = useLocation();

  return [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <HomeIcon width={18} height={18} />,
      active: location.pathname === "/dashboard",
      children: [
        {
          name: "General",
          href: "/dashboard",
          active: location.pathname === "/dashboard",
          icon: <LayoutGrid width={16} height={16} />,
        },
      ]
    },
    {
      name: "Input",
      href: "/dashboard/input",
      active: location.pathname === "/dashboard/input",
      icon: <PencilLineIcon width={18} height={18} />,
    },
    {
      name: "Button",
      href: "/dashboard/button",
      active: location.pathname === "/dashboard/button",
      icon: <ArrowDownIcon width={18} height={18} />,
    },
    {
      name: "Select",
      href: "/dashboard/select",
      active: location.pathname === "/dashboard/select",
      icon: <MousePointer width={18} height={18} />,
    },
    {
      name: "Stepper",
      href: "/dashboard/stepper",
      active: location.pathname === "/dashboard/stepper",
      icon: <DiffIcon width={18} height={18} />,
    },
    {
      name: "Accordion",
      href: "/dashboard/accordion",
      active: location.pathname === "/dashboard/accordion",
      icon: <ChevronDownIcon width={18} height={18} />,
    },
    {
      name: "Alert",
      href: "/dashboard/alert",
      active: location.pathname === "/dashboard/alert",
      icon: <AlertTriangleIcon width={18} height={18} />,
    },
  ] as MenuIconProps[]
}

export { useMenu } 