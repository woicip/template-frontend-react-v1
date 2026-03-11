import { AlertTriangleIcon, ArrowDownIcon, BetweenVerticalEnd, ChevronDownIcon, ChevronUpIcon, CloudUpload, DiffIcon, HomeIcon, Layers2Icon, LayoutGrid, MousePointer, PencilLineIcon, RectangleHorizontal, SparkleIcon, TableIcon, UserIcon } from "lucide-react"
import type { MenuIconProps } from "./menu-item"
import { useLocation } from "react-router"
import { useCollapse } from "@/context/collapse-context";

function useMenu(){
  const location = useLocation();
  const { collapse } = useCollapse();

  return [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <HomeIcon width={18} height={18} />,
      active: location.pathname === "/dashboard",
      children: !collapse ? [
        {
          name: "General",
          href: "/dashboard",
          active: location.pathname === "/dashboard",
          icon: <LayoutGrid width={16} height={16} />,
        },
      ] : []
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
    {
      name: "Modal Overlay",
      href: "/dashboard/modal-overlay",
      active: location.pathname === "/dashboard/modal-overlay",
      icon: <Layers2Icon width={18} height={18} />,
    },
    {
      name: "Avatar",
      href: "/dashboard/avatar",
      active: location.pathname === "/dashboard/avatar",
      icon: <UserIcon width={18} height={18} />,
    },
    {
      name: "Card",
      href: "/dashboard/card",
      active: location.pathname === "/dashboard/card",
      icon: <RectangleHorizontal width={18} height={18} />,
    },
    {
      name: "File Upload",
      href: "/dashboard/file-upload",
      active: location.pathname === "/dashboard/file-upload",
      icon: <CloudUpload width={18} height={18} />,
    },
    {
      name: "Tabs",
      href: "/dashboard/tabs",
      active: location.pathname === "/dashboard/tabs",
      icon: <BetweenVerticalEnd width={18} height={18} />,
    },
    {
      name: "Table",
      href: "/dashboard/table",
      active: location.pathname === "/dashboard/table",
      icon: <TableIcon width={18} height={18} />,
    },
    {
      name: "Tooltip",
      href: "/dashboard/tooltip",
      active: location.pathname === "/dashboard/tooltip",
      icon: <ChevronUpIcon width={18} height={18} />,
    },
    {
      name: "Free",
      href: "/dashboard/free",
      active: location.pathname === "/dashboard/free",
      icon: <SparkleIcon width={18} height={18} />,
    },
  ] as MenuIconProps[]
}

export { useMenu } 